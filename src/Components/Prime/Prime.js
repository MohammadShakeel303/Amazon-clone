import React from "react";
import { Link } from "react-router-dom";
import "./Prime.css";

const Prime = () => {
  return (
    <div className="prime">
      <div className="prime_banner">
        <img
          className="primebanner_img"
          src="https://m.media-amazon.com/images/G/31/prime/detail_page/2017/Sep/IN-Prime-Slash-Prime-Offer-Benefits1-1400x680._CB442254152_.jpg"
        />
        <img
          className="primebanner_img"
          src="https://www.rezeem.com/blog/wp-content/uploads/2021/06/Prime-blogbanner-731x411.jpg"
          alt=""
        />
      </div>

      <h1 className="prime_title">Enjoy these benefits with Prime</h1>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_Benefits_Delivery_1344x526._CB653891553_.jpg"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">Unlimited FREE fast delivery</h2>
          <div className="primecontainer_paragraph">
            <p>
              Why pay Rs.100 for One-Day Delivery every time you need an item
              quickly? As a Prime member, get unlimited FREE One-Day and Two-Day
              Delivery on eligible items from India’s largest online store, to
              over a hundred cities. Prime items that are not eligible for free
              One-Day or Two-Day Delivery to your location, will always qualify
              for free Standard Delivery with no minimum purchase value. The
              fastest, free Prime delivery speed available for an item will be
              shown on the product page.
            </p>

            <p>
              Prime members also enjoy discounted Same-Day and Morning Delivery
              to pin-codes in select cities across India. Get exclusive 2-hour
              Express Delivery to eligible pin-codes in
              <b> Delhi, Mumbai, Bangalore & Hyderabad</b> via the Prime Now
              App.
            </p>
          </div>
          <Link
            to="https://www.amazon.in/b/ref=in-pr-pc-signup-delivery-lnk?node=12627912031"
            className="prime-link"
          >
            Learn more about all Prime delivery options
          </Link>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB620223487_.jpg"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">Prime Video</h2>
          <div className="primecontainer_paragraph">
            <p>
              With your Prime membership, you have access to the latest and
              exclusive Bollywood and regional blockbusters such as Kantara,
              Jugjugg Jeeyo, Ram Setu and Hollywood movies like Batman, Fast &
              Furious 9. You can also binge watch US TV shows like Young
              Sheldon, Suits and exclusive access to Prime Original Series
              Comicstaan, Breathe and Reacher.
            </p>
            <p>
              Access Prime Video anywhere: on the go or in the comfort of your
              living room. Watch on your Android or iOS phone, tablet, laptop,
              desktop, or smart TV.
            </p>
          </div>
          <Link to="https://www.primevideo.com/" className="prime-link">
            Visit primevideo.com
          </Link>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Robin_Benefit2._CB623228312_.jpg"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">Prime Music</h2>
          <div className="primecontainer_paragraph">
            <p>
              With your Prime membership, enjoy ad-free music streaming with
              unlimited offline downloads* across 75 million songs in multiple
              languages - English, Hindi, Tamil, Punjabi, Telugu, Bengali and
              more. Enjoy Playlists and Stations specially curated by Amazon’s
              music editors across moods, activities, genres, artists and
              decades.
            </p>
            <p>
              Discover a new way to find and play music - voice controlled with
              Alexa. Simply tap on Alexa icon in your mobile app and ask for
              music. No typing, no browsing, no searching - Just ask! Listen to
              music across devices – Android & iOS devices, Desktop app and Web
              Player, Amazon Fire TV sticks and Amazon Echo and other Alexa
              enabled devices.
            </p>
          </div>
          <Link to="https://www.amazon.in/music/prime" className="prime-link">
            Listen Now
          </Link>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Samus_Benefit_Desktop._CB642411917_.jpg"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">Prime Gaming</h2>
          <div className="primecontainer_paragraph">
            <p>
              Prime members get access to FREE in-game content like power-ups,
              exclusive collectibles, characters, outfits, skins, themes,
              in-game currency and more across popular mobile games, refreshed
              frequently. Login with your Amazon account within supported games
              to claim in-game content. Enjoy frequent new content drops and
              launches across top international & Indian mobile games.
            </p>
          </div>
          <Link to="" className="prime-link">
            Explore Prime Gaming
          </Link>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/Pay/CBCC/BOX._CB433739796_.png"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">Unlimited 5% cashback</h2>
          <div className="primecontainer_paragraph">
            <p>
              Eligible Prime members earn unlimited 5% cashback on all purchases
              on Amazon.in using the Amazon Pay ICICI Bank credit card. You can
              also earn unlimited 2% cashback on payments at 100+ Amazon Pay
              partner merchants and 1% cashback on all other payments (except
              fuel purchases). Currently available in 35 cities across India.
            </p>
          </div>
          <Link
            to="https://www.amazon.in/cbcc/marketpage?ref=cbcc_slashprime_fteligible"
            className="prime-link"
          >
            Know More
          </Link>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/prime/detail_page/2018/Sep/Slash-Prime-BTF._CB623230677_.png"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">Prime Reading</h2>
          <div className="primecontainer_paragraph">
            <p>
              Read as much as you want from hundreds of eligible eBooks, comics
              and more. With a catalogue across literature and fiction, quick
              reads, romance, non-fiction, and eBooks in Indian languages, you
              will always find something to read.
            </p>
            <p>
              You can enjoy Prime Reading on your Kindle E-reader, or install
              the free Kindle reading apps on mobile, tablet, PC or Mac. You can
              also try Prime Reading on the 2MB Kindle Lite Android app designed
              for Indian readers.
            </p>
          </div>
          <Link
            to="https://www.amazon.in/kindle-dbs/hz/bookshelf/prime?ref=slashprime"
            className="prime-link"
          >
            Explore Prime Reading
          </Link>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/early-access._CB485972705_.jpg"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">Grab the best deals first</h2>
          <div className="primecontainer_paragraph">
            <p>
              You get access to exclusive deals across categories. Be among the
              first to decide what's hot and what's not, and get 30-minute early
              access to top Lightning Deals every day. Choose the Prime Early
              Access filter when you search, to see the day’s selected deals.
            </p>
          </div>
          <Link
            to="https://www.amazon.in/l/11486823031?ie=UTF8&ref=prime_campaign_id_deals"
            className="prime-link"
          >
            Shop Prime Exclusive deals and offers
          </Link>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container">
          <img
            className="product_img"
            src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_Check_prime_1344x526._CB485969112_.jpg"
            alt="img"
          />
        </div>
        <div className="primetext_container">
          <h2 className="Primecontainer_title">
             Look for 
            <img className="line_img"
            src=" https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/checkPrime._CB483586779_.png"
            alt="" />
          </h2>
          <div className="primecontainer_paragraph">
            <p>
              Items eligible for Prime delivery benefits (free One-Day, Two-Day
              and Standard Delivery) are clearly marked. Just look for
              <img 
              src=" https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/checkPrime._CB483586779_.png"
            alt="" width="10%" height="10%"/>
               next to
              products when you search. Choose the Prime logo filter to view
              Prime items only.
            </p>
            <p>
              As a Prime member, you can update your delivery pin-code on
              product pages to see the fastest, free delivery option next to the
              Prime logo. You can see all Prime delivery options available for
              your order at Checkout.
            </p>
          </div>
        </div>
      </div>

      <div className="prime_container">
        <div className="primeimage_container"></div>
        <div className="primetext_container">
          <div className="primecontainer_paragraph">
            <p>
              Prime offers a safe and convenient shopping experience on
             <img className="line_img"
              src = "https://m.media-amazon.com/images/G/31/search/fba._CB485936067_.png" 
             alt="" />
               items
              and items fulfilled by qualified sellers who meet our high
              delivery performance standards.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Prime;
