// ============================================
// CREATORVAULT CONFIG
// ============================================

const UPI_ID = "mauryasell@fam";
const UPI_NAME = "CreatorVault";

const WHATSAPP_NUMBER = "919999999999";

let activeCategory = "all";
let currentPurchaseId = null;


// ============================================
// LISTINGS DATA
// ============================================

const listingsData = [

  // ==========================================
  // YOUTUBE
  // ==========================================

  {
    id:"NA0002",
    platform:"youtube",
    title:"GW SHANE",
    subscribers:"1.73m",
    views:"223628132",
    monetized:"Yes",
    earning:"4900",
    strikes:"No Strike",
    category:"Gaming",
    videoType:"Both",
    audience:"India",
    price:5000,
    status:"Available",
    image:"/posts/na0002/1.jpg",
    photos:[
      "/posts/na0002/1.jpg",
      "/posts/na0002/2.jpg",
      "/posts/na0002/3.jpg"
    ],
    link:"https://youtube.com/@shane-ff.786?si=z0q_9VRUpZU4Yxhz",
    description:"Gaming YouTube channel with an established subscriber base and high video views."
  },


  {
    id:"CD00105",
    platform:"youtube",
    title:"NEHA KI STORY",
    subscribers:"1058",
    views:"1,71,411",
    monetized:"yes",
    earning:"-",
    strikes:"No Strike",
    category:"People and blogs",
    videoType:"Long Videos",
    audience:"India",
    price:1300,
    status:"Available",
    image:"/posts/cd00105/1.jpg",
    photos:[
      "/posts/cd00105/1.jpg",
      "/posts/cd00105/2.jpg",
      "/posts/cd00105/3.jpg"
    ],
    link:"https://youtube.com/@nehakistory-m3c?si=U5WVNrKO4JBCtSHR/",
    description:"YouTube channel with long-form video content and an existing audience."
  },


  {
    id:"CD00108",
    platform:"youtube",
    title:"MASTI VERSE TV",
    subscribers:"1319",
    views:"1.7L",
    monetized:"no",
    earning:"-",
    strikes:"No Strike",
    category:"Comedy",
    videoType:"Shorts",
    audience:"India",
    price:600,
    status:"Available",
    image:"/posts/cd00108/1.jpg",
    photos:[
      "/posts/cd00108/1.jpg",
      "/posts/cd00108/2.jpg",
      "/posts/cd00108/3.jpg"
    ],
    link:"https://www.youtube.com/@Masti_VerseTV",
    description:"Comedy focused YouTube Shorts channel."
  },


  {
    id:"CD00109",
    platform:"youtube",
    title:"HINA TOON",
    subscribers:"2,39,359",
    views:"60M",
    monetized:"no",
    earning:"1M",
    strikes:"No Strike",
    category:"People and blogs",
    videoType:"Shorts",
    audience:"India",
    price:1800,
    status:"Available",
    image:"/posts/cd00109/1.jpg",
    photos:[
      "/posts/cd00109/1.jpg",
      "/posts/cd00109/2.jpg",
      "/posts/cd00109/3.jpg"
    ],
    link:"https://youtube.com/@hina_toon1?si=P1njCMFNFW4p7-jI",
    description:"YouTube Shorts channel with high views and an established subscriber base."
  },


  {
    id:"CD00110",
    platform:"youtube",
    title:"GMR OMKAR",
    subscribers:"1010",
    views:"83k",
    monetized:"no",
    earning:"-",
    strikes:"No Strike",
    category:"People and blogs",
    videoType:"Shorts",
    audience:"India",
    price:650,
    status:"Available",
    image:"/posts/cd00110/1.jpg",
    photos:[
      "/posts/cd00110/1.jpg",
      "/posts/cd00110/2.jpg",
      "/posts/cd00110/3.jpg"
    ],
    link:"https://www.youtube.com/@GMROMKARR",
    description:"YouTube Shorts channel with an existing subscriber base."
  },


  {
    id:"CD00111",
    platform:"youtube",
    title:"DEV GMR 00",
    subscribers:"1731",
    views:"85k",
    monetized:"no",
    earning:"1",
    strikes:"No Strike",
    category:"Film and animation",
    videoType:"Shorts",
    audience:"India",
    price:650,
    status:"Available",
    image:"/posts/cd00111/1.jpg",
    photos:[
      "/posts/cd00111/1.jpg",
      "/posts/cd00111/2.jpg",
      "/posts/cd00111/3.jpg"
    ],
    link:"https://www.youtube.com/@DEVGMR0.1",
    description:"Film and animation focused YouTube Shorts channel."
  },


  {
    id:"CD00113",
    platform:"youtube",
    title:"FUNTO",
    subscribers:"123k",
    views:"5111290",
    monetized:"no",
    earning:"12404.4",
    strikes:"No Strike",
    category:"Entertainment",
    videoType:"Shorts",
    audience:"India",
    price:2000,
    status:"Available",
    image:"/posts/cd00113/1.jpg",
    photos:[
      "/posts/cd00113/1.jpg",
      "/posts/cd00113/2.jpg",
      "/posts/cd00113/3.jpg"
    ],
    link:"https://youtube.com/@funto-x4e?si=humt70H7V5iJngKl",
    description:"Entertainment focused YouTube Shorts channel with high video activity."
  },


  {
    id:"CH00037",
    platform:"youtube",
    title:"AI FACTS",
    subscribers:"12000",
    views:"1m",
    monetized:"No",
    earning:"-",
    strikes:"No Strike",
    category:"facts",
    videoType:"short",
    audience:"-",
    price:405,
    status:"Sold Out",
    image:"/posts/ch00037/1.jpg",
    photos:[
      "/posts/ch00037/1.jpg",
      "/posts/ch00037/2.jpg",
      "/posts/ch00037/3.jpg"
    ],
    link:"https://youtube.com/",
    description:"Facts focused YouTube Shorts channel."
  },


  {
    id:"CH00038",
    platform:"youtube",
    title:"COMEDY HUB",
    subscribers:"3300",
    views:"2 Lac",
    monetized:"No",
    earning:"-",
    strikes:"No Strike",
    category:"Tech",
    videoType:"short",
    audience:"-",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00038/1.jpg",
    photos:[
      "/posts/ch00038/1.jpg",
      "/posts/ch00038/2.jpg",
      "/posts/ch00038/3.jpg"
    ],
    link:"https://youtube.com/",
    description:"YouTube channel listing currently marked as sold out."
  },


  {
    id:"CH00039",
    platform:"youtube",
    title:"MUSIC ZONE",
    subscribers:"55500",
    views:"18m",
    monetized:"No",
    earning:"-",
    strikes:"No Strike",
    category:"Tech",
    videoType:"short",
    audience:"-",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00039/1.jpg",
    photos:[
      "/posts/ch00039/1.jpg",
      "/posts/ch00039/2.jpg",
      "/posts/ch00039/3.jpg"
    ],
    link:"https://youtube.com/",
    description:"YouTube channel listing currently marked as sold out."
  },


  {
    id:"CH00040",
    platform:"youtube",
    title:"INSTA TALE AI",
    subscribers:"51k",
    views:"10 cr",
    monetized:"No",
    earning:"-",
    strikes:"No Strike",
    category:"story",
    videoType:"short",
    audience:"-",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00040/1.jpg",
    photos:[
      "/posts/ch00040/1.jpg",
      "/posts/ch00040/2.jpg",
      "/posts/ch00040/3.jpg"
    ],
    link:"https://channeldeals.blogspot.com/2026/03/41000-75-75-cr.html",
    description:"AI story focused YouTube Shorts channel."
  },


  {
    id:"CH00041",
    platform:"youtube",
    title:"MOHAN KUMAR",
    subscribers:"1545",
    views:"43k",
    monetized:"No",
    earning:"-",
    strikes:"No Strike",
    category:"vlogs",
    videoType:"short",
    audience:"-",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00041/1.jpg",
    photos:[
      "/posts/ch00041/1.jpg",
      "/posts/ch00041/2.jpg",
      "/posts/ch00041/3.jpg"
    ],
    link:"https://youtube.com/",
    description:"Vlog focused YouTube channel."
  },


  {
    id:"CH00043",
    platform:"youtube",
    title:"DIN DUNIYA JACTION",
    subscribers:"1050",
    views:"2L",
    monetized:"yes",
    earning:"43",
    strikes:"No Strike",
    category:"facts",
    videoType:"short",
    audience:"-",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00043/1.jpg",
    photos:[
      "/posts/ch00043/1.jpg",
      "/posts/ch00043/2.jpg",
      "/posts/ch00043/3.jpg"
    ],
    link:"https://youtube.com/",
    description:"Facts focused YouTube Shorts channel."
  },


  {
    id:"CH00045",
    platform:"youtube",
    title:"RANJAY RAI",
    subscribers:"40k",
    views:"15L",
    monetized:"No",
    earning:"-",
    strikes:"No Strike",
    category:"Tech",
    videoType:"short",
    audience:"-",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00045/1.jpg",
    photos:[
      "/posts/ch00045/1.jpg",
      "/posts/ch00045/2.jpg",
      "/posts/ch00045/3.jpg"
    ],
    link:"https://youtube.com/",
    description:"Technology focused YouTube Shorts channel."
  },


  {
    id:"CH00046",
    platform:"youtube",
    title:"TECH GYAN",
    subscribers:"1k",
    views:"2L",
    monetized:"No",
    earning:"-",
    strikes:"No Strike",
    category:"Tech",
    videoType:"short",
    audience:"-",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00046/1.jpg",
    photos:[
      "/posts/ch00046/1.jpg",
      "/posts/ch00046/2.jpg",
      "/posts/ch00046/3.jpg"
    ],
    link:"https://youtube.com/",
    description:"Technology focused YouTube Shorts channel."
  },


  {
    id:"CH00048",
    platform:"youtube",
    title:"ISLAMIC NATE",
    subscribers:"1k",
    views:"82k",
    monetized:"No",
    earning:"4000",
    strikes:"No Strike",
    category:"Education",
    videoType:"short",
    audience:"India",
    price:null,
    priceText:"Ask in Inbox",
    status:"Sold Out",
    image:"/posts/ch00048/1.jpg",
    photos:[
      "/posts/ch00048/1.jpg",
      "/posts/ch00048/2.jpg",
      "/posts/ch00048/3.jpg"
    ],
    link:"https://studio.youtube.com/video/Mw2mJzXOpq4/edit",
    description:"Educational YouTube Shorts channel."
  },


  {
    id:"CH00049",
    platform:"youtube",
    title:"R.K",
    subscribers:"5700",
    views:"482000",
    monetized:"yes",
    earning:"82",
    strikes:"-",
    category:"Education",
    videoType:"Long",
    audience:"India",
    price:1500,
    status:"Sold Out",
    image:"/posts/ch00049/1.jpg",
    photos:[
      "/posts/ch00049/1.jpg",
      "/posts/ch00049/2.jpg",
      "/posts/ch00049/3.jpg"
    ],
    link:"https://www.youtube.com/@ramkishuntechfix",
    description:"Education focused YouTube channel with long-form content."
  },


  // ==========================================
  // INSTAGRAM
  // ==========================================

  {
    id:"IG001",
    platform:"instagram",
    title:"Meme/Comedy",

    followers:"920",
    reach:"12000",
    storyViews:"1000",
    ogeStatus:"Yes",
    niche:"Meme/Comedy",
    audience:"IND",

    price:600,
    status:"Available",

    image:"/posts/ig001/1.jpg",

    photos:[
      "/posts/ig001/1.jpg",
      "/posts/ig001/2.jpg",
      "/posts/ig001/3.jpg"
    ],

    link:"https://instagram.com/",

    description:"Meme and comedy Instagram page."
  },


  // ==========================================
  // FACEBOOK
  // ==========================================

  {
    id:"FB1001",
    platform:"facebook",
    title:"DILIP KUMAR",

    followers:"245K",
    reach:"230K",
    bmStatus:"Linked",
    pageQuality:"Green",
    monetization:"Fully Monetized",
    earning:"-",
    category:"Entertainment",
    audience:"Indian",

    price:1000,
    status:"Available",

    image:"/posts/FB1001/1.jpg",

    photos:[
      "/posts/FB1001/1.jpg",
      "/posts/FB1001/2.jpg",
      "/posts/FB1001/3.jpg"
    ],

    link:"https://www.facebook.com/share/189JYvQJD8/",

    description:"Entertainment focused Facebook page."
  },
  
  {
  id:"fb10030",
  platform:"facebook",
  title:"BRISTI MAHAPATRA",
  followers:"55K",
  reach:"10K",
  bmStatus:"Linked",
  pageQuality:"Green",
  monetization:"Fully Monetized",
  earning:"$850",
  category:"Other",
  audience:"India, pakistan, bangladesh",
  price:1900,
  status:"Available",
  image:"/posts/fb10030/1.jpg",
  photos:[
  "/posts/fb10030/1.jpg",
  "/posts/fb10030/2.jpg",
  "/posts/fb10030/3.jpg",
  "/posts/fb10030/4.jpg"
],
  link:"https://www.facebook.com/FtSamim08",
  description:"Facebook page with 55K followers, 10K reach and full monetization."
},

];

// ============================================
// HELPERS
// ============================================

function formatMoney(amount){

  return "₹" +
    Number(amount).toLocaleString("en-IN");

}


function platformName(platform){

  if(platform === "youtube"){
    return "YouTube Channel";
  }

  if(platform === "instagram"){
    return "Instagram Page";
  }

  if(platform === "facebook"){
    return "Facebook Page";
  }

  return platform;

}


function findListing(id){

  return listingsData.find(
    item => item.id === id
  );

}

function youtubeSecondStatLabel(id){

  const earningIds = [
    "NA0002",
    "CD00105",
    "CH00043",
    "CH00049"
  ];

  return earningIds.includes(id)
    ? "EARNING"
    : "WATCH TIME";
}

// ============================================
// CATEGORY
// ============================================

function setCategory(category,button){

  activeCategory = category;

  document
    .querySelectorAll(".filter")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  if(button){
    button.classList.add("active");
  }

  renderListings();

}


// ============================================
// RENDER LISTINGS
// ============================================

function renderListings(){

  const grid =
    document.getElementById("listingGrid");

  const searchInput =
    document.getElementById("searchInput");

  const search =
    searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";


  const filtered =
    listingsData.filter(item => {

      const categoryMatch =
        activeCategory === "all" ||
        item.platform === activeCategory;


      const text = (
        item.title + " " +
        item.niche + " " +
        item.country + " " +
        item.id
      ).toLowerCase();


      return categoryMatch &&
             text.includes(search);

    });


  if(!filtered.length){

    grid.innerHTML = `
      <div class="empty">
        No listings found.
      </div>
    `;

    return;
  }


  grid.innerHTML =
    filtered
      .map(createListingHTML)
      .join("");

}


// ============================================
// LISTING CARD
// ============================================

const cardSliderPositions = {};


function createListingHTML(item){

  const audience =
    item.platform === "youtube"
      ? item.subscribers + " Subs"
      : item.followers + " Followers";


  const photos =
    item.photos && item.photos.length
      ? item.photos
      : [item.image];


  return `

    <article class="listing">

      <div class="listing-image">

  <div
    class="card-slider"
    id="card-slider-${item.id}"
    ontouchstart="cardTouchStart(event)"
    ontouchend="cardTouchEnd(event,'${item.id}')"
  >

    ${
      item.status === "Sold Out" && item.id !== "CH00049"

      ? `
        <div class="sold-out-card">

          <div class="sold-glow"></div>

          <div class="sold-lock">
            🔒
          </div>

          <div class="sold-out-text">
            SOLD OUT
          </div>

          <div class="sold-subtext">
            THIS CHANNEL IS ALREADY SOLD
          </div>

          <div class="sold-shine"></div>

        </div>
      `

      : `

        <div class="card-slider-track">

          ${photos.map((photo,index) => `

            <div class="card-slide">

              <img
                src="${photo}"
                alt="${item.title}"
                loading="lazy"
                draggable="false"
                onclick="event.stopPropagation();openPhotoViewer('${item.id}',${index})"
              >

            </div>

          `).join("")}

        </div>

      `
    }


    <!-- PLATFORM + ID -->

    <div class="listing-badges">

      <span class="platform-badge">
        ${platformName(item.platform)}
      </span>

      <span class="id-badge">
        ${item.id}
      </span>

    </div>


    <!-- STATUS -->

    <span class="available">
      ${item.status}
    </span>


    ${
      item.status !== "Sold Out" || item.id === "CH00049"

      ? `

        ${
          photos.length > 1

          ? `

            <button
              class="card-arrow card-prev"
              onclick="event.stopPropagation();changeCardSlide('${item.id}',-1)"
            >
              ‹
            </button>

            <button
              class="card-arrow card-next"
              onclick="event.stopPropagation();changeCardSlide('${item.id}',1)"
            >
              ›
            </button>

            <div class="card-dots">

              ${photos.map((photo,index) => `

                <span
                  class="card-dot ${index === 0 ? "active" : ""}"
                  onclick="event.stopPropagation();goToCardSlide('${item.id}',${index})"
                ></span>

              `).join("")}

            </div>

          `

          : ""

        }

      `

      : ""

    }

  </div>

</div>

      <div class="listing-body">

        <div class="listing-title">
          ${item.title}
        </div>

        <div class="listing-niche">
        ${item.niche || item.category || ""}
        </div>

        <div class="quick-stats">

  ${
    item.platform === "youtube"
    ? `
      <div class="quick-stat">
        <span>Audience</span>
        <strong>${item.subscribers} Subs</strong>
      </div>

      <div class="quick-stat">
        <span>Views</span>
        <strong>${item.views || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>Monetized</span>
        <strong>${item.monetized || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>Earning</span>
        <strong>${item.earning || "-"}</strong>
      </div>
    `

    : item.platform === "instagram"
    ? `
      <div class="quick-stat">
        <span>Followers</span>
        <strong>${item.followers || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>Reach</span>
        <strong>${item.reach || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>Story Views</span>
        <strong>${item.storyViews || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>OGE Status</span>
        <strong>${item.ogeStatus || "-"}</strong>
      </div>
    `

    : `
      <div class="quick-stat">
        <span>Followers</span>
        <strong>${item.followers || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>Reach</span>
        <strong>${item.reach || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>BM Status</span>
        <strong>${item.bmStatus || "-"}</strong>
      </div>

      <div class="quick-stat">
        <span>Monetization</span>
        <strong>${item.monetization || "-"}</strong>
      </div>
      `
     }

    </div>


        <div class="listing-buttons">

          <button
            class="view-btn"
            onclick="openDetails('${item.id}')"
          >
            View Details
          </button>


          <button
            class="buy-btn"
            onclick="openPurchase('${item.id}')"
          >
            Buy Now
          </button>

        </div>

      </div>

    </article>

  `;

}


// ============================================
// MAIN CARD SLIDER
// ============================================

function changeCardSlide(id,direction){

  const item =
    findListing(id);

  if(!item){
    return;
  }


  const total =
    item.photos.length;


  let current =
    cardSliderPositions[id] || 0;


  current += direction;


  if(current < 0){
    current = total - 1;
  }


  if(current >= total){
    current = 0;
  }


  cardSliderPositions[id] =
    current;


  updateCardSlider(
    id,
    current
  );

}


function goToCardSlide(id,index){

  cardSliderPositions[id] =
    index;


  updateCardSlider(
    id,
    index
  );

}


function updateCardSlider(id,index){

  const slider =
    document.getElementById(
      `card-slider-${id}`
    );


  if(!slider){
    return;
  }


  const track =
    slider.querySelector(
      ".card-slider-track"
    );


  const dots =
    slider.querySelectorAll(
      ".card-dot"
    );


  track.style.transform =
    `translateX(-${index * 100}%)`;


  dots.forEach(
    (dot,i) => {

      dot.classList.toggle(
        "active",
        i === index
      );

    }
  );

}


// ============================================
// CARD SWIPE
// ============================================

let cardStartX = 0;


function cardTouchStart(event){

  if(event.touches.length !== 1){
    return;
  }


  cardStartX =
    event.touches[0].clientX;

}


function cardTouchEnd(event,id){

  if(event.changedTouches.length !== 1){
    return;
  }


  const endX =
    event.changedTouches[0].clientX;


  const difference =
    cardStartX - endX;


  if(Math.abs(difference) < 50){
    return;
  }


  if(difference > 0){

    changeCardSlide(id,1);

  }else{

    changeCardSlide(id,-1);

  }

}


// ============================================
// DETAILS
// ============================================

const detailSliderPositions = {};

function openDetails(id){

  const item = findListing(id);

  if(!item){
    return;
  }

  detailSliderPositions[id] = 0;


  // ==========================================
  // PHOTO GALLERY
  // ==========================================

  const photos =
    item.photos && item.photos.length
      ? item.photos
      : [item.image];


  const gallery = `

    <div
      class="photo-slider"
      id="detail-slider-${item.id}"
    >

      <div class="slider-track">

        ${photos.map((photo,index) => `

          <div class="slide">

            <img
              src="${photo}"
              alt="${item.title} ${index + 1}"
              onclick="openPhotoViewer('${item.id}',${index})"
              draggable="false"
            >

          </div>

        `).join("")}

      </div>


      ${
        photos.length > 1
        ? `

          <button
            class="slider-arrow slider-prev"
            onclick="changeDetailSlide('${item.id}',-1)"
          >
            ‹
          </button>


          <button
            class="slider-arrow slider-next"
            onclick="changeDetailSlide('${item.id}',1)"
          >
            ›
          </button>


          <div class="slider-dots">

            ${photos.map((photo,index) => `

              <span
                class="slider-dot ${index === 0 ? "active" : ""}"
                onclick="goToDetailSlide('${item.id}',${index})"
              ></span>

            `).join("")}

          </div>

        `
        : ""
      }

    </div>

  `;


  // ==========================================
  // YOUTUBE
  // ==========================================

  if(item.platform === "youtube"){

    document.getElementById("detailsContent").innerHTML = `

      ${gallery}


      <div class="detail-title">
        ${item.title || "-"}
      </div>


      <div class="premium-id-row">

        <span class="premium-id-label">
          LISTING ID
        </span>

        <span class="premium-id-value">
          ${item.id}
        </span>

      </div>


      <div class="premium-price-box">

        <span class="premium-price-label">
          PRICE
        </span>

        <strong>
          ${formatMoney(item.price)}
        </strong>

      </div>


      <div class="detail-grid">


        <div class="detail-stat">

          <span>👥 SUBS</span>

          <strong>
            ${item.subscribers || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>👁 VIEWS</span>

          <strong>
            ${item.views || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>✓ MONETIZED</span>

          <strong>
            ${item.monetized || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>💲 EARNING</span>

          <strong>
            ${item.earning || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🛡 STRIKE INFO</span>

          <strong>
            ${item.strikes || "No Strike"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🏷 CATEGORY</span>

          <strong>
            ${item.category || item.niche || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🎥 VIDEO TYPE</span>

          <strong>
            ${item.videoType || item.content || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🌐 AUDIENCE</span>

          <strong>
            ${item.audience || item.country || "-"}
          </strong>

        </div>


      </div>


      <div class="detail-actions">

        <button
          class="detail-link-btn"
          onclick="window.open('${item.link}','_blank')"
        >
          ↗ &nbsp; Link
        </button>


        <button
          class="detail-share-btn"
          onclick="shareListing('${item.id}')"
        >
          ↗ &nbsp; Share
        </button>

      </div>

    `;

  }


  // ==========================================
  // INSTAGRAM
  // ==========================================

  else if(item.platform === "instagram"){

    document.getElementById("detailsContent").innerHTML = `

      ${gallery}


      <div class="detail-title">
        ${item.title || "-"}
      </div>


      <div class="premium-id-row">

        <span class="premium-id-label">
          LISTING ID
        </span>

        <span class="premium-id-value">
          ${item.id}
        </span>

      </div>


      <div class="premium-price-box">

        <span class="premium-price-label">
          PRICE
        </span>

        <strong>
          ${formatMoney(item.price)}
        </strong>

      </div>


      <div class="detail-grid">


        <div class="detail-stat">

          <span>👥 FOLLOWERS</span>

          <strong>
            ${item.followers || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>📈 REACH</span>

          <strong>
            ${item.reach || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>👁 STORY VIEWS</span>

          <strong>
            ${item.storyViews || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>✉️ OGE STATUS</span>

          <strong>
            ${item.ogeStatus || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🏷 NICHE</span>

          <strong>
            ${item.niche || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🌐 AUDIENCE</span>

          <strong>
            ${item.audience || "-"}
          </strong>

        </div>


      </div>


      <div class="detail-actions">

        <button
          class="detail-link-btn"
          onclick="window.open('${item.link}','_blank')"
        >
          ↗ &nbsp; Link
        </button>


        <button
          class="detail-share-btn"
          onclick="shareListing('${item.id}')"
        >
          ↗ &nbsp; Share
        </button>

      </div>

    `;

  }


  // ==========================================
  // FACEBOOK
  // ==========================================

  else if(item.platform === "facebook"){

    document.getElementById("detailsContent").innerHTML = `

      ${gallery}


      <div class="detail-title">
        ${item.title || "-"}
      </div>


      <div class="premium-id-row">

        <span class="premium-id-label">
          LISTING ID
        </span>

        <span class="premium-id-value">
          ${item.id}
        </span>

      </div>


      <div class="premium-price-box">

        <span class="premium-price-label">
          PRICE
        </span>

        <strong>
          ${formatMoney(item.price)}
        </strong>

      </div>


      <div class="detail-grid">


        <div class="detail-stat">

          <span>👥 FOLLOWERS</span>

          <strong>
            ${item.followers || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>📈 REACH</span>

          <strong>
            ${item.reach || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🛡 BM STATUS</span>

          <strong>
            ${item.bmStatus || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>✓ PAGE QUALITY</span>

          <strong>
            ${item.pageQuality || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>💲 MONETIZATION</span>

          <strong>
            ${item.monetization || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>💵 EARNING</span>

          <strong>
            ${item.earning || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🏷 CATEGORY</span>

          <strong>
            ${item.category || item.niche || "-"}
          </strong>

        </div>


        <div class="detail-stat">

          <span>🌐 AUDIENCE</span>

          <strong>
            ${item.audience || item.country || "-"}
          </strong>

        </div>


      </div>


      <div class="detail-actions">

        <button
          class="detail-link-btn"
          onclick="window.open('${item.link}','_blank')"
        >
          ↗ &nbsp; Link
        </button>


        <button
          class="detail-share-btn"
          onclick="shareListing('${item.id}')"
        >
          ↗ &nbsp; Share
        </button>

      </div>

    `;

  }


  // ==========================================
  // OPEN DETAILS MODAL
  // ==========================================

  document
    .getElementById("detailsModal")
    .classList.add("active");


  document.body.style.overflow = "hidden";


  history.pushState(
    {
      page:"details",
      id:id
    },
    "",
    "#details"
  );

}

// ============================================
// SHARE LISTING
// ============================================

function shareListing(id){

  const item = findListing(id);

  if(!item){
    return;
  }


  const shareData = {

    title: item.title,

    text:
      `${item.title}\n` +
      `ID: ${item.id}\n` +
      `Price: ${formatMoney(item.price)}`,

    url: item.link

  };


  if(navigator.share){

    navigator.share(
      shareData
    ).catch(() => {});

  }else{

    navigator.clipboard
      .writeText(item.link)
      .then(() => {

        alert(
          "Link copied!"
        );

      })
      .catch(() => {

        alert(
          "Link: " + item.link
        );

      });

  }

}

function closeDetails(){

  document
    .getElementById("detailsModal")
    .classList.remove("active");


  document.body.style.overflow =
    "";


  detailSliderPositions[
    currentPurchaseId
  ] = 0;

}


// ============================================
// DETAILS SLIDER
// ============================================

function changeDetailSlide(id,direction){

  const item =
    findListing(id);


  if(!item){
    return;
  }


  const total =
    item.photos.length;


  let current =
    detailSliderPositions[id] || 0;


  current += direction;


  if(current < 0){
    current = total - 1;
  }


  if(current >= total){
    current = 0;
  }


  detailSliderPositions[id] =
    current;


  updateDetailSlider(
    id,
    current
  );

}


function goToDetailSlide(id,index){

  detailSliderPositions[id] =
    index;


  updateDetailSlider(
    id,
    index
  );

}


function updateDetailSlider(id,index){

  const slider =
    document.getElementById(
      `detail-slider-${id}`
    );


  if(!slider){
    return;
  }


  const track =
    slider.querySelector(
      ".slider-track"
    );


  const dots =
    slider.querySelectorAll(
      ".slider-dot"
    );


  track.style.transform =
    `translateX(-${index * 100}%)`;


  dots.forEach(
    (dot,i) => {

      dot.classList.toggle(
        "active",
        i === index
      );

    }
  );

}


// ============================================
// FULLSCREEN PHOTO VIEWER
// ============================================

let viewerListingId = null;
let viewerPhotoIndex = 0;

let viewerScale = 1;

let viewerMoveX = 0;
let viewerMoveY = 0;

let viewerStartDistance = 0;
let viewerStartScale = 1;

let viewerStartX = 0;
let viewerStartY = 0;

let viewerSwipeStartX = 0;
let viewerSwipeStartY = 0;

let viewerPinching = false;

let viewerLastTap = 0;


// ============================================
// OPEN VIEWER
// ============================================

function openPhotoViewer(id,index = 0){

  const item =
    findListing(id);


  if(!item || !item.photos){
    return;
  }


  viewerListingId =
    id;


  viewerPhotoIndex =
    index;


  viewerScale = 1;

  viewerMoveX = 0;
  viewerMoveY = 0;


  const viewer =
    document.getElementById(
      "photoViewer"
    );


  if(!viewer){
    return;
  }


  viewer.classList.add(
    "active"
  );


  document.body.style.overflow =
    "hidden";


  history.pushState(
    {
      page:"photo",
      id:id,
      index:index
    },
    "",
    "#photo"
  );


  renderViewerPhoto();

}


// ============================================
// RENDER VIEWER
// ============================================

function renderViewerPhoto(){

  const item =
    findListing(viewerListingId);


  if(!item){
    return;
  }


  const photo =
    item.photos[
      viewerPhotoIndex
    ];


  const content =
    document.getElementById(
      "photoViewerContent"
    );


  content.innerHTML = `

    <div class="viewer-image-wrap">

      <img
        id="zoomPhoto"
        src="${photo}"
        alt="${item.title}"
        draggable="false"
      >

    </div>


    <div class="viewer-counter">

      ${viewerPhotoIndex + 1}
      /
      ${item.photos.length}

    </div>

  `;


  setupViewerTouch();

}


// ============================================
// NEXT VIEWER PHOTO
// ============================================

function viewerNext(){

  const item =
    findListing(viewerListingId);


  if(!item){
    return;
  }


  viewerPhotoIndex++;


  if(
    viewerPhotoIndex >=
    item.photos.length
  ){

    viewerPhotoIndex = 0;

  }


  resetViewerZoom();

  renderViewerPhoto();

}


// ============================================
// PREVIOUS VIEWER PHOTO
// ============================================

function viewerPrevious(){

  const item =
    findListing(viewerListingId);


  if(!item){
    return;
  }


  viewerPhotoIndex--;


  if(viewerPhotoIndex < 0){

    viewerPhotoIndex =
      item.photos.length - 1;

  }


  resetViewerZoom();

  renderViewerPhoto();

}


// ============================================
// VIEWER TOUCH
// ============================================

function setupViewerTouch(){

  const img =
    document.getElementById(
      "zoomPhoto"
    );


  if(!img){
    return;
  }


  img.addEventListener(
    "touchstart",
    function(event){

      if(event.touches.length === 2){

        viewerPinching = true;

        viewerStartDistance =
          getTouchDistance(event);

        viewerStartScale =
          viewerScale;

        return;
      }


      if(event.touches.length === 1){

        viewerStartX =
          event.touches[0].clientX;

        viewerStartY =
          event.touches[0].clientY;


        viewerSwipeStartX =
          event.touches[0].clientX;

        viewerSwipeStartY =
          event.touches[0].clientY;

      }

    },
    {passive:false}
  );


  img.addEventListener(
    "touchmove",
    function(event){

      event.preventDefault();


      // PINCH

      if(event.touches.length === 2){

        viewerPinching = true;


        const distance =
          getTouchDistance(event);


        if(viewerStartDistance){

          const ratio =
            distance /
            viewerStartDistance;


          viewerScale =
            viewerStartScale *
            ratio;


          viewerScale =
            Math.max(
              1,
              Math.min(
                5,
                viewerScale
              )
            );


          updateViewerTransform();

        }


        return;
      }


      // DRAG WHEN ZOOMED

      if(
        event.touches.length === 1 &&
        viewerScale > 1
      ){

        const x =
          event.touches[0].clientX;

        const y =
          event.touches[0].clientY;


        viewerMoveX +=
          x - viewerStartX;

        viewerMoveY +=
          y - viewerStartY;


        viewerStartX = x;
        viewerStartY = y;


        updateViewerTransform();

      }

    },
    {passive:false}
  );


  img.addEventListener(
    "touchend",
    function(event){

      if(viewerPinching){

        viewerPinching = false;

        return;
      }


      if(viewerScale > 1){

        return;
      }


      const endX =
        event.changedTouches[0].clientX;

      const endY =
        event.changedTouches[0].clientY;


      const differenceX =
        viewerSwipeStartX -
        endX;


      const differenceY =
        viewerSwipeStartY -
        endY;


      // SWIPE

      if(
        Math.abs(differenceX) > 60 &&
        Math.abs(differenceX) >
        Math.abs(differenceY)
      ){

        if(differenceX > 0){

          viewerNext();

        }else{

          viewerPrevious();

        }

      }


    },
    {passive:false}
  );


  // DOUBLE TAP

  img.addEventListener(
    "touchend",
    function(){

      const now =
        Date.now();


      if(
        now - viewerLastTap <
        300 &&
        !viewerPinching
      ){

        if(viewerScale === 1){

          viewerScale = 2.5;

        }else{

          resetViewerZoom();

        }


        updateViewerTransform();

      }


      viewerLastTap =
        now;

    },
    {passive:false}
  );

}


// ============================================
// TOUCH DISTANCE
// ============================================

function getTouchDistance(event){

  const x =
    event.touches[0].clientX -
    event.touches[1].clientX;


  const y =
    event.touches[0].clientY -
    event.touches[1].clientY;


  return Math.sqrt(
    x * x +
    y * y
  );

}


// ============================================
// VIEWER TRANSFORM
// ============================================

function updateViewerTransform(){

  const img =
    document.getElementById(
      "zoomPhoto"
    );


  if(!img){
    return;
  }


  img.style.transform =
    `translate(${viewerMoveX}px,${viewerMoveY}px) scale(${viewerScale})`;

}


// ============================================
// RESET ZOOM
// ============================================

function resetViewerZoom(){

  viewerScale = 1;

  viewerMoveX = 0;
  viewerMoveY = 0;

}


// ============================================
// CLOSE VIEWER
// ============================================

function closePhotoViewer(){

  const viewer =
    document.getElementById(
      "photoViewer"
    );


  if(!viewer){
    return;
  }


  viewer.classList.remove(
    "active"
  );


  document.body.style.overflow =
    "";


  viewerListingId = null;

  viewerPhotoIndex = 0;

  resetViewerZoom();

}


// ============================================
// PURCHASE
// ============================================

function openPurchase(id){

  const item =
    findListing(id);


  if(!item){

    alert("Listing not found.");

    return;
  }


  currentPurchaseId =
    id;


  document.getElementById(
    "purchaseListingId"
  ).value = item.id;


  document.getElementById(
    "purchaseTitle"
  ).textContent =
    item.title;


  document.getElementById(
    "purchasePlatform"
  ).textContent =
    platformName(item.platform);


  document.getElementById(
    "purchasePrice"
  ).textContent =
    formatMoney(item.price);


  document.getElementById(
    "displayUPI"
  ).textContent =
    UPI_ID;


  const qrBox =
    document.getElementById(
      "paymentQR"
    );


  qrBox.innerHTML = "";


  const upiLink =
    buildUPILink(
      item.price
    );


  if(
    typeof QRCode !==
    "undefined"
  ){

    new QRCode(
      qrBox,
      {
        text:upiLink,
        width:220,
        height:220,
        colorDark:"#000000",
        colorLight:"#ffffff",
        correctLevel:
          QRCode.CorrectLevel.H
      }
    );

  }


  document
    .getElementById(
      "purchaseModal"
    )
    .classList.add("active");


  document.body.style.overflow =
    "hidden";


  history.pushState(
    {
      page:"purchase",
      id:id
    },
    "",
    "#purchase"
  );

}


// ============================================
// CLOSE PURCHASE
// ============================================

function closePurchase(){

  const modal =
    document.getElementById(
      "purchaseModal"
    );


  if(modal){

    modal.classList.remove(
      "active"
    );

  }


  document.body.style.overflow =
    "";


  currentPurchaseId =
    null;

}


// ============================================
// UPI
// ============================================

function buildUPILink(amount){

  const params =
    new URLSearchParams({

      pa:UPI_ID,

      pn:UPI_NAME,

      am:Number(amount)
        .toFixed(2),

      cu:"INR"

    });


  return "upi://pay?" +
    params.toString();

}


function payWithUPI(){

  if(!currentPurchaseId){

    alert(
      "Please select a listing."
    );

    return;
  }


  const item =
    findListing(
      currentPurchaseId
    );


  if(!item){

    alert(
      "Listing not found."
    );

    return;
  }


  window.location.href =
    buildUPILink(
      item.price
    );

}


async function copyUPI(){

  try{

    await navigator
      .clipboard
      .writeText(
        UPI_ID
      );


    alert(
      "UPI ID copied!"
    );

  }catch(error){

    const input =
      document.createElement(
        "input"
      );


    input.value =
      UPI_ID;


    document.body.appendChild(
      input
    );


    input.select();


    document.execCommand(
      "copy"
    );


    input.remove();


    alert(
      "UPI ID copied!"
    );

  }

}


// ============================================
// PAYMENT → TELEGRAM
// ============================================

async function submitPayment(){

  const mobile = document.getElementById("buyerMobile").value.trim();

  if(!/^\d{10}$/.test(mobile)){
    alert("Please enter a valid 10-digit WhatsApp number.");
    return;
  }

  event.preventDefault();


  if(!currentPurchaseId){

    alert(
      "Listing not selected."
    );

    return;
  }


  const item =
    findListing(
      currentPurchaseId
    );


  if(!item){

    alert(
      "Listing not found."
    );

    return;
  }


  const utr =
    document
      .getElementById(
        "buyerUTR"
      )
      .value
      .trim();


  const screenshot =
    document
      .getElementById(
        "paymentScreenshot"
      )
      .files[0];


  if(!mobile){

    alert(
      "Please enter your WhatsApp number."
    );

    return;
  }


  if(!utr){

    alert(
      "Please enter your UTR / Transaction ID."
    );

    return;
  }


  if(!screenshot){

    alert(
      "Please upload payment screenshot."
    );

    return;
  }


  const submitBtn =
    document.querySelector(
      ".submit-btn"
    );


  const oldText =
    submitBtn.textContent;


  submitBtn.disabled = true;

  submitBtn.textContent =
    "Sending...";


  try{

    const formData =
      new FormData();


    formData.append(
      "listingId",
      item.id
    );


    formData.append(
      "listingTitle",
      item.title
    );


    formData.append(
      "platform",
      platformName(
        item.platform
      )
    );


    formData.append(
      "price",
      item.price
    );


    formData.append(
      "mobile",
      mobile
    );


    formData.append(
      "utr",
      utr
    );


    formData.append(
      "paymentScreenshot",
      screenshot
    );


    const response =
      await fetch(
        "/api/telegram",
        {
          method:"POST",
          body:formData
        }
      );


    const result =
      await response.json();


    if(!response.ok){

      throw new Error(
        result.error ||
        "Server error"
      );

    }


    alert(
      "✅ Payment details submitted successfully!\n\n" +
      "Your payment is now under verification."
    );


    document
      .getElementById(
        "paymentForm"
      )
      .reset();


    closePurchase();


  }catch(error){

    console.error(error);


    alert(
      "❌ Payment submission failed.\n\n" +
      error.message
    );


  }finally{

    submitBtn.disabled =
      false;


    submitBtn.textContent =
      oldText;

  }

}


// ============================================
// NAVIGATION
// ============================================

function goHome(){

  document
    .getElementById("home")
    .scrollIntoView({
      behavior:"smooth"
    });

}


function goListings(){

  document
    .getElementById("listings")
    .scrollIntoView({
      behavior:"smooth"
    });

}


function scrollHow(){

  document
    .getElementById("how")
    .scrollIntoView({
      behavior:"smooth"
    });

}


// ============================================
// MODAL OUTSIDE CLICK
// ============================================

document.addEventListener(
  "click",
  function(event){

    const details =
      document.getElementById(
        "detailsModal"
      );


    const purchase =
      document.getElementById(
        "purchaseModal"
      );


    if(
      event.target === details
    ){

      closeDetails();

    }


    if(
      event.target === purchase
    ){

      closePurchase();

    }

  }
);


// ============================================
// ANDROID / BROWSER BACK BUTTON
// ============================================

window.addEventListener(
  "popstate",
  function(){

    const viewer =
      document.getElementById(
        "photoViewer"
      );


    const purchase =
      document.getElementById(
        "purchaseModal"
      );


    const details =
      document.getElementById(
        "detailsModal"
      );


    if(
      viewer &&
      viewer.classList.contains(
        "active"
      )
    ){

      closePhotoViewer();

      return;

    }


    if(
      purchase &&
      purchase.classList.contains(
        "active"
      )
    ){

      closePurchase();

      return;

    }


    if(
      details &&
      details.classList.contains(
        "active"
      )
    ){

      closeDetails();

      return;

    }

  }
);


// ============================================
// INITIAL LOAD
// ============================================

document.addEventListener(
  "DOMContentLoaded",
  function(){

    renderListings();

  }
);

/* =========================================
   CREATORVAULT TERMS PAGE
========================================= */

function openTerms(){

  const page = document.getElementById("termsPage");

  if(!page) return;

  page.style.display = "flex";
  page.classList.add("active");

  document.body.style.overflow = "hidden";
}

function closeTerms(){

  const page = document.getElementById("termsPage");

  if(!page){
    return;
  }

  page.classList.remove("active");
  page.style.display = "none";

  document.body.style.overflow = "";
}

/* =========================================
   CREATORVAULT PREMIUM ALERT SYSTEM
========================================= */

function closePremiumAlert(){

  const alertBox =
    document.getElementById("premiumAlert");

  if(!alertBox) return;

  alertBox.classList.remove("active");

  document.body.style.overflow = "";
}


function showPremiumAlert(message){

  const alertBox =
    document.getElementById("premiumAlert");

  const title =
    document.getElementById("premiumAlertTitle");

  const text =
    document.getElementById("premiumAlertMessage");

  const icon =
    document.getElementById("premiumAlertIcon");

  if(!alertBox || !title || !text || !icon){

    console.log(message);

    return;
  }

  const msg = String(message || "");

  text.textContent = msg;

  /* SUCCESS */
  if(
    msg.toLowerCase().includes("success") ||
    msg.toLowerCase().includes("submitted")
  ){

    title.textContent = "PAYMENT SUBMITTED";
    icon.textContent = "✓";

  }

  /* ERROR */
  else if(
    msg.toLowerCase().includes("failed") ||
    msg.toLowerCase().includes("error") ||
    msg.toLowerCase().includes("invalid") ||
    msg.toLowerCase().includes("required")
  ){

    title.textContent = "PLEASE CHECK";
    icon.textContent = "!";

  }

  /* DEFAULT */
  else{

    title.textContent = "CREATORVAULT";
    icon.textContent = "i";

  }

  alertBox.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* Replace browser's ugly native alert */
window.alert = function(message){

  showPremiumAlert(message);

};