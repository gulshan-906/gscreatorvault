import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};


export default async function handler(req, res){

  if(req.method !== "POST"){

    return res.status(405).json({
      error:"Method Not Allowed"
    });

  }


  const BOT_TOKEN =
    process.env.BOT_TOKEN;


  const CHAT_ID =
    process.env.CHAT_ID;


  if(!BOT_TOKEN){

    console.error("BOT_TOKEN missing");

    return res.status(500).json({
      error:"BOT_TOKEN is not configured"
    });

  }


  if(!CHAT_ID){

    console.error("CHAT_ID missing");

    return res.status(500).json({
      error:"CHAT_ID is not configured"
    });

  }


  try{

    const form =
      formidable({
        multiples:false,
        keepExtensions:true
      });


    const [fields, files] =
      await form.parse(req);


    const getField = (name) => {

      const value = fields[name];

      if(Array.isArray(value)){
        return value[0] || "";
      }

      return value || "";

    };


    const listingId =
      getField("listingId");


    const listingTitle =
      getField("listingTitle");


    const platform =
      getField("platform");


    const price =
      getField("price");


    const mobile =
      getField("mobile");


    const utr =
      getField("utr");


    let screenshot =
      files.paymentScreenshot;


    if(Array.isArray(screenshot)){

      screenshot =
        screenshot[0];

    }


    const caption = `
🛒 NEW PURCHASE

━━━━━━━━━━━━━━━━

📌 Listing: ${listingTitle}

🆔 Listing ID: ${listingId}

📱 Platform: ${platform}

💰 Price: ₹${price}

━━━━━━━━━━━━━━━━

📞 Buyer Number:
${mobile}

🔢 UTR / Transaction ID:
${utr}

━━━━━━━━━━━━━━━━

💳 Payment Screenshot Attached

⏳ Status: PENDING VERIFICATION
`;


    if(
      screenshot &&
      screenshot.filepath
    ){

      const telegramURL =
        `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;


      const formData =
        new FormData();


      formData.append(
        "chat_id",
        CHAT_ID
      );


      formData.append(
        "caption",
        caption
      );


      formData.append(
        "photo",
        new Blob([
          fs.readFileSync(
            screenshot.filepath
          )
        ]),
        screenshot.originalFilename ||
        "payment.png"
      );


      const telegramResponse =
        await fetch(
          telegramURL,
          {
            method:"POST",
            body:formData
          }
        );


      const telegramResult =
        await telegramResponse.json();


      if(!telegramResponse.ok){

        console.error(
          "Telegram error:",
          telegramResult
        );


        return res.status(500).json({
          error:
            "Telegram could not receive the payment details."
        });

      }

    }else{

      const telegramURL =
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;


      const telegramResponse =
        await fetch(
          telegramURL,
          {
            method:"POST",
            headers:{
              "Content-Type":
                "application/json"
            },
            body:JSON.stringify({

              chat_id:CHAT_ID,

              text:caption

            })
          }
        );


      const telegramResult =
        await telegramResponse.json();


      if(!telegramResponse.ok){

        console.error(
          "Telegram error:",
          telegramResult
        );


        return res.status(500).json({
          error:
            "Telegram message failed."
        });

      }

    }


    return res.status(200).json({

      success:true,

      message:
        "Payment details sent successfully."

    });


  }catch(error){

    console.error(
      "API ERROR:",
      error
    );


    return res.status(500).json({

      error:
        "Internal server error."

    });

  }

}