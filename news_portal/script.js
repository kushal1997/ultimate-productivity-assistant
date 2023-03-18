const category=document.querySelector(".category");
const categorySpan=document.querySelectorAll(".category span");
const cards=document.querySelector(".cards");

const baseUrl="https://newsapi.org/v2";
const apiKey="&apiKey=fd2567b815a348abae253c52b1c75007";
const backupImage="https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const newsA=[
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Discord To Launch New AI-Powered Chatbot, Messaging Features - NDTV",
        "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
        "url": "https://www.ndtv.com/",
        "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
        "publishedAt": "2023-03-09T18:20:29Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "DC vs MI, WPL 2023 Highlights: MI thrash DC by eight wickets - Hindustan Times",
        "description": "DC vs MI, WPL 2023 Highlights: Delhi Capitals hardly got a foothold in their innings and the Mumbai Indians cantered to yet another big win.",
        "url": "https://www.hindustantimes.com/cricket/dc-vs-mi-live-score-wpl-2023-delhi-capitals-vs-mumbai-indians-t20-womens-premier-league-match-7-latest-scorecard-updates-101678361886351.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/09/1600x900/dc_vs_mi_live_score_1678363433104_1678363439902_1678363439902.jpg",
        "publishedAt": "2023-03-09T17:28:37Z",
        "content": "DC vs MI Live score: Delhi Capitals full squad\r\nMeg Lanning(c), Shafali Verma, Marizanne Kapp, Jemimah Rodrigues, Alice Capsey, Jess Jonassen, Taniya Bhatia(w), Arundhati Reddy, Shikha Pandey, Radha … [+114 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Reuters",
        "title": "6 killed as Russia launches huge missile waves across Ukraine - Hindustan Times",
        "description": "Russia-Ukraine war: In the capital Kyiv, the seven-hour alert through the night was the longest of Russia's five-month air campaign. | World News",
        "url": "https://www.hindustantimes.com/world-news/6-killed-as-russia-launches-huge-missile-waves-across-ukraine-101678382207857.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/09/1600x900/UKRAINE-CRISIS-STRIKES-KYIV-43_1678382585121_1678382585121_1678382609050_1678382609050.JPG",
        "publishedAt": "2023-03-09T17:26:30Z",
        "content": "Russia launched a huge wave of missile strikes across Ukraine while people slept on Thursday, killing at least six civilians, knocking out electricity and briefly forcing Europe's biggest nuclear pow… [+5668 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "PINKVILLA"
        },
        "author": "Rishil Jogani",
        "title": "Tu Jhoothi Main Makkaar Day 2 Box Office: Ranbir-Shraddha film collects Rs 9 crore; Shows expected drop - PINKVILLA",
        "description": "Ranbir Kapoor And Shraddha Kapoor's Rom-com, Tu Jhoothi Main Makkaar, Is Expected To See Strong Growth From Friday Evening, Right Through The Weekend.",
        "url": "https://www.pinkvilla.com/entertainment/box-office/tu-jhoothi-main-makkaar-day-2-box-office-ranbir-shraddha-film-collects-rs-9-crore-shows-expected-drop-1211989",
        "urlToImage": "https://www.pinkvilla.com/english/images/2023/03/1429809965_tjmm-day-2_1280*720.jpg",
        "publishedAt": "2023-03-09T17:00:39Z",
        "content": "Tu Jhoothi Main Makkaar, directed by Luv Ranjan and starring Ranbir Kapoor and Shraddha Kapoor in titular roles, saw an expected drop in its collections on its second say. The drop was always round t… [+2824 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Express News Service",
        "title": "ED arrests Manish Sisodia in excise policy case - The Indian Express",
        "description": "Before arresting Sisodia, the agency had questioned him inside Tihar jail where he is lodged after he was arrested by the CBI which is probing alleged irregularities in the excise policy.",
        "url": "https://indianexpress.com/article/cities/delhi/ed-arrests-manish-sisodia-in-excise-policy-case-8487818/",
        "urlToImage": "https://images.indianexpress.com/2023/03/Arrested-Sunday-Sisodia-told-by-SC-he-should-have-moved-the-Delhi-High-Court-1.jpg",
        "publishedAt": "2023-03-09T16:36:37Z",
        "content": "Before arresting him, the agency had questioned him inside Tihar jail where he is lodged after he was arrested by the CBI which is probing alleged irregularities in the excise policy.\r\nReacting to hi… [+2250 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Morungexpress.com"
        },
        "author": null,
        "title": "Japanese scientists create mice with two fathers | MorungExpress | morungexpress.com - Morung Express",
        "description": "London, March 9 (IANS) In a breakthrough, Japanese scientists have created mice with two biological fathers, an advance that can pave the way for new fertility treatments in humans.",
        "url": "https://www.morungexpress.com/",
        "urlToImage": "http://morungexpress.com/uploads/2023/03/49719746_1678379421_827c231692be2a35be5cc25beccb8817.jpg",
        "publishedAt": "2023-03-09T16:31:46Z",
        "content": "London, March 9 (IANS) In a breakthrough, Japanese scientists have created mice with two biological fathers, an advance that can pave the way for new fertility treatments in humans.\r\nThe team led by … [+2587 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Rezaul H Laskar",
        "title": "India, US to ink MoU on semiconductors, launch dialogue on export controls - Hindustan Times",
        "description": "US commerce secretary Gina Raimondo said the India-US MoU on cooperation in semiconductors will help the Indian side play a greater role in diversified supply chains | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/india-us-to-ink-mou-on-semiconductors-launch-dialogue-on-export-controls-101678376354871.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/09/1600x900/External-affairs-minister-S-Jaishankar-meets-US-Se_1678376350086.jpg",
        "publishedAt": "2023-03-09T15:39:14Z",
        "content": "NEW DELHI: A memorandum of understanding (MoU) to be signed by India and the US on cooperation in semiconductors will help the Indian side play a greater role in diversified supply chains and identif… [+4236 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "Bloomberg",
        "title": "Apple to shake up international sales operations to make India its own region - Indiatimes.com",
        "description": "International Business News: The shift will mark the first time that India becomes its own sales region at Apple, which has seen demand surge in the country. That will give the As",
        "url": "https://timesofindia.indiatimes.com/business/international-business/apple-to-shake-up-international-sales-operations-to-make-india-its-own-region/articleshow/98523813.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-98523804,width-1070,height-580,imgsize-27496,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2023-03-09T15:19:00Z",
        "content": "FD Calculator\r\nWhen investing in a fixed deposit, the amount you deposit earns interest as per the prevailing...\r\nCalculate Now"
    },
    {
        "source": {
            "id": null,
            "name": "India Today"
        },
        "author": "Shibimol KG",
        "title": "Was offered Rs 30 crore to give up evidence against Kerala CM, claims gold smuggling case accused - India Today",
        "description": "In a Facebook Live, Swapna Suresh claimed that a middleman sent by the CPI(M) state secretary had asked her to hand them over all the evidence against Kerala CM and his family.",
        "url": "https://www.indiatoday.in/india/story/offered-money-to-give-up-evidence-against-kerala-cm-gold-smuggling-case-accused-cpim-swapna-suresh-2344545-2023-03-09",
        "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202303/swapna_suresh-sixteen_nine.jpg?VersionId=wqk9R3OYIcMNdDXa4NxdGyWvNf1fI6eD",
        "publishedAt": "2023-03-09T14:55:39Z",
        "content": "By Shibimol KG: Swapna Suresh, one of the key accused in the Kerala gold smuggling case, on Thursday claimed that the ruling CPI(M) offered her Rs 30 crore through an intermediary to settle the case … [+2897 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "HT Tech",
        "title": "Call of Duty Warzone Mobile to launch soon; Could mean BAD NEWS for CoD: Mobile - HT Tech",
        "description": "Fans of battle royales will soon get to try out Call of Duty Warzone Mobile. But this could mean bad news for CoD: Mobile games. Know the reason.",
        "url": "https://tech.hindustantimes.com/gaming/news/call-of-duty-warzone-mobile-to-launch-soon-could-mean-bad-news-for-cod-mobile-71678372329258.html",
        "urlToImage": "https://images.hindustantimes.com/tech/img/2023/03/09/1600x900/Screenshot_2023-03-09_200328_1678372436687_1678372452873_1678372452873.png",
        "publishedAt": "2023-03-09T14:41:52Z",
        "content": "The mobile battle royale gaming scene in India is currently in a bad way. Over the last few years, some of the major titles such as PUBG, Battlegrounds Mobile India and Garena Free Fire witnessed a b… [+2083 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Science Desk",
        "title": "NASA and Italian Space Agency join hands for satellite mission to monitor air pollution - The Indian Express",
        "description": "NASA and the Italian Space Agency are partnering on the MAIA mission which will use data from an Earth observation satellite to help scientists find correlations between air pollution and health problems in major cities across the world including New Delhi.",
        "url": "https://indianexpress.com/article/technology/science/nasa-asi-italian-space-agency-maia-air-pollution-satellite-8487717/",
        "urlToImage": "https://images.indianexpress.com/2023/03/Air-pollution-20230309.jpg",
        "publishedAt": "2023-03-09T14:00:10Z",
        "content": "NASA announced on Wednesday that it is partnering with the Italian Space Agency ASI (Agenzia Spaziale Italiana) to build and launch MAIA, or the Multi-Angle Imager for Aerosols missions. The joint mi… [+2428 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Sriram Veera",
        "title": "India versus Australia: Usman Khawaja kills his ego, produces an Allan Border-like patient innings, scores a gritty unbeaten hundred - The Indian Express",
        "description": "IND vs AUS: On a day Australian opener Usman Khawaja keeps India's trio of spinners at bay to make an unbeaten 104, he says he was always told he can't play spin; On two previous tours to India he only carried drinks",
        "url": "https://indianexpress.com/article/sports/cricket/india-vs-australia-usman-khawaja-kills-his-ego-allan-border-like-innings-8487813/",
        "urlToImage": "https://images.indianexpress.com/2023/03/usman-khawaja-2.jpg",
        "publishedAt": "2023-03-09T13:55:44Z",
        "content": "IND vs AUS: Unable to warm up with a few deliveries, and with barely any time to measure and mark their run-ups, due to the pre-game programme of the prime ministers, the Indian fast bowlers looked a… [+8049 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Snehashish Roy",
        "title": "Watch: Australian PM Albanese receives guard of honour during INS Vikrant visit - Hindustan Times",
        "description": "Albanese is on a three-day India trip and has so far joined Prime Minister Narendra Modi to watch the first day of 4th test match between India and Australia at Narendra Modi stadium in Gujarat's Motera. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/watch-australian-pm-albanese-gets-onboard-ins-vikrant-receives-guard-of-honour-101678367736813.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/09/1600x900/Anthony_1678369250426_1678369298541_1678369298541.png",
        "publishedAt": "2023-03-09T13:46:39Z",
        "content": "Australian Prime Minister Anthony Albanese on Thursday went onboard the indigenous INS Vikrant and received a guard of honour by the Indian Navy in Mumbai. Albanese is on a three-day India trip and h… [+1264 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ThePrint"
        },
        "author": "Rishika Sadam",
        "title": "BRS’s Kavitha ‘salutes’ Sonia for courage, invites Congress to her protest. What it signals - ThePrint",
        "description": "KCR's daughter is in Delhi to demand implementation of Women's Reservation Bill & to appear before ED regarding alleged Delhi liquor policy scam. Telangana votes this year.",
        "url": "https://theprint.in/politics/brss-kavitha-salutes-sonia-for-courage-invites-congress-to-her-protest-what-it-signals/1430123/",
        "urlToImage": "https://static.theprint.in/wp-content/uploads/2023/03/Untitled-design-18-1.png",
        "publishedAt": "2023-03-09T13:24:24Z",
        "content": "New Delhi: In a first such open invitation, Bharat Rashtra Samithi (BRS) leader Kalvakuntla Kavitha said she “requested” Congress president Mallikarjun Kharge and general secretary K.C. Venugopal to … [+7191 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "OpIndia"
        },
        "author": "OpIndia Staff",
        "title": "‘Rs 2 troll, absolute disgrace’: Congress leaders abuse Kiren Rijiju for his ‘Indians know that Rahul Gandhi is Pappu’ comment - OpIndia",
        "description": "Congress IT cell chief Supriya Shrinate called Kiren Rijiju a Rs 2 troll, Jairam Ramesh called him absolute grace over his Pappu comment for Rahul Gandhi",
        "url": "https://www.opindia.com/2023/03/congress-leaders-abuse-kiren-rijiju-over-his-rahul-gandhi-is-pappu-comment/",
        "urlToImage": "https://www.opindia.com/wp-content/uploads/2023/03/supriya-shrinate-Kiren-Rijiju-Jairam-Ramesh.jpg",
        "publishedAt": "2023-03-09T13:24:23Z",
        "content": "After Union Law minister Kiren Rijiju slammed Congress leader Rahul Gandhi for making anti-India comments in the UK, Congress leaders and supporters have started attacking him online. Several Congres… [+3394 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Singh Rahul Sunilkumar",
        "title": "HDFC Bank users confidential data leaked, claims hacker; bank denies - Hindustan Times",
        "description": "The HDFC data leak allegedly contains full names (with middle name included), date of births, age, phone numbers, personal emails, permanent emails, work emails, marriage status, gender, residence address lines, and much more.",
        "url": "https://www.hindustantimes.com/business/hdfc-bank-users-confidential-data-leaked-claims-hacker-bank-denies-101678361981623.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/09/1600x900/HDFC-M-A-HDFC-BANK-1_1649047385269_1678361988655_1678361988655.JPG",
        "publishedAt": "2023-03-09T13:04:24Z",
        "content": "In a viral claim of data theft of HDFC bank users, cybercriminals on a popular hacker forum wrote that they have obtained personal information of around 6,00,000 customers purportedly belonging to th… [+2510 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Business Standard"
        },
        "author": "Business Standard",
        "title": "Reliance brings back 50-year-old iconic beverage brand Campa Cola - Business Standard",
        "description": "Business News: Get latest stock share market news, financial news, budget 2023 news, economy news, company news, politics news, India news, breaking news at Business Standard. Catch Nifty Sensex Live updates.",
        "url": "https://www.business-standard.com",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/common/no_preview.jpg",
        "publishedAt": "2023-03-09T13:04:00Z",
        "content": "<table><tr><td>\r\nUpgrade To Premium Services\r\n</td></tr><tr><td></td></tr></table> Business Standard is happy to inform you of the launch of \"Business Standard Premium Services\"\r\nAs a premium subscri… [+567 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Livelaw.in"
        },
        "author": "LIVELAW NEWS NETWORK",
        "title": "Supreme Court To Host 18th Meeting Of Chief Justices Of SCO Member States From March 10 to 12 - Live Law - Indian Legal News",
        "description": "The Supreme Court of India will host the 18th meeting of the Chief Justices of the Member States of Shanghai Cooperation Organisation (SCO) from March 10 to March 12, 2023 with a view to develop...",
        "url": "https://www.livelaw.in/top-stories/supreme-court-to-host-18th-meeting-of-chief-justices-of-sco-member-states-from-march-10-to-12-223389",
        "urlToImage": "https://www.livelaw.in/h-upload/2023/01/17/454224-supreme-court-of-india-sc-8.jpg",
        "publishedAt": "2023-03-09T12:43:26Z",
        "content": "The Supreme Court of India will host the 18th meeting of the Chief Justices of the Member States of Shanghai Cooperation Organisation (SCO) from March 10 to March 12, 2023 with a view to develop judi… [+1770 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deccan Herald"
        },
        "author": "PTI",
        "title": "Police in Lahore books ousted Pakistan PM Imran Khan on charges of murder, terrorism - Deccan Herald",
        "description": "The police in Lahore on Thursday booked Pakistan Tehreek-e-Insaf chief Imran Khan and 400 others on the charges of murder and terrorism during their clash with police personnel during the party's rally that left one activist dead and scores injured. This is t…",
        "url": "https://www.deccanherald.com/international/police-in-lahore-books-ousted-pakistan-pm-imran-khan-on-charges-of-murder-terrorism-1198564.html",
        "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2023/03/09/imran-khan-reuters-1198564-1678365233.jpg",
        "publishedAt": "2023-03-09T12:33:53Z",
        "content": "The police in Lahore on Thursday booked Pakistan Tehreek-e-Insaf chief Imran Khan and 400 others on the charges of murder and terrorism during their clash with police personnel during the party's ral… [+3250 chars]"
    },
    {
        "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "Vitamin B12 deficiency: 5 ways lack of vitamin B12 can affect your body - Times of India",
        "description": "Vitamin B12 is an essential nutrient that helps with several bodily processes. That said, vitamin B12 deficiency can lead to many health problems. These can then show up in the body in different ways. Let's take a look at them.",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/vitamin-b12-deficiency-5-ways-lack-of-vitamin-b12-can-affect-your-body/photostory/98514315.cms",
        "urlToImage": "https://static.toiimg.com/photo/98514329.cms",
        "publishedAt": "2023-03-09T12:30:00Z",
        "content": "Vitamin B12 is an essential nutrient that helps keep the nervous system healthy. That said, severe Vitamin B12 deficiency can lead to \"permanent neurologic damage,\" notes a BMJ study. \r\nAccording to … [+483 chars]"
    }
];

const newsB=[
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Natasha Mascarenhas",
                "title": "Venture firms are advising portfolio companies to move money out of SVB",
                "description": "A number of investors fear a bank run. VCs are advising startups to generally keep no more than $250,000 in SVB checking accounts.",
                "url": "https://techcrunch.com/2023/03/09/silicon-valley-bank-firms-reactions/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/03/GettyImages-1213336722.jpg?resize=1200,800",
                "publishedAt": "2023-03-09T20:48:59Z",
                "content": "Some venture capital firms, including some of the biggest names in the game, are advising their portfolio companies to remove money out of Silicon Valley Bank after the storied bank announced this mo… [+1352 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Natasha Mascarenhas",
                "title": "Silicon Valley Bank’s shares are tanking, as a mess unfolds",
                "description": "Given recent banking-related carnage in the tech and tech-adjacent worlds, there’s concern in the market that not all is well at SVB.",
                "url": "https://techcrunch.com/2023/03/09/silicon-valley-banks-shares-are-tanking-as-a-mess-unfolds/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/07/GettyImages-561098009.jpg?resize=1200,800",
                "publishedAt": "2023-03-09T20:06:13Z",
                "content": "Shares of Silicon Valley Bank are down sharply Thursday in the wake of the companys announcement that it is raising additional capital by selling stock, taking a charge to roll over an asset portfoli… [+2116 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Kyle Wiggers",
                "title": "ChatGPT comes to Microsoft's enterprise-focused, Azure-powered managed service",
                "description": "ChatGPT is now available through the Azure OpenAI Service, Microsoft's fully-managed, enterprise-focused repackage of OpenAI tech.",
                "url": "https://techcrunch.com/2023/03/09/chatgpt-comes-to-microsofts-enterprise-focused-azure-powered-managed-service/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-655242462.jpg?resize=1200,800",
                "publishedAt": "2023-03-09T19:17:26Z",
                "content": "ChatGPT, OpenAI’s viral, AI-powered chatbot tech, is now available in a more enterprise-friendly package.\r\nMicrosoft today announced that ChatGPT is generally available through the Azure OpenAI Servi… [+3156 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Jacquelyn Melinek",
                "title": "Silvergate’s shiny hinges have rusted as the crypto bank plans to shut down",
                "description": "Silvergate Capital, a publicly traded crypto bank, shared that it would “wind down operations and voluntarily liquidate” its bank division",
                "url": "https://techcrunch.com/2023/03/09/silvergates-shiny-hinges-have-rusted-as-the-crypto-bank-plans-to-shut-down/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/11/GettyImages-1271178084.jpg?resize=1200,800",
                "publishedAt": "2023-03-09T19:07:07Z",
                "content": "To get a roundup of TechCrunchs biggest and most important crypto stories delivered to your inbox every Thursday at 12 p.m. PT, subscribe here.\r\nWelcome back to Chain Reaction.\r\nOn Wednesday, Silverg… [+5648 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Brian Heater",
                "title": "Mistakes were made (and that's fine)",
                "description": "Actuator: So many robotics jobs, drone deliveries, police 'bots, humanoid robot takeover and the power of mistakes.",
                "url": "https://techcrunch.com/2023/03/09/mistakes-were-made-and-thats-fine/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-1183393108.jpg?resize=1200,800",
                "publishedAt": "2023-03-09T17:55:03Z",
                "content": "Forgive the scattered nature of this weeks Actuator. No big, overarching monologs this week just a handful of things Ive been thinking about lately that Id like to get down on paper. I suppose thats … [+9656 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Ingrid Lunden",
                "title": "Railsr, the UK embedded fintech once valued at nearly $1B, goes into bankruptcy protection under new consortium owner",
                "description": "Startups are facing a moment of reckoning, and today one of the more promising in the world of fintech has cracked under the pressure.",
                "url": "https://techcrunch.com/2023/03/09/railsr-off-the-rails-embedded-finance/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/02/gettyimages-696622564.jpg?resize=1200,801",
                "publishedAt": "2023-03-09T17:51:59Z",
                "content": "Startups are facing a moment of reckoning in the current economic climate, and today one of the more promising in the world of fintech has cracked under the pressure. Railsr, the London, UK embedded … [+5307 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Kirsten Korosec",
                "title": "Arrival is running out of cash — and fast",
                "description": "Ccommercial EV maker Arrival is burning through cash and looking for more, according to its Q4 and full-year earnings report.",
                "url": "https://techcrunch.com/2023/03/09/arrival-is-running-out-of-cash-and-fast/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/Arrival-Van-Banbury-Exterior-Side-Image.jpeg?resize=1200,800",
                "publishedAt": "2023-03-09T17:49:20Z",
                "content": "The high-cost of trying to develop and produce vehicles, a business pivot and three restructurings has taken a toll on commercial EV maker Arrival. And it doesn’t look like it’s going to get any easi… [+4319 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Frederic Lardinois",
                "title": "Loft makes working with virtualized Kubernetes clusters easier",
                "description": "Loft Labs helps developers — and the businesses that employ them — more efficiently use their Kubernetes clusters by virtualizing Kubernetes itself. This makes it easier to share a single Kubernetes cluster with multiple developers working on different projec…",
                "url": "https://techcrunch.com/2023/03/09/loft-makes-working-with-virtualized-kubernetes-clusters-easier/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1345379649.jpg?resize=1200,692",
                "publishedAt": "2023-03-09T17:25:20Z",
                "content": "Loft Labs helps developers — and the businesses that employ them — more efficiently use their Kubernetes clusters by virtualizing Kubernetes itself. This makes it easier to share a single Kubernetes … [+3504 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Aisha Malik",
                "title": "Discord updates its bot with ChatGPT-like features, rolls out AI-generated conversation summaries and more",
                "description": "The company announced today that it's launching a set of new AI experiences to a number of servers.",
                "url": "https://techcrunch.com/2023/03/09/discord-updates-its-bot-with-chatgpt-like-features-rolls-out-ai-generated-conversation-summaries-and-more/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/08/GettyImages-1215460368.jpg?resize=1200,800",
                "publishedAt": "2023-03-09T16:03:46Z",
                "content": "Discord is the latest company to get in on the AI frenzy. The company announced today that it’s launching a set of new AI experiences to a number of servers.\r\nMost notably, Discord is is updating its… [+3329 chars]"
            },
            {
                "source": {
                    "id": "techcrunch",
                    "name": "TechCrunch"
                },
                "author": "Haje Jan Kamps",
                "title": "Pitch Deck Teardown: MiO Marketplace's $550K angel deck",
                "description": "MiO Marketplace, a platform for media publishers and buyers, shared the deck it used to raise an angel round of $550,000 at a $3.6 million pre-money valuation.",
                "url": "https://techcrunch.com/2023/03/09/sample-angel-pitch-deck-mio-marketplace/",
                "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/MiOMarketplaceAngelPitchDeckTechCrunchPDT-slice-COVER.jpg?resize=1200,675",
                "publishedAt": "2023-03-08T21:50:16Z",
                "content": "Welcome to our 40th Pitch Deck Teardown! Goodness, time flies.\r\nOf those 40, just three were angel rounds, so today, we’ll take apart the angel deck of MiO Marketplace, a platform for media publisher… [+2280 chars]"
            }
        
    
    
];

const newsC=[
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Austen Goslin",
            "title": "J.J. Abrams Batman series has been saved by Amazon",
            "description": "Amazon Prime Video has picked up the once canceled HBO Max series Batman: Caped Crusader, which is co-created by J.J. Abrams, The Batman’s Matt Reeves, and Batman The Animated Series’ Bruce Timm.",
            "url": "https://www.polygon.com/23632724/batman-caped-crusader-animated-series-j-j-abrams-matt-reeves",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/9WGF_6M-tvZ7KrKYnFBan781Ymw=/0x144:2000x1191/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22523967/Batman_Caped_Crusader2C_COLOR_copy.jpg",
            "publishedAt": "2023-03-09T20:48:45Z",
            "content": "Image: Warner Bros. Animation\r\n\n \n\n HBO Max cuts almost claimed another Caped Crusader Batman’s latest animated series was almost canceled before it even had the chance to begin, but it’s been saved … [+1370 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Decider"
            },
            "author": "mliss1578",
            "title": "‘The Last Kingdom’ Sequel ‘Seven Kings Must Die’ Trailer and Release Date",
            "description": "'The Last Kingdom' is returning to Netflix with a feature-length movie.",
            "url": "https://decider.com/2023/03/09/the-last-kingdom-sequel-seven-kings-must-die-trailer-release-date/",
            "urlToImage": "https://decider.com/wp-content/uploads/2023/03/Alexander-Dreymon-in-The-Last-Kingdom-Season-3.png?w=1200",
            "publishedAt": "2023-03-09T20:47:48Z",
            "content": "Netflixs hit series The Last Kingdomis returning next month with a bloodbath of a sequel, and we finally have a trailer and release date. \r\nTitled The Last Kingdom:Seven Kings Must Die, the feature f… [+1419 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bleeding Cool News"
            },
            "author": "Ray Flook",
            "title": "Batman: Caped Crusader Reportedly Gets 2-Season Amazon Series Order",
            "description": "Last month, we made the case that either DC Studios' James Gunn & Peter Safran either needed to bring the upcoming animated series back home or make sure that it finds a new streaming home that will do right by it. Leading into our editorial, reports surfaced…",
            "url": "https://bleedingcool.com/tv/batman-caped-crusader-reportedly-gets-2-season-amazon-series-order/",
            "urlToImage": "https://bleedingcool.com/wp-content/uploads/2021/05/Batman_-Caped-Crusader_Key-Art-2-1200x628.jpg",
            "publishedAt": "2023-03-09T20:46:12Z",
            "content": "Bruce Timm, J.J. Abrams &amp; Matt Reeves' Batman: Caped Crusader is reportedly close to a two-season series deal over at Amazon.\r\nLast month, we made the case that either DC Studios' James Gunn &amp… [+2007 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ETCanada.com"
            },
            "author": "Anita Tai",
            "title": "‘Top Gun: Maverick’ Most Streamed Best Picture Nominee Following Oscars Nod",
            "description": "\"Top Gun: Maverick\" is soaring to new heights. Following the reveal of the 2023 Oscars nominees, Deadline reports fans have flooded to streaming services to check out the Best Picture nominees including the Tom Cruise-led action flick and \"Elvis\". \"Avatar: Th…",
            "url": "https://etcanada.com/news/975136/top-gun-maverick-most-streamed-best-picture-nominee-following-oscars-nod/",
            "urlToImage": "https://etcanada.com/wp-content/uploads/2023/01/Top-Gun.jpg?quality=80&strip=all&w=720&h=480&crop=1",
            "publishedAt": "2023-03-09T20:43:24Z",
            "content": "“Top Gun: Maverick” is soaring to new heights.\r\nFollowing the reveal of the 2023 Oscars nominees, Deadline reports fans have flooded to streaming services to check out the Best Picture nominees inclu… [+1281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Google's Cloud Gaming Ambitions Died With Stadia, Exec Says",
            "description": "An anonymous reader shares a report: Two years ago, I wrote a reasonably prescient editorial about how the writing was on the wall for Google's cloud gaming service Stadia -- and how the company was now hoping to sell its white label streaming technology to o…",
            "url": "https://tech.slashdot.org/story/23/03/09/134248/googles-cloud-gaming-ambitions-died-with-stadia-exec-says",
            "urlToImage": "https://a.fsdn.com/sd/topics/topicgoogle_fb.gif",
            "publishedAt": "2023-03-09T20:41:00Z",
            "content": "Two years ago, I wrote a reasonably prescient editorial about how the writing was on the wall for Google's cloud gaming service Stadia -- and how the company was now hoping to sell its white label st… [+1185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "UPROXX"
            },
            "author": "Mike Redmond",
            "title": "The Spiritual Successor To ‘Batman: The Animated Series’ Has Been Saved By Amazon (For At Least 2 Seasons)",
            "description": "Warner Bros. Animation\r\n\n\n'Batman: Caped Crusader' is still hanging in there.",
            "url": "https://uproxx.com/tv/batman-caped-crusader-animated-series-amazon/",
            "urlToImage": "https://uproxx.com/wp-content/uploads/2021/05/batman-caped-crusader-feat.jpg?w=710",
            "publishedAt": "2023-03-09T20:40:52Z",
            "content": "Despite having everything going for it from being the spiritual successor to the highly-acclaimed Batman: The Animated Series to Matt Reeves’ involvement, Batman: Caped Crusader couldn’t survive the … [+1528 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phys.Org"
            },
            "author": "Christine Clark",
            "title": "If you think you understand how incentives work, think again",
            "description": "How can people be incentivized to drive more fuel-efficient cars, be more innovative at work, and get to the gym on a regular basis? Uri Gneezy, professor of economics and strategy at the Rady School of Management at UC San Diego, explains this in his new boo…",
            "url": "https://phys.org/news/2023-03-incentives.html",
            "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2023/incentive.jpg",
            "publishedAt": "2023-03-09T20:31:04Z",
            "content": "How can people be incentivized to drive more fuel-efficient cars, be more innovative at work, and get to the gym on a regular basis? Uri Gneezy, professor of economics and strategy at the Rady School… [+9037 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Siliconera"
            },
            "author": "Stephanie Liu",
            "title": "Togashi Shares Progress on Hunter x Hunter Manga Chapter 401",
            "description": "Yoshihiro Togashi tweeted about his progress on chapter 401 of the Hunter x Hunter manga. Though we cannot see the name (essentially the draft) at all in the pictures, we can see that he has written about nineteen pages. He also shared a bit of information ab…",
            "url": "https://www.siliconera.com/togashi-shares-progress-on-hunter-x-hunter-manga-chapter-401/",
            "urlToImage": "https://www.siliconera.com/wp-content/uploads/2023/03/hxh40103102023.png",
            "publishedAt": "2023-03-09T20:30:58Z",
            "content": "Yoshihiro Togashi tweeted about his progress on chapter 401 of the Hunter x Hunter manga. Though we cannot see the name (essentially the draft) at all in the pictures, we can see that he has written … [+1344 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GameSpot"
            },
            "author": "David Wolinsky",
            "title": "Batman: Caped Crusader Finds New Home At Amazon After HBO Max Cancellation",
            "description": "Amazon has picked up the animated series Batman: Caped Crusader after it was scrapped by HBO Max last August. The Hollywood Reporter was first to report.The animated series will comprise two seasons and is expected to be a new take on Bruce Timm's 1990's Batm…",
            "url": "https://www.gamespot.com/articles/batman-caped-crusader-finds-new-home-at-amazon-after-hbo-max-cancellation/1100-6512218/",
            "urlToImage": "https://www.gamespot.com/a/uploads/screen_kubrick/1600/16003485/4110115-batman.jpg",
            "publishedAt": "2023-03-09T20:27:00Z",
            "content": "Amazon has picked up the animated series Batman: Caped Crusader after it was scrapped by HBO Max last August. The Hollywood Reporter was first to report.\r\nThe animated series will comprise two season… [+1418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Maketecheasier.com"
            },
            "author": "Laura Tucker",
            "title": "Get an Amazon Fire HD 8 Tablet for Under $60",
            "description": "This may be the tablet deal you’ve been waiting for. Get the latest generation of Amazon Fire HD 8 Tablet, and pay less than $60 yet still get everything you want in a tablet, including streaming, speed, expandable storage, long battery life, and USB-C. Do no…",
            "url": "https://www.maketecheasier.com/deal/amazon-fire-hd-8-tablet-2022/",
            "urlToImage": "https://www.maketecheasier.com/assets/uploads/2023/03/amazon-fire-8-tablet-featured3.jpg",
            "publishedAt": "2023-03-09T20:25:00Z",
            "content": "This may be the tablet deal you’ve been waiting for. Get the latest generation of Amazon Fire HD 8 Tablet, and pay less than $60 yet still get everything you want in a tablet, including streaming, sp… [+1698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New Zealand Herald"
            },
            "author": null,
            "title": "Oscars 2023: What you need to know, from where to watch to who’s picked to win",
            "description": "Planning on tuning in to the Oscars on Monday? Here's everything you need to know.",
            "url": "https://www.nzherald.co.nz/entertainment/oscars-2023-what-you-need-to-know-from-where-to-watch-to-whos-picked-to-win/CLBN3KQBNFEHXG2HREIG67BFWM/",
            "urlToImage": "https://www.nzherald.co.nz/resizer/OR5AIA8WwtHVIj5we8D_yyN4HLA=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/GTZCITIXGNFKLFH5ZOSWTQP2MY.JPG",
            "publishedAt": "2023-03-09T20:24:06Z",
            "content": "Everything Everywhere All At Once is leading this year's Oscar nominations with 11. Photo / APHollywood is gearing up for the 95th Academy Awards, where Everything Everywhere All at Once comes in the… [+5296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thedisneyblog.com"
            },
            "author": "Michelle Snow",
            "title": "Jon Bernthal to Return as The Punisher in Marvel Series ‘Daredevil: Born Again’ Coming to Disney+",
            "description": "The gang’s getting back together as actor Jon bernthal confirms he will once again appear as The Punisher in Marvel’s upcoming Disney+ series, Daredevil: Born Again. The Details If you were a fan of the Marvel series that ran on Netflix, you’ll remember Bernt…",
            "url": "https://thedisneyblog.com/2023/03/09/jon-bernthal-to-return-as-the-punisher-in-marvel-series-daredevil-born-again-coming-to-disney/",
            "urlToImage": "https://thedisneyblog.com/wp-content/uploads/2023/03/thepunisher-jonbernthal.jpg",
            "publishedAt": "2023-03-09T20:14:56Z",
            "content": "The gang’s getting back together as actor Jon bernthal confirms he will once again appear as The Punisher in Marvel’s upcoming Disney+ series, Daredevil: Born Again.\r\nThe Details\r\nIf you were a fan o… [+2183 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "hollywoodreporter.com",
            "title": "‘Batman: Caped Crusader’ Moves to Amazon With Two-Season Order",
            "description": "Batman: Caped Crusader has found a new home at Amazon. The streamer and retail giant has handed out a two-season order for the animated series that was scrapped at HBO Max last August. Caped Crusader landed at the Jennifer Salke-led streamer after producer Wa…",
            "url": "https://biztoc.com/x/5a0048cc1210c970",
            "urlToImage": "https://c.biztoc.com/p/5a0048cc1210c970/og.webp",
            "publishedAt": "2023-03-09T20:14:06Z",
            "content": "Batman: Caped Crusader has found a new home at Amazon.The streamer and retail giant has handed out a two-season order for the animated series that was scrapped at HBO Max last August. Caped Crusader … [+328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "JoBlo.com"
            },
            "author": "Cody Hamman",
            "title": "Slasher season 5, a.k.a Slasher: Ripper, unveils a trailer and poster art",
            "description": "A trailer has been released for Slasher season 5 (a.k.a. Slasher: Ripper), which is coming to Shudder and AMC+ in April\nThe post Slasher season 5, a.k.a Slasher: Ripper, unveils a trailer and poster art appeared first on JoBlo.",
            "url": "https://www.joblo.com/slasher-ripper-trailer/",
            "urlToImage": "https://www.joblo.com/wp-content/uploads/2023/03/slasher-ripper.jpg",
            "publishedAt": "2023-03-09T20:13:49Z",
            "content": "A trailer has been released for Slasher season 5 (a.k.a. Slasher: Ripper), which is coming to Shudder and AMC+ in April\r\nA new season of the television anthology series Slasher  season 5, to be exact… [+2272 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Decider"
            },
            "author": "mliss1578",
            "title": "Will There Be A ‘You’ Season 5 On Netflix? Everything We Know About The Return of Joe Goldberg",
            "description": "Hello, more You?",
            "url": "https://decider.com/2023/03/09/you-season-5-netflix-renewed-canceled/",
            "urlToImage": "https://decider.com/wp-content/uploads/2023/02/you-11.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-03-09T20:13:08Z",
            "content": "Netflix‘s killer thriller You dropped the final five episodes of Season 4 on March 9, and Part 2’s ending was so wild that it has fans wondering if the chaotic series will live to see another season.… [+4666 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forevergeek.com"
            },
            "author": "Aparna Ukil",
            "title": "The Glory Season 2 Release date and Time",
            "description": "After a successful run, the thriller K-Drama, The Glory is coming back with Season 2, and here, we reveal the release date and time for the new season. The Glory Season 1 revolves around a woman named Dong-Eun who had to go through hell because of a group of …",
            "url": "https://www.forevergeek.com/the-glory-season-2-release-date-and-time/",
            "urlToImage": "https://cdn1.forevergeek.com/uploads/33/2023/03/Dong-Eun-Glory-Season-2.jpg",
            "publishedAt": "2023-03-09T20:09:56Z",
            "content": "After a successful run, the thriller K-Drama, The Glory is coming back with Season 2, and here, we reveal the release date and time for the new season.\r\nThe Glory Season 1 revolves around a woman nam… [+1866 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "entrepreneur.com",
            "title": "How to Achieve Long-Term Success by Slowing Down Your Business and Creating a Strategic Plan",
            "description": "Discover the advantages of strategic planning and slowing down your business for long-term success. Here are six tips to get started. Opinions expressed by Entrepreneur contributors are their own. In a fast-paced business world, it's easy to fall into the tra…",
            "url": "https://biztoc.com/x/e19783b77259cf32",
            "urlToImage": "https://c.biztoc.com/p/e19783b77259cf32/og.webp",
            "publishedAt": "2023-03-09T20:02:06Z",
            "content": "Discover the advantages of strategic planning and slowing down your business for long-term success. Here are six tips to get started.Opinions expressed by Entrepreneur contributors are their own.In a… [+285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Lesley Goldberg",
            "title": "Batman: Caped Crusader Animated TV Show Goes to Amazon for Two Seasons",
            "description": "The series, from J.J. Abrams, Matt Reeves and Bruce Timm, was previously developed for HBO Max.",
            "url": "https://www.hollywoodreporter.com/tv/tv-news/batman-caped-crusader-animated-show-amazon-two-seasons-1235343120/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2021/05/batman-copy.jpg?w=1024",
            "publishedAt": "2023-03-09T20:00:54Z",
            "content": "Batman: Caped Crusader has found a new home at Amazon. \r\nThe streamer and retail giant has handed out a two-season order for the animated series that was scrapped at HBO Max last August. Caped Crusad… [+3820 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ComingSoon.net"
            },
            "author": "Tyler Treese",
            "title": "Luther: The Fallen Sun Interview: Neil Cross & Jamie Payne on Transition from TV to Film",
            "description": "ComingSoon Editor-in-Chief Tyler Treese spoke with Neil Cross and Jamie Payne, the respective writer and director of Luther: The Fallen Sun. The duo spoke about collaborating on previous projects and turning the popular series into a movie. The movie will deb…",
            "url": "https://www.comingsoon.net/?p=1272497",
            "urlToImage": "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/03/Luther-interview.jpg?resize=1200,630",
            "publishedAt": "2023-03-09T20:00:00Z",
            "content": "ComingSoon Editor-in-Chief Tyler Treese spoke with Neil Cross and Jamie Payne, the respective writer and director of Luther: The Fallen Sun. The duo spoke about collaborating on previous projects and… [+3872 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Wired",
            "title": "The 10 Best Shows on HBO Max Right Now",
            "description": "From 'The Last of Us' to 'Succession,' HBO Max is a streaming paradise of “it’s not TV” television.",
            "url": "https://www.wired.com/story/hbo-max-best-shows-to-stream-right-now/",
            "urlToImage": "https://media.wired.com/photos/6408bbdf4d078670cd162d9e/191:100/w_1280,c_limit/pedro-pascal-bella-ramsey_Culture.jpg",
            "publishedAt": "2023-03-09T20:00:00Z",
            "content": "HBO Max might be one of the greatest things to come out of the streaming revolution. No, this is not a paid promotion; its just simple logic, given that so much of televisions most compelling content… [+8678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "POPSUGAR"
            },
            "author": "Lindsay Kimble",
            "title": "Milo Manheim Has the Perfect Plan for an Ideal First Date - and Knows the Celeb He Wants to Take",
            "description": "Image Source: Getty/Araya Doheny/WireImage\nIn our Q&A series POPSUGAR Crush, we get to know some of our favorite celebs' more intimate details - from their ideal first date to their most romantic gesture. This month, we're crushing on \"School Spirits\" star Mi…",
            "url": "https://www.popsugar.com/celebrity/milo-manheim-popsugar-crush-interview-49109537",
            "urlToImage": "https://media1.popsugar-assets.com/files/thumbor/OgLvvO5jQnRmHmzDjS7GuNsE8BI/317x94:2649x1318/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-/2023/03/09/861/n/1922398/05999102640a362de98226.01085662_.jpg",
            "publishedAt": "2023-03-09T20:00:00Z",
            "content": "Image Source: Getty/Araya Doheny/WireImage\r\nIn our Q&amp;A series POPSUGAR Crush, we get to know some of our favorite celebs' more intimate details from their ideal first date to their most romantic … [+7056 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WWD"
            },
            "author": "Rosemaryfeitelberg",
            "title": "Eleanor Catton Talks ‘Birnam Wood,’ Former Prime Minister Feud and Vanity",
            "description": "In 2013, the New Zealand-born author, age 28, became the youngest person to win the Booker Prize.",
            "url": "https://wwd.com/eye/people/eleanor-catton-talks-birnam-wood-former-prime-minister-feud-vanity-1235577864/",
            "urlToImage": "https://wwd.com/wp-content/uploads/2023/03/0087365367.original-1.jpg?w=1024",
            "publishedAt": "2023-03-09T19:51:00Z",
            "content": "If candor could be monetized, Eleanor Catton would be minted in gold.\r\nFor the Stateside debut of her latest novel “Birnam Wood,” the New Zealand-born novelist did not hold back Wednesday night, desc… [+7888 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fark.com"
            },
            "author": null,
            "title": "'Queer Eye' star Tom Jackson dead at age 63. \"A highlight of Tom's life was being cast on the Netflix show, 'Queer Eye'. He enjoyed the notoriety and shared his experience with whoever would listen\" [Sad]",
            "description": "'Queer Eye' star Tom Jackson dead at age 63. \"A highlight of Tom's life was being cast on the Netflix show, 'Queer Eye'. He enjoyed the notoriety and shared his experience with whoever would listen\"",
            "url": "https://www.fark.com/comments/12780946/Queer-Eye-star-Tom-Jackson-dead-at-age-63-A-highlight-of-Toms-life-was-being-cast-on-Netflix-show-Queer-Eye-He-enjoyed-notoriety-shared-his-experience-with-whoever-would-listen",
            "urlToImage": "https://usrimg-full.fark.net/N/NI/fark_NImVozo-TPlu3BGmvp_CGdHpTs0.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1678683600&Signature=rf5O7FBYHqfgm6EZHqhXmF8M7ao%3D",
            "publishedAt": "2023-03-09T19:50:16Z",
            "content": "<li>Links are submitted by members of the Fark community.\r\n</li><li>When community members submit a link, they also write a custom headline for the story.\r\n</li><li>Other Farkers comment on the links… [+177 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Associated Press",
            "title": "Oregon liquor officials under criminal investigation for using influence to obtain rare bourbon",
            "description": "In Oregon, several high-ranking officials at the state’s liquor regulating agency are under criminal investigation after an internal probe found they used their influence to obtain scarce bourbon.…",
            "url": "https://nypost.com/2023/03/09/as-bourbon-booms-thirst-for-rare-brands-breeds-skullduggery/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/newspress-collage-26064186-1678389989976.jpg?quality=75&strip=all&1678372062&w=1024",
            "publishedAt": "2023-03-09T19:49:42Z",
            "content": "Buttery, smooth, oaky. \r\nThese are characteristics of the best bourbons, and a growing cult of aficionados is willing to pay hundreds or even thousands of dollars to get their hands on scarce America… [+8100 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Frederick Blichert",
            "title": "8 shows like The Last of Us to check out while we wait for season 2",
            "description": "Looking for shows like The Last of Us? We've compiled a list of the eight best titles to check out while you wait for The Last of Us season 2.",
            "url": "https://www.androidauthority.com/shows-like-the-last-of-us-hbo-max-3293779/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/03/The-Last-of-Us.jpg",
            "publishedAt": "2023-03-09T19:49:06Z",
            "content": "HBO has had a massive hit with The Last of Us, the dystopian sci-fi drama starring Pedro Pascal and Bella Ramsey, based on the hugely successful 2013 Playstation game from Naughty Dog. Scoring the se… [+8724 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Lauryn Overhultz",
            "title": "'Wednesday' star Jenna Ortega brushes off wardrobe malfunction: 'who gives a s--t'",
            "description": "Jenna Ortega joked about her wardrobe malfunction on Instagram after attending the \"Scream VI\" premiere. The actress recently starred in the popular Netflix series \"Wednesday.\"",
            "url": "https://www.foxnews.com/entertainment/wednesday-star-jenna-ortega-brushes-off-wardrobe-malfunction",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/Jenna_Ortega_Display.jpg",
            "publishedAt": "2023-03-09T19:48:28Z",
            "content": "Jenna Ortega doesn't \"give a s--t\" about a little wardrobe malfunction. \r\nThe actress brushed off a recent one she experienced at the \"Scream VI\" global premiere.\r\nOrtega, 20, posed on the red carpet… [+1582 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Lauryn Overhultz",
            "title": "'Wednesday' star Jenna Ortega brushes off wardrobe malfunction: 'who gives a s--t'",
            "description": "Jenna Ortega joked about her wardrobe malfunction on Instagram after attending the \"Scream VI\" premiere. The actress recently starred in the popular Netflix ...",
            "url": "https://news.yahoo.com/wednesday-star-jenna-ortega-brushes-194828210.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/bRdr4nnLJg.18ipqe.WESA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/fox_news_text_979/1bcb80d90a982225f759ffcab3812a8d",
            "publishedAt": "2023-03-09T19:48:28Z",
            "content": "Jenna Ortega doesn't \"give a s--t\" about a little wardrobe malfunction.\r\nThe actress brushed off a recent one she experienced at the \"Scream VI\" global premiere.\r\nOrtega, 20, posed on the red carpet … [+2136 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Daily Dot"
            },
            "author": "Gavia Baker-Whitelaw",
            "title": "Netflix edited Chris Rock’s new comedy special to hide an embarrassing mistake",
            "description": "Marketed as Netflix's first livestreamed comedy event, Chris Rock: Selective Outrage aired last weekend. It debuted to mixed reviews and plenty of drama, mostly focusing on Rock's comments about the Will Smith Oscars slap. But the show's quality as a \"live\" r…",
            "url": "https://www.dailydot.com/unclick/chris-rock-selective-outrage-netflix-edited-joke/",
            "urlToImage": "https://uploads.dailydot.com/2023/03/chris-rock-netflix-edited.jpg?auto=compress&fm=pjpg",
            "publishedAt": "2023-03-09T19:47:53Z",
            "content": "Marketed as Netflix‘s first livestreamed comedy event, Chris Rock: Selective Outrage aired last weekend. It debuted to mixed reviews and plenty of drama, mostly focusing on Rock’s comments about the … [+1653 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bleeding Cool News"
            },
            "author": "Ray Flook",
            "title": "Daredevil: Jon Bernthal's Punisher \"Born Again\" Without Skull Logo?",
            "description": "If you're reading this, then we're assuming this isn't the first time that you've heard that Jon Bernthal is reprising his role as Frank Castle, aka The Punisher, for Matt Corman & Chris Ord's (Covert Affairs) Charlie Cox (Matt Murdock/Daredevil) & Vincent D'…",
            "url": "https://bleedingcool.com/tv/daredevil-jon-bernthals-punisher-born-again-without-skull-logo/",
            "urlToImage": "https://bleedingcool.com/wp-content/uploads/2023/03/Collage-Maker-09-Mar-2023-02-26-PM-4962-1200x628.jpg",
            "publishedAt": "2023-03-09T19:47:12Z",
            "content": "Jon Bernthal's Frank Castle/Punisher may be making the jump from Netflix to Disney+. Here's why we're hoping the skull logo doesn't join him.\r\nIf you're reading this, then we're assuming this isn't t… [+4132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Boston Globe"
            },
            "author": "Nick A. Zaino III",
            "title": "For comedian Fortune Feimster, ‘live, laugh, love’ is a way of life",
            "description": "Her stand-up act — she'll be playing four shows locally March 16-18 — is always upbeat. “I think by nature, I’m a fairly positive person,\" she says.",
            "url": "https://www.bostonglobe.com/2023/03/09/arts/comedian-fortune-feimster-live-laugh-love-is-way-life/",
            "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/8cfiZN8c2kdAodakW8v24BHlHz0=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/7NYEMEUAYFDTRCGQ4KXKV4ZLQM.jpg",
            "publishedAt": "2023-03-09T19:43:38Z",
            "content": "Speaking by phone from Los Angeles the morning the trailer was released, she laughs when asked what it was like to film that scene. That was definitely not on my vision board or bucket list, she says… [+4194 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Daily Caller"
            },
            "author": "Brianna Lyman",
            "title": "Kaepernick Accuses His White Adoptive Parents Of Perpetuating ‘Racism’",
            "description": "Former NFL quarterback Colin Kaepernick accused his white adoptive parents of &quot;perpetuating racism&quot; and called parts of his upbringing &quot;problematic.&quot;",
            "url": "https://dailycaller.com/2023/03/09/colin-kaepernick-racism-white-adoptive-parents-nfl-change-the-game/",
            "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2023/03/GettyImages-1389186505-e1678389157503.jpg",
            "publishedAt": "2023-03-09T19:43:00Z",
            "content": "Former NFL quarterback Colin Kaepernick has accused his white adoptive parents of “perpetuating racism” and called parts of his upbringing “problematic.”\r\nKaepernick recounted his experience growing … [+1391 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Screen Rant"
            },
            "author": "Gina Wurtz",
            "title": "MH370 True Story: 7 Details The Documentary Leaves Out",
            "description": "The new Netflix documentary MH370: The Plane That Disappeared revisited the plane's disappearance but left out some crucial information.",
            "url": "https://screenrant.com/mh370-documentary-true-story-missing/",
            "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/mh370-documentary-true-story-missing.jpg",
            "publishedAt": "2023-03-09T19:40:15Z",
            "content": "Netflix's latest documentary MH370: The Plane That Disappeared, dives into the mysterious disappearance of Malaysia Airlines Flight 370 but doesn't give as much information as it should. Where the pl… [+7429 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Okayplayer"
            },
            "author": "Abe Beame",
            "title": "2022 Oscars Predictions: Here’s Who Will Win (And Who We Think Should Win)",
            "description": "The 2023 Oscars are this weekend. Here is who we think will win (and who should win.) Sunday, we return to what we can all agree is the last, relevant, standing awards show: the Oscars. And this won’t just be any year for the Oscars — in many senses, 2022 was…",
            "url": "http://www.okayplayer.com/culture/2022-oscars-predictions.html",
            "urlToImage": "https://www.okayplayer.com/wp-content/uploads/2020/12/white_logo.png",
            "publishedAt": "2023-03-09T19:38:51Z",
            "content": "2022 Oscars Predictions: Heres Who Will Win (And Who We Think Should Win)\r\nCulture - 27 mins ago\r\nThe 2023 Oscars are this weekend. Here is who we think will win (and who should win.)\r\nSunday, we ret… [+24082 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mirror Online"
            },
            "author": "mirrornews@mirror.co.uk (Joel Leaver)",
            "title": "Netflix's You fans divided over 'insane' ending following twist in fourth season",
            "description": "The second part of You's fourth season was released on Netflix earlier, providing twists and a controversial conclusion - with fans divided over the ending which has been described as 'insane'",
            "url": "https://www.mirror.co.uk/tv/tv-news/netflixs-you-fans-divided-over-29418473",
            "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article29418661.ece/ALTERNATES/s1200/0_4.jpg",
            "publishedAt": "2023-03-09T19:38:45Z",
            "content": "Netflix has released the much-anticipated second part of You's fourth season and viewers are divided over its conclusion, which has been described by fans as \"insane\". \r\n The latest season saw serial… [+2754 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TheWrap"
            },
            "author": "Lawrence Yee",
            "title": "How to Watch the ‘Scream’ Movies in Order",
            "description": "The Scream series, created by Kevin Williamson, spans six live-action films, the first four of which were directed by horror master Wes Craven.",
            "url": "http://www.thewrap.com/scream-movies-in-order-how-to-watch/",
            "urlToImage": "https://www.thewrap.com/wp-content/uploads/2023/03/courteney-cox-gale-weathers-scream-VI.jpg",
            "publishedAt": "2023-03-09T19:34:25Z",
            "content": "Spanning six live-action films, a television series, and even a franchise within a franchise, the “Scream” films have been scaring audiences since 1996.\r\nThe franchise was created by Kevin Williamson… [+3495 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "adweek.com",
            "title": "How Marketers Can Make the Most of SXSW 2023",
            "description": "Join iconic brands and world-class marketing leaders at Brandweek to unlock powerful insights and impact-driven strategies. Attend in Miami or virtually, Sept. 11–14. Save 50% with early-bird passes . South By Southwest, the annual conference and festival ser…",
            "url": "https://biztoc.com/x/8318718c3f146cbe",
            "urlToImage": "https://c.biztoc.com/p/8318718c3f146cbe/og.webp",
            "publishedAt": "2023-03-09T19:34:13Z",
            "content": "Join iconic brands and world-class marketing leaders at Brandweek to unlock powerful insights and impact-driven strategies. Attend in Miami or virtually, Sept. 1114. Save 50% with early-bird passes .… [+285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ETCanada.com"
            },
            "author": "Aashna Shah",
            "title": "‘The Night Agent’ Trailer: Gabriel Basso Takes A Call Which Propels Him Into A Dangerous Conspiracy",
            "description": "An updated trailer for the upcoming thriller series “The Night Agent,” starring Gabriel Basso and Luciane Buchanan, has been made available on Netflix. Shawn Ryan collaborated with MiddKid Productions to produce the series, which is based on the same-named bo…",
            "url": "https://etcanada.com/news/975119/the-night-agent-trailer-gabriel-basso-takes-a-call-which-propels-him-into-a-dangerous-conspiracy/",
            "urlToImage": "https://etcanada.com/wp-content/uploads/2023/03/b7ab7d84959e3e2aa2ff54c2777fd4290b06b269-2.jpeg?quality=80&strip=all&w=318&h=212&crop=1",
            "publishedAt": "2023-03-09T19:32:53Z",
            "content": "An updated trailer for the upcoming thriller series The Night Agent, starring Gabriel Basso and Luciane Buchanan, has been made available on Netflix.\r\nShawn Ryan collaborated with MiddKid Productions… [+937 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ETCanada.com"
            },
            "author": "Anita Tai",
            "title": "Oscars Reportedly Deny Ukraine President Volodymyr Zelenskyy Appearance, Again",
            "description": "Ukraine President Volodymyr Zelenskyy will be missing out on the Academy Awards for the second year in a row. Deadline reports that the actor-turned-politician made a bid with the awards show for a virtual appearance during Sunday's show. Their sources say WM…",
            "url": "https://etcanada.com/news/975070/oscars-reportedly-deny-ukraine-president-volodymyr-zelenskyy-appearance-again/",
            "urlToImage": "https://etcanada.com/wp-content/uploads/2023/03/CP27870668.jpg?quality=80&strip=all&w=720&h=480&crop=1",
            "publishedAt": "2023-03-09T19:30:56Z",
            "content": "Ukraine President Volodymyr Zelenskyy will be missing out on the Academy Awards for the second year in a row.\r\nDeadline reports that the actor-turned-politician made a bid with the awards show for a … [+1687 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Roanoke Times"
            },
            "author": "By Becca Robbins, The Columbian, Vancouver, Wash. (TNS)",
            "title": "Washington state girl kidnapped by mother in 2018 found in Mexico, returned to US",
            "description": "The girl, kidnapped when she was 4, has been found in Mexico and returned back to the United States, the FBI says.",
            "url": "https://roanoke.com/news/national/washington-state-girl-kidnapped-by-mother-in-2018-found-in-mexico-returned-to-us/article_b80d8d46-b3b3-5b7f-9656-e12eb8a3642e.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/b/80/b80d8d46-b3b3-5b7f-9656-e12eb8a3642e/640a0675c2e2a.preview.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
            "publishedAt": "2023-03-09T19:30:00Z",
            "content": "Aranza Maria Ochoa Lopez\r\nFBI\r\nA 4-year-old Vancouver girl who was kidnapped by her mother in 2018 was found last month in Mexico and returned to the United States, the FBI announced Wednesday.\r\nAran… [+15443 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Billings Gazette"
            },
            "author": "By Becca Robbins, The Columbian, Vancouver, Wash. (TNS)",
            "title": "Washington state girl kidnapped by mother in 2018 found in Mexico, returned to US",
            "description": "The girl, kidnapped when she was 4, has been found in Mexico and returned back to the United States, the FBI says.",
            "url": "https://billingsgazette.com/news/national/washington-state-girl-kidnapped-by-mother-in-2018-found-in-mexico-returned-to-us/article_2a11cf26-7c93-5761-bf1c-9b6bf12996ab.html",
            "urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/2/a1/2a11cf26-7c93-5761-bf1c-9b6bf12996ab/640a066b8a70c.preview.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
            "publishedAt": "2023-03-09T19:30:00Z",
            "content": "Aranza Maria Ochoa Lopez\r\nFBI\r\nA 4-year-old Vancouver girl who was kidnapped by her mother in 2018 was found last month in Mexico and returned to the United States, the FBI announced Wednesday.\r\nAran… [+17709 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Richmond.com"
            },
            "author": "By Becca Robbins, The Columbian, Vancouver, Wash. (TNS)",
            "title": "Washington state girl kidnapped by mother in 2018 found in Mexico, returned to US",
            "description": "The girl, kidnapped when she was 4, has been found in Mexico and returned back to the United States, the FBI says.",
            "url": "https://richmond.com/news/national/washington-state-girl-kidnapped-by-mother-in-2018-found-in-mexico-returned-to-us/article_fb45e766-9932-50e4-afda-dba018d41119.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/f/b4/fb45e766-9932-50e4-afda-dba018d41119/640a0675b1b48.preview.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
            "publishedAt": "2023-03-09T19:30:00Z",
            "content": "Aranza Maria Ochoa Lopez\r\nFBI\r\nA 4-year-old Vancouver girl who was kidnapped by her mother in 2018 was found last month in Mexico and returned to the United States, the FBI announced Wednesday.\r\nAran… [+16691 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TODAY"
            },
            "author": "Sarah Jacoby",
            "title": "I'm a sleep doctor. Here are 5 things I never do before bed",
            "description": "Having trouble getting to sleep? You might benefit from following this expert-approved bedtime routine and enforcing a few rules to get quality sleep every night.",
            "url": "https://www.today.com/health/sleep/sleep-expert-bedtime-routine-rcna73798",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2023-03/5-things-before-bed-te-230308-06808c.jpg",
            "publishedAt": "2023-03-09T19:29:08Z",
            "content": "Getting to sleep seems like something that should come naturally to us. But far too often it's a challenge to get those quality ZZZs. \r\nIf you find yourself tossing and turning in bed or falling asle… [+4623 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Fox News",
            "title": "Colin Kaepernick accuses white adoptive parents of ‘problematic’ upbringing, perpetuating racism",
            "description": "Former NFL quarterback Colin Kapernick accused his adoptive parents of \"perpetuating racism\" in an interview that aired Thursday.",
            "url": "https://nypost.com/2023/03/09/colin-kaepernick-accuses-white-adoptive-parents-of-problematic-upbringing/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/newspress-collage-26064589-1678389869372.jpg?quality=75&strip=all&1678372075&w=1024",
            "publishedAt": "2023-03-09T19:28:35Z",
            "content": "Former NFL quarterback Colin Kapernick accused his adoptive parents of “perpetuating racism” in an interview that aired Thursday.\r\nKaepernick talked about coming to terms with his racial identity whi… [+1875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elite Daily"
            },
            "author": "Rachel Chapman",
            "title": "Books Like 'Daisy Jones & The Six' When You Want More Rock 'N Roll",
            "description": "If you're wondering what to read next after 'Daisy Jones & The Six.' this list of recommendations include picks from BookTok, similar authors, hidden gems, and more.",
            "url": "https://www.elitedaily.com/lifestyle/books-like-daisy-jones-and-six-recommendations",
            "urlToImage": "https://imgix.bustle.com/uploads/image/2023/3/9/392535e6-f9cb-48fd-b219-b2863816e3a2-daisy_jones_prime.JPG?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.524&fp-y=0.1663",
            "publishedAt": "2023-03-09T19:28:23Z",
            "content": "Before Daisy Jones &amp; The Six was adapted into a Prime Video series, Reese Witherspoon picked the novel for her book club back in 2019. Witherspoon saw what fans of the story about the rise and fa… [+6652 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Adweek"
            },
            "author": "Kathryn Lundstrom",
            "title": "From Activations to Agency Parties, Here’s What Marketers Can Expect at SXSW 2023",
            "description": "South By Southwest, the annual conference and festival series spanning tech, art, music, film and comedy, kicks off this weekend in Austin, Texas. Known for startup launches, tech innovation and over-the-top brand activations, the conference component draws m…",
            "url": "https://www.adweek.com/brand-marketing/activations-agency-parties-what-marketers-can-expect-sxsw-2023/",
            "urlToImage": "https://static-prod.adweek.com/wp-content/uploads/2023/03/marketers-sxsw-2023-600x315.jpg",
            "publishedAt": "2023-03-09T19:25:33Z",
            "content": "South By Southwest, the annual conference and festival series spanning tech, art, music, film and comedy, kicks off this weekend in Austin, Texas.\r\nKnown for startup launches, tech innovation and ove… [+4455 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lostremote.com"
            },
            "author": "Kathryn Lundstrom",
            "title": "From Activations to Agency Parties, Here’s What Marketers Can Expect at SXSW 2023",
            "description": "South By Southwest, the annual conference and festival series spanning tech, art, music, film and comedy, kicks off this weekend in Austin, Texas. Known for startup launches, tech innovation and over-the-top brand activations, the conference component draws m…",
            "url": "https://www.lostremote.com/brand-marketing/activations-agency-parties-what-marketers-can-expect-sxsw-2023/",
            "urlToImage": "https://static-prod.adweek.com/wp-content/uploads/2023/03/marketers-sxsw-2023-600x315.jpg",
            "publishedAt": "2023-03-09T19:25:33Z",
            "content": "South By Southwest, the annual conference and festival series spanning tech, art, music, film and comedy, kicks off this weekend in Austin, Texas.\r\nKnown for startup launches, tech innovation and ove… [+4455 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "UPROXX"
            },
            "author": "Josh Kurp",
            "title": "Netflix Is Changing Its Subtitles In A Big Way, Literally",
            "description": "Netflix\r\n\n\nNetflix's subtitles, now with more customization.",
            "url": "https://uproxx.com/tv/netflix-subtitles-customize/",
            "urlToImage": "https://uproxx.com/wp-content/uploads/2023/02/wednesday.jpg?w=1024",
            "publishedAt": "2023-03-09T19:23:52Z",
            "content": "Among streaming services, Netflix has some of the best subtitles and closed captions. The font is pleasing and the text is mostly (but not always) accurate. And now there’s even more customization op… [+1154 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TheWrap"
            },
            "author": "Sean Burch",
            "title": "Another KO: ‘Creed III’ Gives Major Streaming Boosts to Previous ‘Creed,’ ‘Rocky’ Films | Chart",
            "description": "It’s one more example of big box office driving interest for other releases from a franchise",
            "url": "http://www.thewrap.com/top-movies-streaming-creed-3/",
            "urlToImage": "https://www.thewrap.com/wp-content/uploads/2023/03/jonathan-majors-creed-III.jpg",
            "publishedAt": "2023-03-09T19:21:10Z",
            "content": "Not only is Creed III the top movie in the country, but that box office success is also driving interest in the franchises previous films, with both Creed and Creed II cracking Whip Medias latest mov… [+2235 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "looper.com",
            "title": "Netflix's MH370 Left Viewers Heartbroken For The Victims' Families",
            "description": "In the time directly following the release of \"Flight MH370: The Plane That Disappeared,\" watchers took to social media to express their sadness for the families of the passengers who disappeared. \"My heart is heavy. No plane can possibly vanish from the face…",
            "url": "https://biztoc.com/x/e67926a34c51144f",
            "urlToImage": "https://c.biztoc.com/p/e67926a34c51144f/og.webp",
            "publishedAt": "2023-03-09T19:10:07Z",
            "content": "In the time directly following the release of \"Flight MH370: The Plane That Disappeared,\" watchers took to social media to express their sadness for the families of the passengers who disappeared. \"M… [+267 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "looper.com",
            "title": "How Accurate Is Netflix's MH370: The Plane That Disappeared?",
            "description": "How Accurate Is Netflix's MH370: The Plane That Disappeared? The disappearance of 2014's Malaysian flight MH370 has made its way into the list of other great, unsolved mysteries of the world, such as what happened to the 10-person crew of the Mary Celeste in …",
            "url": "https://biztoc.com/x/4d5f04bfa6af6de7",
            "urlToImage": "https://c.biztoc.com/p/4d5f04bfa6af6de7/og.webp",
            "publishedAt": "2023-03-09T19:10:07Z",
            "content": "How Accurate Is Netflix's MH370: The Plane That Disappeared?The disappearance of 2014's Malaysian flight MH370 has made its way into the list of other great, unsolved mysteries of the world, such as … [+299 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Just Jared"
            },
            "author": "Just Jared",
            "title": "'Love Is Blind' Season 4 Cast Revealed - See All 30 Contestants on the Netflix Dating Show!",
            "description": "Love Is Blind is back! The hit Netflix dating reality show, which finds contestants going on dates in pods without the ability to see each other, is set to return to the streamer on March 24. If there’s a proposal, the pairings will then meet outside of their…",
            "url": "http://www.justjared.com/2023/03/09/love-is-blind-season-4-cast-revealed-see-all-30-contestants-on-the-netflix-dating-show/",
            "urlToImage": "https://cdn.justjared.com/wp-content/uploads/headlines/2023/03/love-is-blind-4-social.jpg",
            "publishedAt": "2023-03-09T19:08:54Z",
            "content": "Love Is Blind is back!\r\nThe hit Netflix dating reality show, which finds contestants going on dates in pods without the ability to see each other, is set to return to the streamer on March 24.\r\nIf th… [+222 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Tom Murray",
            "title": "Why did Will Smith slap Chris Rock at the Oscars last year?",
            "description": "New crisis measures have been introduced to avoid another ‘Slapgate’",
            "url": "https://www.independent.co.uk/arts-entertainment/films/news/will-smith-chris-rock-jada-slap-oscars-b2297584.html",
            "urlToImage": "https://static.independent.co.uk/2023/03/01/14/SEI144112057.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-03-09T19:06:46Z",
            "content": "Get our free weekly email for all the latest cinematic news from our film critic Clarisse Loughrey\r\nGet our The Life Cinematic email for free\r\nLast years Oscars will be remembered as perhaps the most… [+3376 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vulture"
            },
            "author": "Jeremy Fassler",
            "title": "Every Oscar Winner for Best Animated Short Film, Ranked",
            "description": "From its earliest honorees to the present, the Academy Award for Best Animated Short doubles as a kind of history of the ever-changing medium. We ranked them all — from animation’s Golden Age to the arrival of Pixar and beyond.",
            "url": "http://www.vulture.com/article/best-oscar-winner-for-animated-shorts-ranked.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/a39/ab0/681f68f326d5d1b6a66da647f10b165cbb-oscars-animated-shorts.1x.rsocial.w1200.jpg",
            "publishedAt": "2023-03-09T19:05:00Z",
            "content": "This story was published in 2019. It has been updated to include winners from the past few Academy Awards.\r\nAlthough animated films are as old as cinema itself, it wasnt until the fifth Academy Award… [+53816 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BGR"
            },
            "author": "Andy Meek",
            "title": "Netflix’s most-watched movies list for the US today doesn’t include a single Netflix original",
            "description": "For the 7-day period ending on March 5, Netflix’s list of the Top 10 movies for the US included just two Netflix originals — the …\nThe post Netflix’s most-watched movies list for the US today doesn’t include a single Netflix original appeared first on BGR.",
            "url": "https://bgr.com/entertainment/netflixs-most-watched-movies-list-for-the-us-today-doesnt-include-a-single-netflix-original/",
            "urlToImage": "https://bgr.com/wp-content/uploads/2022/11/rsz_gettyimages-1231759152.jpg?quality=82&strip=all",
            "publishedAt": "2023-03-09T19:03:54Z",
            "content": "For the 7-day period ending on March 5, Netflix’s list of the Top 10 movies for the US included just two Netflix originals — the new-ish We Have a Ghost, and The Strays. The rest of that list of the … [+2510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SiliconANGLE News"
            },
            "author": "Victor Dabrinze",
            "title": "Making scalable computing easy: Anyscale harnesses foundational machine learning models at scale",
            "description": "Foundational machine learning models are typically large — trained using unlabeled data at scale, to further be adapted to a wide spectrum of specific tasks. But, given their depth, these models also require large amounts of compute resources to perform at a …",
            "url": "https://siliconangle.com/2023/03/09/making-scalable-computing-easy-anyscale-harnesses-foundational-machine-learning-models-scale-awsshowcases3e1/",
            "urlToImage": "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/03/Robert-Nishihara-CLEAN-1.jpg",
            "publishedAt": "2023-03-09T19:00:58Z",
            "content": "Foundational machine learning models are typically large — trained using unlabeled data at scale, to further be adapted to a wide spectrum of specific tasks.\r\nBut, given their depth, these models als… [+4896 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dramabeans.com"
            },
            "author": "missvictrix",
            "title": "Premiere Watch: The Glory (Part 2)",
            "description": "Time slot: Friday (single drop) Broadcaster: Netflix Genre: Revenge, thriller Episode count: 8 (Part 2) Reasons to watch: If you were one of the many viewers who fell for this dark tale of long-spun revenge — and then were left hanging due to the seasonal app…",
            "url": "https://www.dramabeans.com/2023/03/premiere-watch-the-glory-part-2/",
            "urlToImage": "https://d263ao8qih4miy.cloudfront.net/wp-content/uploads/2023/03/theglory2_pr.jpg",
            "publishedAt": "2023-03-09T19:00:57Z",
            "content": "Premiere Watch: The Glory (Part 2)\r\nTime slot: Friday (single drop)Broadcaster: NetflixGenre: Revenge, thrillerEpisode count: 8 (Part 2)\r\nReasons to watch: If you were one of the many viewers who fel… [+556 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Siliconera"
            },
            "author": "Stephanie Liu",
            "title": "Attack on Titan Shirts Will Appear at Uniqlo",
            "description": "To commemorate the first half of part 3 of the final season of Attack on Titan, Uniqlo will sell several t-shirts based on signature scenes from the series. People in Japan will be able to purchase them from March 17, 2023. All of the shirts will cost 1,500 J…",
            "url": "https://www.siliconera.com/attack-on-titan-shirts-will-appear-at-uniqlo/",
            "urlToImage": "https://www.siliconera.com/wp-content/uploads/2023/03/attackontitanut03102023.png",
            "publishedAt": "2023-03-09T19:00:56Z",
            "content": "To commemorate the first half of part 3 of the final season of Attack on Titan, Uniqlo will sell several t-shirts based on signature scenes from the series. People in Japan will be able to purchase t… [+1231 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vulture"
            },
            "author": "Eric Vilas-Boas",
            "title": "‘It’s Kind of Embarrassing’: Why Animators Are Unhappy With the Oscars",
            "description": "The Oscar for Best Animated Feature is only a couple of decades old, but that’s been enough time for animators and filmmakers to realize that the category isn’t working — unless your name is Disney.",
            "url": "http://www.vulture.com/article/oscars-animation-award-problems.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/98e/16e/0110f97c5ae74954689a371cc062983b32-animation-oscars-feature.1x.rsocial.w1200.jpg",
            "publishedAt": "2023-03-09T19:00:40Z",
            "content": "Don Hahn remembers the night he lost the Oscar for Best Picture. The Beauty and the Beast producer sat in the seventh row of the 64th Academy Awards, next to Jeffrey Katzenberg and behind Sylvester S… [+14698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Queerty.com"
            },
            "author": "Johnny Lopez",
            "title": "‘Élite’ casts a major queer pop star for season 7 & the gays are losing it",
            "description": "The upcoming final season of Élite is gearing up to be hotter than ever.",
            "url": "https://www.queerty.com/elite-casts-a-major-queer-pop-star-for-season-7-the-gays-are-losing-it-20230309",
            "urlToImage": "https://adabgmwwup.cloudimg.io/v7/_queerty-prodweb_/2023/03/screen-shot-2023-03-09-at-1.37.56-pm.png?&auto=format&auto=compress&crop=faces&fit=crop&gravity=face&w=1200&h=630&force_format=jpeg&wat=1&wat_gravity=southeast&wat_pad=70",
            "publishedAt": "2023-03-09T19:00:00Z",
            "content": "credit: Netflix\r\nThe upcoming final season of Élite is gearing up to be hotter than ever.\r\nNetflixs blockbuster Spanish-language teen telenovela is already known for employing a diverse, beautiful ca… [+3717 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Thomas Buckley",
            "title": "Disney CEO Is Studying Hulu Stake in ‘Very Tricky’ Streaming Sector",
            "description": "(Bloomberg) -- Walt Disney Co. won’t make any decisions on selling its majority ownership in Hulu or acquiring Comcast Corp.’s stake before gaining a better ...",
            "url": "https://finance.yahoo.com/news/disney-ceo-studying-hulu-stake-185304169.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/PxlJ28BU4Tc8w5VpB.2bZg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_markets_842/e976689c49bf56ddb376b85cc67a694e",
            "publishedAt": "2023-03-09T18:53:04Z",
            "content": "(Bloomberg) -- Walt Disney Co. wont make any decisions on selling its majority ownership in Hulu or acquiring Comcast Corp.s stake before gaining a better understanding of the streaming platforms pot… [+1840 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Hollywood Gossip"
            },
            "author": "Tyler Johnson",
            "title": "Meghan Markle Accused of Lying About Her Age In Latest Bonkers Conspiracy Theory",
            "description": "Over the course of the past seven years, Meghan Markle has been at the center of just about every sort …\nMeghan Markle Accused of Lying About Her Age In Latest Bonkers Conspiracy Theory was originally published on The Hollywood Gossip.",
            "url": "http://www.thehollywoodgossip.com/2023/03/meghan-markle-accused-of-lying-about-her-age-in-latest-bonkers-conspiracy-theory/",
            "urlToImage": "https://cdn.thehollywoodgossip.com/uploads/2022/12/Screen-Shot-2022-12-16-at-5.02.38-PM-1.png",
            "publishedAt": "2023-03-09T18:52:53Z",
            "content": "Over the course of the past seven years, Meghan Markle has been at the center of just about every sort of conspiracy theory and smear campaign imaginable.\r\nToxic tabloid outlets have claimed that Meg… [+3525 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Winter is Coming"
            },
            "author": "Sarah Kenchington",
            "title": "Shadow and Bone author Leigh Bardugo has strong opinions on trigger warnings",
            "description": "Leigh Bardugo may be best known for her impact in YA fantasy, having written the hugely successful Grishaverse series (upon which the TV show Shadow and Bone is based), but that doesn’t mean she has ever shied away from tackling uncomfortable and difficult th…",
            "url": "https://winteriscoming.net/2023/03/09/grishaverse-shadow-and-bone-author-leigh-bardugo-has-some-strong-opinions-trigger-warnings/",
            "urlToImage": "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2023%2F03%2F1431753256.jpeg",
            "publishedAt": "2023-03-09T18:50:26Z",
            "content": "Leigh Bardugo may be best known for her impact in YA fantasy, having written the hugely successful Grishaverse series (upon which the TV show Shadow and Bone is based), but that doesn’t mean she has … [+3029 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hip-Hop Wired"
            },
            "author": "O Mazariego",
            "title": "Jon Bernthal To Return As The Punisher In Disney+’s ‘Daredevil: Reborn’ Series",
            "description": "Jon Bernthal is said to be returning as The Punisher in Disney+'s 'Daredevil: Reborn' series. Shooting begins this month in New York.\nThe post Jon Bernthal To Return As The Punisher In Disney+’s ‘Daredevil: Reborn’ Series appeared first on The Latest Hip-Hop …",
            "url": "http://hiphopwired.com/1369454/jon-bernthal-to-return-as-the-punisher-in-disneys-daredevil-reborn-series/",
            "urlToImage": "https://hiphopwired.com/wp-content/uploads/sites/43/2023/03/16783803948045.jpg?quality=85&strip=all&w=560&crop=0,0,100,320px",
            "publishedAt": "2023-03-09T18:47:40Z",
            "content": "HipHopWired Featured Video\r\nSource: Paul Archuleta / Getty\r\nWe’re still a ways away from once again indulging in the violent adventures of the MCU’s “Man Without Fear” as Disney+’s Daredevil: Born Ag… [+2989 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Life"
            },
            "author": "Avery Thompson",
            "title": "‘You’ Season 4 Part 2 Ending Explained: Joe’s Full Circle Moment, [Spoiler]’s Return & More",
            "description": "Part 2 of 'You' season 4 took the concept of twists to a whole new level. Let's break down all the major moments of season 4's ending. Spoilers ahead!",
            "url": "https://hollywoodlife.com/feature/you-season-4-part-2-ending-explained-spoilers-5046251/",
            "urlToImage": "https://hollywoodlife.com/wp-content/uploads/2023/03/You-S4Pt2-Ending-Explained-Netflix-ftr.jpg",
            "publishedAt": "2023-03-09T18:47:28Z",
            "content": "View galleryImage Credit: Netflix\r\nJoe Goldberg has managed to find a way to evade consequences again. Netflix dropped the second part of You season 4 on March 9, giving fans the last 5 episodes of t… [+4427 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TVLine"
            },
            "author": "Claire Franken",
            "title": "Chris Rock’s Concussion/Emancipation Flub in Netflix's Selective Outrage Has Mysteriously Disappeared",
            "description": "It appears Chris Rock’s Selective Outrage has undergone some selective editing. A new version of the comedian’s March 4 live Netflix standup event (read our recap here) no longer contains a Will Smith-related flub that Rock made near the end of the special. I…",
            "url": "https://tvline.com/2023/03/09/chris-rock-concussion-emancipation-mistake-netflix-special/",
            "urlToImage": "https://tvline.com/wp-content/uploads/2023/03/chris-rock-inset-1.jpg?w=620",
            "publishedAt": "2023-03-09T18:47:00Z",
            "content": "It appears Chris Rock’s Selective Outrage has undergone some selective editing.\r\nA new version of the comedian’s March 4 live Netflix standup event (read our recap here) no longer contains a Will Smi… [+1893 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Affordanything.com"
            },
            "author": "Paula Pant",
            "title": "#431: Mr. Money Mustache Talks About His Dating Life",
            "description": "The title says it all. Paula Pant interviews Mr. Money Mustache about his dating life.\n\nWe chat about why he wants to date inside the FIRE community (financial independence, retire early) – and whether he’s had any luck.\n\nWe discuss the perils of navigating i…",
            "url": "https://affordanything.com/431-mr-money-mustache-talks-about-his-dating-life/",
            "urlToImage": "https://affordanything.com/wp-content/uploads/2023/03/PXL_20211114_172647389_Original.jpg",
            "publishedAt": "2023-03-09T18:46:42Z",
            "content": "The title says it all. Paula Pant interviews Mr. Money Mustache about his dating life.\r\nWe chat about why he wants to date inside the FIRE community (financial independence, retire early) and whether… [+2234 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "PA Reporter",
            "title": "Palace staff reportedly planning for Harry and Meghan to attend coronation",
            "description": "The Sussexes are said to be included in arrangements for cars, seating and dining ahead of the May 6 ceremony.",
            "url": "https://www.independent.co.uk/life-style/royal-family/harry-meghan-coronation-seating-plan-b2297662.html",
            "urlToImage": "https://static.independent.co.uk/2023/03/08/18/Britain_Royals_85614.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-03-09T18:46:38Z",
            "content": "Stay ahead of the trend in fashion and beyond with our free weekly Lifestyle Edit newsletter\r\nStay ahead of the trend in fashion and beyond with our free weekly Lifestyle Edit newsletter \r\nBuckingham… [+1736 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Tasha Robinson",
            "title": "Oscar nominees drew their characters winning, and it’s the absolute best",
            "description": "Turning Red director Domee Shi, Puss In Boots: The Last Wish director Joel Crawford, The Sea Beast director Chris Williams, and Ice Merchants director João Gonzalez appear in an Oscars 2023 promo where they draw their wins.",
            "url": "https://www.polygon.com/23632317/oscars-2023-best-animation-nominees-interviews",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/aVHs6oiN3qevDveHIDn8APekyZQ=/0x50:2400x1307/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24491779/TurningRedOoh.jpg",
            "publishedAt": "2023-03-09T18:46:14Z",
            "content": "Image: Pixar Studios Animation\r\n\n \n\n The most wholesome thing on the internet today The 2023 Academy Awards ceremony is Sunday night, and in the lead-up, the Academy of Motion Picture Arts and Scienc… [+1658 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "matthewgrobar",
            "title": "APA Signs ‘Jumanji’ Franchise’s Madison Iseman",
            "description": "EXCLUSIVE: APA on Thursday announced its signing of actress Madison Iseman. Iseman is one of a number of emerging stars to have inked with the agency of late, joining a list that includes Rosa Salazar, Brianna Hildebrand, Trevor Jackson and Michael Rainey Jr.…",
            "url": "https://deadline.com/2023/03/madison-iseman-i-know-what-you-did-last-summer-apa-1235283739/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2023/03/thumbnail_cid16253aX253aRgAAAACcAvSiUTo5SpeUqNs13bi252fBwBMmtpMr9r4QoM73epSKqXnAAAAG2kEAACdQxczK252bZATZOpgG7XXQ6AAAODHsOCAAAJ253aEACN9rP8wCyvSb252b252bUWOcOLFe.png?w=1024",
            "publishedAt": "2023-03-09T18:45:13Z",
            "content": "EXCLUSIVE: APA on Thursday announced its signing of actress Madison Iseman.\r\nIseman is one of a number of emerging stars to have inked with the agency of late, joining a list that includes Rosa Salaz… [+1180 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "POPSUGAR"
            },
            "author": "Njera Perkins",
            "title": "Watch Jenna Ortega Do the \"Wednesday\" Dance Again in Her \"SNL\" Promo Skit",
            "description": "Jenna Ortega is gearing up for her \"Saturday Night Live\" hosting debut, which involves some \"Wednesday\" references, of course. In the lead-up to the actor's March 11 episode, the 20-year-old filmed a hilarious skit with the Please Don't Destroy sketch comedy …",
            "url": "https://www.popsugar.com/entertainment/jenna-ortega-saturday-night-live-skit-videos-49109909",
            "urlToImage": "https://media1.popsugar-assets.com/files/thumbor/iEXfRk3k7HbXq1RVOPZMVYCdEko/0x39:2993x1610/fit-in/1200x630/filters:format_auto-!!-:strip_icc-!!-/2023/03/09/749/n/1922283/1088e48e640a1049ed4173.14950127_.jpg",
            "publishedAt": "2023-03-09T18:45:03Z",
            "content": "Jenna Ortega is gearing up for her \"Saturday Night Live\" hosting debut, which involves some \"Wednesday\" references, of course. In the lead-up to the actor's March 11 episode, the 20-year-old filmed a… [+1355 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "looper.com",
            "title": "Everything Murdaugh Murders: A Southern Scandal Didn't Tell You About The True Story",
            "description": "Learn More Everything Murdaugh Murders: A Southern Scandal Didn't Tell You About The True Story The small community of Hampton, South Carolina was rocked by the 2021 murders of mother and son Maggie and Paul Murdaugh and the subsequent trial and conviction of…",
            "url": "https://biztoc.com/x/12f2a937f89adeeb",
            "urlToImage": "https://c.biztoc.com/p/12f2a937f89adeeb/og.webp",
            "publishedAt": "2023-03-09T18:42:05Z",
            "content": "Learn More Everything Murdaugh Murders: A Southern Scandal Didn't Tell You About The True Story The small community of Hampton, South Carolina was rocked by the 2021 murders of mother and son Maggie … [+325 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "UPROXX"
            },
            "author": "Megan Armstrong",
            "title": "Anitta Confirmed She’s Joining The Netflix Series ‘Elite’ And Already Looks Right At Home In A Photo With Carmen Arrufat",
            "description": "Getty Image / Dia Dipasupil\r\n\n\nAnitta also shared a photo with 'Elite' executive producer Rubén Goldfarb and thanked him for a warm welcome.",
            "url": "https://uproxx.com/pop/anitta-elite-netflix-carmen-arrufat-photo/",
            "urlToImage": "https://uproxx.com/wp-content/uploads/2022/08/anitta-GRID.jpg?w=700",
            "publishedAt": "2023-03-09T18:39:36Z",
            "content": "Anitta was reportedly spotted filming a music video with Chlöe in her native Brazil in January, and her acting stock just went up.\r\nThursday morning, March 9, Anitta and the official Instagram accoun… [+1571 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Decider"
            },
            "author": "mliss1578",
            "title": "‘Love Is Blind’ Season 4 Official Trailer, Release Date and What We Know",
            "description": "The pods are opening back up in a brand new city.",
            "url": "https://decider.com/2023/03/09/love-is-blind-season-4-official-trailer-release-date-and-what-we-know/",
            "urlToImage": "https://decider.com/wp-content/uploads/2023/03/love-is-blind-s4-chelsea.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-03-09T18:39:05Z",
            "content": "If it feels like Love Is Blind Season 3 just ended uh, that’s because it kinda did. But even though it’s only been a month since we got an update on the Dallas Pod Squad, you better believe we are re… [+3643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "pymnts.com",
            "title": "Paymob Teams With Arabic Streaming Platform Shahid",
            "description": "Paymob wants to help Egyptian consumers pay for streaming video via eWallets. The financial services company announced in a Thursday (March 9) press release that it has teamed with Arabic streaming platform Shahid to let the service’s customers in Egypt pay f…",
            "url": "https://biztoc.com/x/b54abd752bb79a00",
            "urlToImage": "https://c.biztoc.com/p/b54abd752bb79a00/og.webp",
            "publishedAt": "2023-03-09T18:38:38Z",
            "content": "Paymob wants to help Egyptian consumers pay for streaming video via eWallets.The financial services company announced in a Thursday (March 9) press release that it has teamed with Arabic streaming pl… [+295 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "polygon.com",
            "title": "Watching the Hunger Games movies the right way for the first time",
            "description": "The Hunger Games movies, based on the wildly successful young adult dystopian book series, dominated the box office in the 2010s. The three books (and four movies) shaped the landscape of YA literature for the next few years or so (for better or for worse), a…",
            "url": "https://biztoc.com/x/8f92eca3fccfdeea",
            "urlToImage": "https://c.biztoc.com/p/8f92eca3fccfdeea/og.webp",
            "publishedAt": "2023-03-09T18:38:31Z",
            "content": "The Hunger Games movies, based on the wildly successful young adult dystopian book series, dominated the box office in the 2010s. The three books (and four movies) shaped the landscape of YA literatu… [+297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "deadline.com",
            "title": "Disney Chief Bob Iger Says It Is “Very Tricky” To Assess Hulu’s Long-Term Value As Decision Point With Comcast Approaches",
            "description": "With the fate of Hulu’s ownership soon to be determined, Disney CEO Bob Iger says it is “very tricky” to pin down its long-term value given that streaming overall is still in a “nascent” stage. “We’re really studying the business very, very carefully, all tho…",
            "url": "https://biztoc.com/x/5d40469f17b06502",
            "urlToImage": "https://c.biztoc.com/p/5d40469f17b06502/og.webp",
            "publishedAt": "2023-03-09T18:38:10Z",
            "content": "With the fate of Hulus ownership soon to be determined, Disney CEO Bob Iger says it is very tricky to pin down its long-term value given that streaming overall is still in a nascent stage.Were really… [+288 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "IndieWire"
            },
            "author": "Samantha Bergeson",
            "title": "Sharon Stone Says ‘Basic Instinct’ Impacted Her Child Custody Agreement: ‘It Broke My Heart’",
            "description": "\"'Do you know your mother makes sex movies?'\" the family court judge allegedly asked Stone's son during a 2004 divorce agreement.",
            "url": "https://www.indiewire.com/2023/03/sharon-stone-basic-instinct-affected-child-custody-suit-1234817794/",
            "urlToImage": "https://www.indiewire.com/wp-content/uploads/2023/03/Sharon-Stone.jpg?w=780",
            "publishedAt": "2023-03-09T18:36:22Z",
            "content": "Sharon Stone is speaking out on how erotic thriller “Basic Instinct” impacted her son’s life.\r\nThe Oscar nominee alleged that starring in the 1992 film led to her losing out on a custody agreement wi… [+2889 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Atlanta Black Star"
            },
            "author": "Kiara Washington",
            "title": "'I Didn't Want to Sacrifice That Just for a Lay':  Mo'Nique Says She 'Grew Out' of Wanting an Open Marriage with Husband Sidney Hicks",
            "description": "'I Didn't Want to Sacrifice That Just for a Lay':  Mo'Nique Says She 'Grew Out' of Wanting an Open Marriage with Husband Sidney Hicks atlantablackstar.com",
            "url": "https://atlantablackstar.com/2023/03/09/i-didnt-want-to-sacrifice-that-just-for-a-lay-comedian-monique-says-she-grew-out-of-wanting-an-open-marriage-with-husband-sidney-hicks-once-he-warmed-up-to-the-idea/",
            "urlToImage": "https://atlantablackstar.com/wp-content/uploads/2023/03/Collage-Maker-09-Mar-2023-01-23-PM-4740.jpg",
            "publishedAt": "2023-03-09T18:35:09Z",
            "content": "Comedian MoNique didnt hold back as she discussed the reason for reevaluating the open marriage agreement she had with her husband and manager, Sidney Hicks.\r\nIn a lengthy interview with The Hollywoo… [+2298 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Decider"
            },
            "author": "mliss1578",
            "title": "Is ‘Scream VI’ Streaming on HBO Max or Netflix?",
            "description": "Ghostface is back!",
            "url": "https://decider.com/2023/03/09/is-scream-vi-streaming-on-hbo-max-or-netflix/",
            "urlToImage": "https://decider.com/wp-content/uploads/2023/03/scream.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-03-09T18:30:00Z",
            "content": "Ghostface is back! There was an 11-year gap between the fourth and fifth installments of the Scream films and it looks like the ultra-long waits for new chapters of the hit slasher movies have come t… [+1708 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Emily Mae Czachor",
            "title": "2023 Oscars: What to watch for at the Academy Awards",
            "description": "The Academy Awards will be presented this Sunday, March 12, in Los Angeles.",
            "url": "https://www.cbsnews.com/news/2023-oscars-how-to-watch-what-to-know-academy-awards/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/03/02/2f677d97-8954-49d0-99d1-af77f9aa3cfc/thumbnail/1200x630/fd83871439c570b29b8dc241f8a90d5d/ap23058560548764.jpg",
            "publishedAt": "2023-03-09T18:29:23Z",
            "content": "The 95th Academy Awards this Sunday bring distinguished stars and behind-the-scenes players from across the film industry to Los Angeles for Hollywood's biggest night of the year. \r\nHosted for a thir… [+14357 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Dade Hayes",
            "title": "Disney Chief Bob Iger Says It Is “Very Tricky” To Assess Hulu’s Long-Term Value As Decision Point With Comcast Approaches",
            "description": "With the fate of Hulu’s ownership soon to be determined, Disney CEO Bob Iger says it is “very tricky” to pin down its long-term value given that streaming overall is still in a “nascent” stage. “We’re really studying the business very, very carefully, all tho…",
            "url": "https://deadline.com/2023/03/disney-ceo-bob-iger-hulu-long-term-value-comcast-streaming-1235283768/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/11/Hulu-pool-table.jpg?w=1024",
            "publishedAt": "2023-03-09T18:28:30Z",
            "content": "With the fate of Hulu’s ownership soon to be determined, Disney CEO Bob Iger says it is “very tricky” to pin down its long-term value given that streaming overall is still in a “nascent” stage.\r\n“We’… [+1738 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "looper.com",
            "title": "The Shadow And Bone Line That Ben Barnes Fought To Include",
            "description": "Learn More The Shadow And Bone Line That Ben Barnes Fought To Include In an ideal world, it should be part of everyone's common sense that consent is essential in relationships. It is not an optional condition but a rule that should be applied to all physical…",
            "url": "https://biztoc.com/x/cca285bcbf34728f",
            "urlToImage": "https://c.biztoc.com/p/cca285bcbf34728f/og.webp",
            "publishedAt": "2023-03-09T18:28:06Z",
            "content": "Learn More The Shadow And Bone Line That Ben Barnes Fought To Include In an ideal world, it should be part of everyone's common sense that consent is essential in relationships. It is not an optional… [+309 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "looper.com",
            "title": "Netflix's MH370: Fans Just Aren't Buying The Conspiracy Theories",
            "description": "Learn More While some of the most popular films and TV shows in Netflix's documentary catalog fall within the true crime genre, the streaming service is home to a wide range of documentaries on a variety of subjects. For example, soon after its release, a nat…",
            "url": "https://biztoc.com/x/fa28c28988f165da",
            "urlToImage": "https://c.biztoc.com/p/fa28c28988f165da/og.webp",
            "publishedAt": "2023-03-09T18:28:05Z",
            "content": "Learn MoreWhile some of the most popular films and TV shows in Netflix's documentary catalog fall within the true crime genre, the streaming service is home to a wide range of documentaries on a vari… [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "Larisha Paul",
            "title": "Anitta Will Head to Las Encinas for ‘Élite’ Season 7",
            "description": "The popular Netflix series released its fifth and sixth seasons seven months apart in 2022",
            "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/netflix-anitta-joining-elite-season-7-1234693594/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/03/anitta.jpg?crop=0px%2C35px%2C1800px%2C1014px&resize=1600%2C900",
            "publishedAt": "2023-03-09T18:27:12Z",
            "content": "Netflix’s popular dramaÉlite will soon return for its seventh season, and the series is getting a shakeup from Brazilian pop star Anitta. “A girl from Rio that you might already know… is about to mak… [+1434 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Just Jared"
            },
            "author": "Just Jared",
            "title": "'Queer Eye' Fan Favorite Tom Jackson Has Sadly Died",
            "description": "Tom Leon Jackson has sadly passed away. The Queer Eye fan favorite, who appeared on Season 1 of the hit Netflix series, died at the age of 63 on March 3 after losing his battle with metastatic adenocarcinoma, a local obituary confirmed. “It’s with a heavy hea…",
            "url": "http://www.justjared.com/2023/03/09/queer-eye-fan-favorite-tom-jackson-has-sadly-died/",
            "urlToImage": "https://cdn.justjared.com/wp-content/uploads/headlines/2023/03/tom-jackson-dead-social.jpg",
            "publishedAt": "2023-03-09T18:24:37Z",
            "content": "Tom Leon Jackson has sadly passed away.\r\nThe Queer Eyefan favorite, who appeared on Season 1 of the hit Netflix series, died at the age of 63 on March 3 after losing his battle with metastatic adenoc… [+864 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "First Showing"
            },
            "author": "Alex Billington",
            "title": "Gabriel Basso in White House Mystery Series 'The Night Agent' Trailer",
            "description": "\"The more you know, the more dangerous this becomes.\" Netflix has unveiled the full-length official trailer for the mystery thriller series The Night Agent, available for streaming later in March, based on the book of the same name by Matthew Quirk. A low-lev…",
            "url": "https://www.firstshowing.net/2023/gabriel-basso-in-white-house-mystery-series-the-night-agent-trailer/",
            "urlToImage": "https://media2.firstshowing.net/firstshowing/img15/TheNightAgentSeriesPostermainTW2.jpg",
            "publishedAt": "2023-03-09T18:24:13Z",
            "content": "by Alex BillingtonMarch 9, 2023Source:YouTube\r\n\"The more you know, the more dangerous this becomes.\" Netflix has unveiled the full-length official trailer for the mystery thriller series The Night Ag… [+2092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Independent.ie"
            },
            "author": "By Ellie Iorizzo and Martina Bet, PA Reporters",
            "title": "Ex-director of BBC Singers on proposed cuts: They are chasing ratings",
            "description": "The former director of the BBC Singers has criticised the corporation&rsquo;s proposed cuts to classical music performing groups, claiming the broadcaster wants to &ldquo;chase on the coat tails of Netflix or Amazon&rdquo;.",
            "url": "https://www.independent.ie/entertainment/music/ex-director-of-bbc-singers-on-proposed-cuts-they-are-chasing-ratings-42378537.html",
            "urlToImage": "https://www.independent.ie/entertainment/music/d5257/42378532.ece/AUTOCROP/w1240h700/ipanews_a3fdd237-602c-4978-9ebc-15e330cdbb1f_1",
            "publishedAt": "2023-03-09T18:23:01Z",
            "content": "The former director of the BBC Singers has criticised the corporations proposed cuts to classical music performing groups, claiming the broadcaster wants to chase on the coat tails of Netflix or Amaz… [+6592 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Ellie Iorizzo",
            "title": "Ex-director of BBC Singers on proposed cuts: They are chasing ratings",
            "description": "The broadcaster said the plans form part of a new strategy for classical music which ‘prioritises quality, agility and impact’.",
            "url": "https://www.independent.co.uk/news/uk/orchestras-tim-davie-english-netflix-tony-hall-b2297634.html",
            "urlToImage": "https://static.independent.co.uk/2023/03/09/18/f80281ad519b8d69978ea4df49662a32Y29udGVudHNlYXJjaGFwaSwxNjc4NDcxMjcy-2.55471047.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-03-09T18:23:01Z",
            "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nThe former director of the BBC Singers has criticise… [+5721 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Petrana Radulovic",
            "title": "A reminder of what the Hunger Games movie phenomenon was all about",
            "description": "The Hunger Games, Catching Fire, Mockingjay are all on Netflix.This is the order of the popular young adult dystopian trilogy starring Jennifer Lawrence as Katniss Everdeen and Josh Hutcherson as Peeta Mellark.",
            "url": "https://www.polygon.com/23630908/hunger-games-order-watch-movies",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/hEMhW_d9JjC3H_tPEWQEtaIaS2A=/0x0:1600x838/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16348784/District8_Battle2.jpg",
            "publishedAt": "2023-03-09T18:22:42Z",
            "content": "The Hunger Games movies, based on the wildly successful young adult dystopian book series, dominated the box office in the 2010s. The three books (and four movies) shaped the landscape of YA literatu… [+4435 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Footwear News"
            },
            "author": "Ashley Rushford",
            "title": "Sabrina Elba Radiates in Silky Yellow Dress & Sparkling Sandals at ‘Luther: The Fallen Sun’ Premiere With Idris Elba",
            "description": "The couple made a vibrant appearance on the red carpet at the New York City premiere of 'Luther: The Fallen Sun.'",
            "url": "https://footwearnews.com/2023/fashion/celebrity-style/sabrina-elba-idris-elba-luther-premiere-nyc-red-carpet-1203427207/",
            "urlToImage": "https://footwearnews.com/wp-content/uploads/2023/03/idrissabrinaelba.jpg",
            "publishedAt": "2023-03-09T18:21:27Z",
            "content": "Idris Elba and his wife Sabrina Elba attended the premiere of “Luther: The Fallen Sun” held at The Paris Theater in New York City last night. The superstar duo made a case for the spring season as th… [+2493 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Matadornetwork.com"
            },
            "author": "Matador Creators",
            "title": "The 10 Best Airbnbs Near Universal Studios Hollywood",
            "description": "These Airbnbs put you within walking distance or a close drive to Universal Studios Hollywood for families, friends, and groups.",
            "url": "https://matadornetwork.com/read/universal-studios-hollywood-airbnb/",
            "urlToImage": "https://cdn1.matadornetwork.com/blogs/1/2023/03/social-universal-hollywood.jpeg",
            "publishedAt": "2023-03-09T18:17:04Z",
            "content": "The area around Universal Studios Hollywood is a bustling neighborhood that offers plenty of entertainment options for families. The neighborhood is known as Universal City and has a variety of hotel… [+11803 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Dlisted.com"
            },
            "author": "Ben",
            "title": "Mo’Nique Is STILL Waiting For Apologies From Tyler Perry And Oprah Winfrey",
            "description": "Now that Mo’Nique has disembarked from her cruise aboard the SS Blackballed she is finally in the spotlight again and laughing all the way to the bank. And it comes after years of contention between her, Oprah Winfrey, Tyler Perry, and Lee Daniels. Mo’ and Le…",
            "url": "https://dlisted.com/2023/03/09/monique-is-still-waiting-for-apologies-from-tyler-perry-and-oprah-winfrey/",
            "urlToImage": "https://dlisted.com/wp-content/uploads/2023/03/moniquetyleroprah.jpg",
            "publishedAt": "2023-03-09T18:15:40Z",
            "content": "Now that Mo’Nique has disembarked from her cruise aboard the SS Blackballed she is finally in the spotlight again and laughing all the way to the bank. And it comes after years of contention between … [+3257 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Will Smith Oscars slap: Chris Rock paints Jada Pinkett Smith as real villain - Fox News",
            "description": "Will Smith Oscars slap: Chris Rock paints Jada Pinkett Smith as real villainFox News Will Smith 'embarrassed, hurt' over Chris Rock's comments in Netflix special: reportNew York Post Chris Rock And The Complicated, Evolving Politics Of ‘Funny’HuffPost Jeff Si…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170507437",
            "urlToImage": null,
            "publishedAt": "2023-03-09T18:13:28Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Omg.blog"
            },
            "author": "omg team",
            "title": "OMG, they’re naked: The cast of ‘Sex/Life’ Season 2",
            "description": "The skin-full Netflix series Sex/Life is back, and everyone is wondering if Adam Demos will bring out his big, foot-long, prosthetic peen again for a...\nThe post OMG, they’re naked: The cast of ‘Sex/Life’ Season 2 appeared first on OMG.BLOG.",
            "url": "https://omg.blog/omg-theyre-naked-the-cast-of-sex-life-season-2/",
            "urlToImage": "https://omg.blog/wp-content/uploads/2023/03/sex-life-season-02-locker-room-hero.jpg",
            "publishedAt": "2023-03-09T18:13:19Z",
            "content": "The skin-full Netflix series Sex/Life is back, and everyone is wondering if Adam Demos will bring out his big, foot-long, prosthetic peen again for a second shower.\nBut even without it, season two of… [+1609 chars]"
        },
        {
            "source": {
                "id": "techradar",
                "name": "TechRadar"
            },
            "author": "Kevin Lynch",
            "title": "Microsoft Edge can now boost the quality of your YouTube videos – here's how to use it",
            "description": "Browser’s new super resolution feature uses machine learning to enhance footage without using extra bandwidth",
            "url": "https://www.techradar.com/news/microsoft-edge-can-now-boost-the-quality-of-your-youtube-videos-heres-how-to-use-it",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/BgbEpuTJXf3nNKSCGqdcTZ-1200-80.jpg",
            "publishedAt": "2023-03-09T18:08:56Z",
            "content": "Microsoft is starting to roll out its much anticipated built-in video upscaling feature for its Edge browser.  \r\nThe company’s new Video Super Resolution (VSR) algorithm uses artificial intelligence … [+1682 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Isabel Baldwin",
            "title": "Colin Kaepernick trains 'five, six days a week' as he holds out hope of an NFL return",
            "description": "Kaepernick, 35, has not played in the NFL since the 2016 season, when he ignited a nationwide free speech debate by protesting racist police brutality by kneeling during the national anthem.",
            "url": "https://www.dailymail.co.uk/sport/nfl/article-11841117/Colin-Kaepernick-trains-five-six-days-week-holds-hope-NFL-return.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/03/09/18/68521323-0-image-a-14_1678385262667.jpg",
            "publishedAt": "2023-03-09T18:08:31Z",
            "content": "Former NFL quarterback Colin Kaepernick revealed he is still holding out hope of one day returning to the turf. \r\nKaepernick, 35, has not played in the NFL since the 2016 season, when he ignited a na… [+7578 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PRNewswire"
            },
            "author": null,
            "title": "New report shows tobacco imagery continues to influence youth vaping initiation through on-screen entertainment most popular among 15- to 24-year-olds",
            "description": "Truth Initiative's annual \"While You Were Streaming\" study illustrates impact of troubling trend on youth e-cigarette public health crisis WASHINGTON, March 9, 2023 /PRNewswire/ -- With streaming entertainment options growing in popularity and nearly every Be…",
            "url": "https://www.prnewswire.com/news-releases/new-report-shows-tobacco-imagery-continues-to-influence-youth-vaping-initiation-through-on-screen-entertainment-most-popular-among-15--to-24-year-olds-301768286.html",
            "urlToImage": "https://i1.ytimg.com/vi/IHQFCh0mPHE/hqdefault.jpg",
            "publishedAt": "2023-03-09T18:07:00Z",
            "content": "Truth Initiative's annual \"While You Were Streaming\" study illustrates impact of troubling trend on youth e-cigarette public health crisis\r\nWASHINGTON, March 9, 2023 /PRNewswire/ -- With streaming en… [+11563 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "What's on Netflix"
            },
            "author": "Kasey Moore",
            "title": "‘Akuma-kun’ Anime Series Headed to Netflix in Fall 2023",
            "description": "The new anime series is based on a manga series from the 1960s.",
            "url": "https://www.whats-on-netflix.com/news/akuma-kun-anime-series-headed-to-netflix-in-fall-2023/",
            "urlToImage": "https://www.whats-on-netflix.com/wp-content/uploads/2023/03/Akuma-kun-se-anime-coming-to-netflix-fall-2023.jpg",
            "publishedAt": "2023-03-09T18:04:15Z",
            "content": "Picture: Encourage Films – Toei Animation\r\nNetflix will carry the brand new anime series based on the Akuma-kun globally starting in Fall 2023. \r\nThe new series is based on the manga that debuted in … [+1922 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "City A.M."
            },
            "author": "Adam Bloodworth",
            "title": "The £150 James Bond cocktail only available at Harrods",
            "description": "James Bond fans don’t make as much noise as other fandoms. They’re barely heard against the racket of Star Wars and Marvel obsessives, who dress up and quote each other. Perhaps that’s because Bond fans are chasing more sophisticated pleasures. One such pleas…",
            "url": "https://www.cityam.com/the-150-james-bond-cocktail-only-available-at-harrods/",
            "urlToImage": "https://www.cityam.com/wp-content/uploads/2023/03/Baccharat-bar.jpg",
            "publishedAt": "2023-03-09T18:04:12Z",
            "content": "Thursday 09 March 2023 6:04 pm\r\nYou. (L to R) Penn Badgley as Joe Goldberg, Charlotte Ritchie as Kate in episode 407 of You. Cr. Courtesy of Netflix © 2023\r\nJames Bond fans dont make as much noise as… [+2556 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "JoBlo.com"
            },
            "author": "Steve Seigh",
            "title": "The Night Agent trailer: Gabriel Basso uncovers a conspiracy that threatens the nation in Netflix’s thrilling new series",
            "description": "Netflix's The Night Agent trailer presents a thrilling look at the new series based on the novel by Matthew Quick about an F.B.I. conspiracy.\nThe post The Night Agent trailer: Gabriel Basso uncovers a conspiracy that threatens the nation in Netflix’s thrillin…",
            "url": "https://www.joblo.com/the-night-agent-trailer/",
            "urlToImage": "https://www.joblo.com/wp-content/uploads/2023/03/the_night_agent_trailer.jpg",
            "publishedAt": "2023-03-09T18:02:19Z",
            "content": "Netflix’s The Night Agent trailer presents a thrilling look at the new series based on the novel by Matthew Quick about an F.B.I. conspiracy.\r\nSony Pictures Television Studios is hitting the ground r… [+3139 chars]"
        }
    ];

const newsD= [
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Your iPhone Needs Custom Battery Alerts",
            "description": "A smartphone is only as good as its battery, and since the release of the first iPhone, Apple has done its part to make sure you’ll remember to charge it, hitting you with a pop-up alert when your charge drops below 20%. While that system is effective, the wa…",
            "url": "https://lifehacker.com/your-iphone-needs-custom-battery-alerts-1849076371",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/92cd07f6d3f90694062c4006faebed27.jpg",
            "publishedAt": "2022-06-17T15:30:00Z",
            "content": "A smartphone is only as good as its battery, and since the release of the first iPhone, Apple has done its part to make sure youll remember to charge it, hitting you with a pop-up alert when your cha… [+3276 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "The ‘New’ iPhone Actually Isn’t New",
            "description": "You might have the impression that the tech world in general is at a bit of a standstill. Companies push new products every year, but tout iterative features rather than revolutionary changes. Today, for example, Apple is pushing a brand-new iPhone, just six …",
            "url": "https://lifehacker.com/the-new-iphone-actually-isn-t-new-1850196882",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e2cf98043bebce3f190fbffda0c8b2f7.jpg",
            "publishedAt": "2023-03-07T18:00:00Z",
            "content": "You might have the impression that the tech world in general is at a bit of a standstill. Companies push new products every year, but tout iterative features rather than revolutionary changes. Today,… [+2064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Why You Should Replace Your Old iPhone’s Battery Right Now",
            "description": "These days, smartphones are so good you can hold onto them for years without upgrading. While companies like Apple try to make their newest gadgets look much better than your old model, a fresh battery is often all you need to give your old iPhone new life. I…",
            "url": "https://lifehacker.com/why-you-should-replace-your-old-iphone-s-battery-right-1849944388",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7544e576703d70bda59b060b0f65edb2.jpg",
            "publishedAt": "2023-01-03T17:30:00Z",
            "content": "These days, smartphones are so good you can hold onto them for years without upgrading. While companies like Apple try to make their newest gadgets look much better than your old model, a fresh batte… [+3249 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "You're Wrong About Your iPhone's Always-On Wallpaper Draining Its Battery",
            "description": "The new Always-On Displays on the iPhone 14 Pro and iPhone 14 Pro Max provide a nifty way to keep tabs on your smartphone without needing to interact with it. However, Apple’s original design choice was odd: By default, the 14 Pros dim your wallpaper in addit…",
            "url": "https://lifehacker.com/youre-wrong-about-your-iphones-always-on-wallpaper-drai-1849958965",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/406c1418ea546b2ab1b9ca3608885dcf.jpg",
            "publishedAt": "2023-01-06T22:30:00Z",
            "content": "The new Always-On Displays on the iPhone 14 Pro and iPhone 14 Pro Max provide a nifty way to keep tabs on your smartphone without needing to interact with it. However, Apples original design choice w… [+3131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "How to Get the New iPhone Emojis Early",
            "description": "Who doesn’t love new emojis? With Apple’s upcoming iOS 16.4, there are 21 new emojis to try out, including a new smiley, a pink heart, and a jellyfish. But you don’t need to wait until Apple releases iOS 16.4 to the public—you can try them out right now.Read …",
            "url": "https://lifehacker.com/how-to-get-the-new-iphone-emojis-early-1850128259",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6b7197283347323d09925b4dc0b3cabb.png",
            "publishedAt": "2023-02-17T21:00:00Z",
            "content": "Who doesnt love new emojis? With Apples upcoming iOS 16.4, there are 21 new emojis to try out, including a new smiley, a pink heart, and a jellyfish. But you dont need to wait until Apple releases iO… [+2474 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "The Best Authenticator Apps for iPhone and Android",
            "description": "Two-factor authentication (2FA) is essential for securing your accounts these days. It isn’t enough to have a password anymore. Between password leaks, and weak and reused passwords, it’s too easy for hackers to figure out your secrets and break into your acc…",
            "url": "https://lifehacker.com/the-best-authenticator-apps-for-iphone-and-android-1850140802",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4a197ec6dd6f16873227408161c3b9c0.jpg",
            "publishedAt": "2023-02-21T22:30:00Z",
            "content": "Two-factor authentication (2FA) is essential for securing your accounts these days. It isnt enough to have a password anymore. Between password leaks, and weak and reused passwords, its too easy for … [+6092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Why Resetting Your iPhone Could Dial 911 (and How to Avoid It)",
            "description": "Smartphones are just tiny computers, and every now and then, all computers will decide to stop working. Your device will freeze up and become unresponsive, instantly turning into a $1,000+ paperweight. It’s times like these when a forced reset comes in handy—…",
            "url": "https://lifehacker.com/why-resetting-your-iphone-could-dial-911-and-how-to-av-1848649461",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6e70dd545822d288cabb114ea1c8bb17.jpg",
            "publishedAt": "2022-03-14T18:00:00Z",
            "content": "Smartphones are just tiny computers, and every now and then, all computers will decide to stop working. Your device will freeze up and become unresponsive, instantly turning into a $1,000+ paperweigh… [+2961 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Who Knew You Could Turn Off a Family Member's iPhone Alarm?",
            "description": "If you live with other people, you’re bound to deal with an unwelcome iPhone alarm. Maybe they’re sleeping soundly through the screeches or left their device behind and forgot to turn off the alarm. Either way, the alarm’s going off in another room, and it’s …",
            "url": "https://lifehacker.com/who-knew-you-could-turn-off-a-family-members-iphone-ala-1848943873",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f91f59947d41e6409c9dbd50ba593e71.jpg",
            "publishedAt": "2022-05-19T12:30:00Z",
            "content": "If you live with other people, youre bound to deal with an unwelcome iPhone alarm. Maybe theyre sleeping soundly through the screeches or left their device behind and forgot to turn off the alarm. Ei… [+1812 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "This Link-Sharing App Is Better Than AirDrop",
            "description": "AirDrop is one of the most convincing reasons to go all-in on the Apple ecosystem. When it works, it’s a seamless way to send links and files between your iPhone and your Mac. However, while it’s usually fast, it’s also pretty flaky, and sometimes refuses to …",
            "url": "https://lifehacker.com/this-link-sharing-app-is-better-than-airdrop-1850116921",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6722c772d1b23017946f0f766f1bc8ed.jpg",
            "publishedAt": "2023-02-15T16:00:00Z",
            "content": "AirDrop is one of the most convincing reasons to go all-in on the Apple ecosystem. When it works, its a seamless way to send links and files between your iPhone and your Mac. However, while its usual… [+2170 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "The Easiest Ways to Sync iMessages Across All Your Devices",
            "description": "I recently picked up a new iPhone, and for the most part, I love it. What I didn’t love was not having my iMessages on my new iPhone synced up with my other Apple devices. Sure, my new phone had my most recent messages, but from there, things got weird. For e…",
            "url": "https://lifehacker.com/the-easiest-ways-to-sync-imessages-across-all-your-devi-1850002677",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/34be078e9c1af8f1a3cf54b3001ac49d.jpg",
            "publishedAt": "2023-01-19T14:00:00Z",
            "content": "I recently picked up a new iPhone, and for the most part, I love it. What I didnt love was not having my iMessages on my new iPhone synced up with my other Apple devices. Sure, my new phone had my mo… [+3582 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "All the New Features Your Older Apple Products Won’t Be Getting",
            "description": "As far as software support goes, it’s tough to beat Apple. The company continues to update older devices years after their initial release, to the point where it stings when your six-year-old iPhone 7 isn’t eligible for iOS 16. The company might be generous w…",
            "url": "https://lifehacker.com/all-the-new-features-your-older-apple-products-won-t-be-1849040851",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2c24c20436d8f8fd27833942e36a9dc8.jpg",
            "publishedAt": "2022-06-09T21:30:00Z",
            "content": "As far as software support goes, its tough to beat Apple. The company continues to update older devices years after their initial release, to the point where it stings when your six-year-old iPhone 7… [+6666 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "You Can Add a Face ID Lock to Any iPhone App",
            "description": "Face ID is great for locking and unlocking your iPhone, but it’s even better for authenticating apps that contain sensitive data. While many apps now support Face ID log in, there are still plenty that don’t—but there’s a hack that can lock any app behind Fac…",
            "url": "https://lifehacker.com/you-can-add-a-face-id-lock-to-any-iphone-app-1850098069",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f490253f7e666ff2d47696370984a8af.jpg",
            "publishedAt": "2023-02-10T16:00:00Z",
            "content": "Face ID is great for locking and unlocking your iPhone, but its even better for authenticating apps that contain sensitive data. While many apps now support Face ID log in, there are still plenty tha… [+2264 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Why the iPhone 14's eSIM Might Be a Problem for You",
            "description": "Apple has a habit of aggressively removing features in the name of progress. They killed the DVD drive from the Mac while discs were still popular, removed HDMI and MagSafe from MacBook Pros (before subsequently bringing them back), and, of course, are respon…",
            "url": "https://lifehacker.com/why-the-iphone-14s-esim-might-be-a-problem-for-you-1849512200",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f871a0c45a1708bf23e92b9dee259c56.jpg",
            "publishedAt": "2022-09-08T19:00:00Z",
            "content": "Apple has a habit of aggressively removing features in the name of progress. They killed the DVD drive from the Mac while discs were still popular, removed HDMI and MagSafe from MacBook Pros (before … [+3583 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "You Can Finally Fix Your Own Apple Devices (With Apple’s Help)",
            "description": "If your iPhone’s display breaks, or the battery goes bust, your first instinct might be to make an appointment at Apple’s Genius Bar. For the longest time, that’s exactly the way Apple wanted it. Times have changed, however: People want to repair their own de…",
            "url": "https://lifehacker.com/you-can-finally-fix-your-own-apple-devices-with-apple-1848847963",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fd5a27f5802905d72abd95fa0a9b8283.jpg",
            "publishedAt": "2022-04-27T17:00:00Z",
            "content": "If your iPhones display breaks, or the battery goes bust, your first instinct might be to make an appointment at Apples Genius Bar. For the longest time, thats exactly the way Apple wanted it. Times … [+5219 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Brendan Hesse",
            "title": "This New iPhone 14 Feature Might Save Your Life in an Emergency",
            "description": "One of the upcoming iPhone 14’s new capabilities is satellite connectivity, a feature that may just save your life. Apple showed off the new phone earlier this week during its live streamed “Far Out” event, and explained how the new feature can help you commu…",
            "url": "https://lifehacker.com/this-new-iphone-14-feature-might-save-your-life-in-an-e-1849514060",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1789066e25198118f1848a0d808a8c09.jpg",
            "publishedAt": "2022-09-08T21:30:00Z",
            "content": "One of the upcoming iPhone 14s new capabilities is satellite connectivity, a feature that may just save your life. Apple showed off the new phone earlier this week during its live streamed Far Out ev… [+2274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "You Should Memorize These Ways to Reset Your Cell Service",
            "description": "You might be scrolling through Twitter or TikTok, and your iPhone suddenly stops receiving new data. Getting disconnected from the network happens sometimes, so you should memorize a few fixes in advance to get back online faster.Read more...",
            "url": "https://lifehacker.com/you-should-memorize-these-ways-to-reset-your-cell-servi-1849472226",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/35d71a1cbbd0cca137b6f81b7033e82e.jpg",
            "publishedAt": "2022-08-30T14:30:00Z",
            "content": "You might be scrolling through Twitter or TikTok, and your iPhone suddenly stops receiving new data. Getting disconnected from the network happens sometimes, so you should memorize a few fixes in adv… [+2090 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "You Can Finally Sync Your Android to Your Windows PC",
            "description": "An iPhone works seamlessly with Macs—photos from one show up on the other, as so do calls and messages. But what if you’re on the other side of the fence and use Windows and Android instead? Read more...",
            "url": "https://lifehacker.com/you-can-finally-sync-your-android-to-your-windows-pc-1848805207",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2971c48328bbb281ade82913eadd1d54.jpg",
            "publishedAt": "2022-04-26T19:30:00Z",
            "content": "An iPhone works seamlessly with Macsphotos from one show up on the other, as so do calls and messages. But what if youre on the other side of the fence and use Windows and Android instead? \r\nOver the… [+2325 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "A 'Force Restart' Is (Probably) All You Need to Fix an Unresponsive Phone",
            "description": "Whether you have an iPhone or an Android, your smartphone is basically a tiny computer that can fit in your pocket. And, like all computers, your phone is susceptible to software bugs and glitches. It won’t happen all the time, but every once in a while, you …",
            "url": "https://lifehacker.com/a-force-restart-is-probably-all-you-need-to-fix-an-un-1850078519",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dab49118613e484afe958637c6baf65a.jpg",
            "publishedAt": "2023-02-06T19:00:00Z",
            "content": "Whether you have an iPhone or an Android, your smartphone is basically a tiny computer that can fit in your pocket. And, like all computers, your phone is susceptible to software bugs and glitches. I… [+2279 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "The Best Ways to Declutter Your iPhone's Home Screen(s)",
            "description": "I like my digital devices neat and organized. I keep a clean Mac desktop, and my iPad Home screen is immaculate. But iPhones are a bit different: We usually want your most-used apps to be front and center, but over time, the apps inevitably start to pile up, …",
            "url": "https://lifehacker.com/the-best-ways-to-declutter-your-iphones-home-screen-s-1849319576",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/aa9d5b4ab50ac05bddb64df7e6f45dfa.jpg",
            "publishedAt": "2022-07-25T12:00:00Z",
            "content": "I like my digital devices neat and organized. I keep a clean Mac desktop, and my iPad Home screen is immaculate. But iPhones are a bit different: We usually want your most-used apps to be front and c… [+6729 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "How to Unhide Your Wifi Password",
            "description": "Your cellular connection is constant, but your wifi connection is anything but. You probably have multiple locations where your phone automatically connects to the local network: your home, your office, the coffee shop you frequent, your friend’s place, or ev…",
            "url": "https://lifehacker.com/how-to-unhide-your-wifi-password-1849151134",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2d6e66ffad177d0d5d9298759bcc7585.jpg",
            "publishedAt": "2022-07-12T15:30:00Z",
            "content": "Your cellular connection is constant, but your wifi connection is anything but. You probably have multiple locations where your phone automatically connects to the local network: your home, your offi… [+2026 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Joel Cunningham",
            "title": "This iPhone App Might Actually Help You Break Your Social Media Addiction",
            "description": "I am just full of advice about social media, most of which can be boiled down to “put down your phone” and “stop engaging.” Which is funny, because I am incredibly bad at doing either of those things, despite my best efforts (downloading a little app that gro…",
            "url": "https://lifehacker.com/this-iphone-app-might-actually-help-you-break-your-soci-1849385952",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/64777b500bed5eac2c1b148cad96c247.jpg",
            "publishedAt": "2022-08-08T19:30:00Z",
            "content": "I am just full of advice about social media, most of which can be boiled down to put down your phone and stop engaging. Which is funny, because I am incredibly bad at doing either of those things, de… [+2113 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "How to Create a PDF From Any Website, on Any Device",
            "description": "When you need to send a web page (or any document) as a PDF, you have a lot of options that don’t involve using Adobe’s paid Acrobat app. Most methods are integrated right into your device’s operating system, and only a couple of clicks or taps away. Whether …",
            "url": "https://lifehacker.com/how-to-create-a-pdf-from-any-website-on-any-device-1849087231",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fda8131b8121426013bcf772ea30951f.jpg",
            "publishedAt": "2022-06-21T18:00:00Z",
            "content": "When you need to send a web page (or any document) as a PDF, you have a lot of options that dont involve using Adobes paid Acrobat app. Most methods are integrated right into your devices operating s… [+2033 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "How to Spy on Your Own Phone (and Why You Might Want to)",
            "description": "Do you have a sneaking suspicion your partner is spying on your phone? It’s a big accusation, and confronting them without evidence is walking a risky path. If you find yourself in a situation where you think your partner (or someone else in the house) is loo…",
            "url": "https://lifehacker.com/how-to-spy-on-your-own-phone-and-why-you-might-want-to-1849795721",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a503c383b7f5e6c6279d59d9b262c8e7.jpg",
            "publishedAt": "2022-11-17T18:00:00Z",
            "content": "Do you have a sneaking suspicion your partner is spying on your phone? Its a big accusation, and confronting them without evidence is walking a risky path. If you find yourself in a situation where y… [+2402 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "This Browser Can Use Chrome and Firefox Extensions at the Same Time",
            "description": "If you have a Mac, iPhone, or iPad and you’re looking for something new from your web browser, you should check out Orion. The new browser lets you run both Google Chrome extensions and Firefox add-ons, while claiming not to sacrifice your privacy. Orion is b…",
            "url": "https://lifehacker.com/this-browser-can-use-chrome-and-firefox-extensions-at-t-1849038809",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5eae27bf7514bb92d41564c80cd36f82.jpg",
            "publishedAt": "2022-06-09T16:30:00Z",
            "content": "If you have a Mac, iPhone, or iPad and youre looking for something new from your web browser, you should check out Orion. The new browser lets you run both Google Chrome extensions and Firefox add-on… [+3567 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "You Can Use Apple AirPlay to Stream From a Windows PC Too",
            "description": "AirPlay allows you to stream music from an Apple device to your HomePod, or mirror video content from your iPhone, iPad, or Mac to a bigger screen. As long as all devices are connected to the same wifi network, AirPlay works really well within the Apple ecosy…",
            "url": "https://lifehacker.com/you-can-use-apple-airplay-to-stream-from-a-windows-pc-t-1849978309",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c7cde8c5c114d305845459dcdca0e5ea.jpg",
            "publishedAt": "2023-01-12T17:30:00Z",
            "content": "AirPlay allows you to stream music from an Apple device to your HomePod, or mirror video content from your iPhone, iPad, or Mac to a bigger screen. As long as all devices are connected to the same wi… [+3284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Why You Should Turn Off Auto-Brightness on Your Phone",
            "description": "Apple advertises its newest iPhone as having the brightest screen yet, but when you use it, you probably can’t help but to think, “Shouldn’t this be brighter?” You might even compare it to other screens that look much brighter than yours. It’s not you: It’s a…",
            "url": "https://lifehacker.com/why-you-should-turn-off-auto-brightness-on-your-phone-1850145521",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c79397378a9bfa0f51036a7bf2c9afa0.jpg",
            "publishedAt": "2023-02-22T21:00:00Z",
            "content": "Apple advertises its newest iPhone as having the brightest screen yet, but when you use it, you probably cant help but to think, Shouldnt this be brighter? You might even compare it to other screens … [+3709 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "The Fastest Ways to Convert Your iPhone HEIC Photos to JPG (So You Can Actually Use Them)",
            "description": "HEIC is a solid format for Apple devices. It includes Live Photos, Apple’s post-processing, and it still manages to weigh way below what a JPG would. While it works fine if you’re sharing a photo among other Apple devices, you run into a problem when you need…",
            "url": "https://lifehacker.com/the-fastest-ways-to-convert-your-iphone-heic-photos-to-1848768694",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/721db943decd9d7c6a3eb1c569106ae7.jpg",
            "publishedAt": "2022-04-13T15:00:00Z",
            "content": "HEIC is a solid format for Apple devices. It includes Live Photos, Apples post-processing, and it still manages to weigh way below what a JPG would. While it works fine if youre sharing a photo among… [+2667 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "How to Help Convince Tech Companies to Make a Smaller Smartphone",
            "description": "A long time ago, smartphones were small. Like, really small. It used to be a given that such a device should fit snugly in the hand, so you could do everything you need to with it using only your thumb. They certainly don’t make ‘em like they used to.In 2022,…",
            "url": "https://lifehacker.com/how-to-help-convince-tech-companies-to-make-a-smaller-s-1848954626",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9f6dab72e87451c4668b5563926bf7ec.jpg",
            "publishedAt": "2022-05-20T19:30:00Z",
            "content": "A long time ago, smartphones were small. Like, really small. It used to be a given that such a device should fit snugly in the hand, so you could do everything you need to with it using only your thu… [+5130 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Stephen Johnson",
            "title": "The Out-of-Touch Adults' Guide to Kid Culture: Did You Have an 'Almond Mom'?",
            "description": "I’m sure you’ve heard someone say, “The internet is forever,” but it’s not true. Once-vibrant internet communities with hundreds of thousands of users can disappear forever at the moment some corporation deigns to unplug a server, and people delete their own …",
            "url": "https://lifehacker.com/what-is-an-almond-mom-1849717195",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1c1448313c4e0f1be7eba443293ce67f.jpg",
            "publishedAt": "2022-10-28T21:01:49Z",
            "content": "Im sure youve heard someone say, The internet is forever, but its not true. Once-vibrant internet communities with hundreds of thousands of users can disappear forever at the moment some corporation … [+5106 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "The Best New Reminders Features in iOS 16",
            "description": "While Apple Notes has become the default note-taking app for most iPhone users, the Reminders app is often overlooked. But over the last few years, Reminders has built a strong foundation with grouping, natural language input, and smart lists. With iOS 16, Ap…",
            "url": "https://lifehacker.com/the-best-new-reminders-features-in-ios-16-1849193410",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a9c239666e45d409d1196e33ecf29830.jpg",
            "publishedAt": "2022-07-19T13:30:00Z",
            "content": "While Apple Notes has become the default note-taking app for most iPhone users, the Reminders app is often overlooked. But over the last few years, Reminders has built a strong foundation with groupi… [+2312 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "How to Install Unsupported Apps on Older iPhones",
            "description": "As much as Apple will want you to buy the iPhone 14, your old phone is probably serving you just fine, even if the company doesn’t officially support it anymore. But the bigger problem with aging tech isn’t necessarily the lack of official software support, i…",
            "url": "https://lifehacker.com/how-to-install-unsupported-apps-on-older-iphones-1849485024",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6b00d6118ad983898709847f6494e939.jpg",
            "publishedAt": "2022-09-01T18:00:00Z",
            "content": "As much as Apple will want you to buy the iPhone 14, your old phone is probably serving you just fine, even if the company doesnt officially support it anymore. But the bigger problem with aging tech… [+2421 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "7 Apple Watch Accessibility Features That Everyone Should Consider Using",
            "description": "Your Apple Watch comes with accessibility features that are must-haves for people with disabilities, but many of them can be useful for anyone—if you know how to use them and where to find them. Here are some of the best accessibility features of the Apple Wa…",
            "url": "https://lifehacker.com/7-apple-watch-accessibility-features-that-everyone-shou-1849084821",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6b36bb44ab0dcf4436a0f9000125a15b.jpg",
            "publishedAt": "2022-06-21T16:00:00Z",
            "content": "Your Apple Watch has gesture-based navigation that you can use to answer phone calls, move through menus, and select options on your screen. To enable hand gestures, go to the Watch app on your iPhon… [+397 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "How to Watch Apple's WWDC 2022",
            "description": "WWDC 2022 is nearly here. While most of Apple’s Worldwide Developer Conference is actually a series of presentations and events for iOS, iPadOS, macOS, and watchOS developers, most of us are focused on Apple’s main keynote. Here, the company shows off new fea…",
            "url": "https://lifehacker.com/how-to-watch-apples-wwdc-2022-1849001407",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0e79d6e5a9de1694629e75cc103746dd.png",
            "publishedAt": "2022-06-01T16:03:15Z",
            "content": "WWDC 2022 is nearly here. While most of Apples Worldwide Developer Conference is actually a series of presentations and events for iOS, iPadOS, macOS, and watchOS developers, most of us are focused o… [+3421 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "This Hidden Apple Setting Makes You Sound So Much Better on Video Calls",
            "description": "You don’t know you sound bad on a FaceTime or Zoom call until someone points it out. If you’re chatting with a particularly polite bunch, you might never know, and your hilarious stories or inspiring speeches will fall on deaf and strained ears. If you’re an …",
            "url": "https://lifehacker.com/this-hidden-apple-setting-makes-you-sound-so-much-bette-1848970372",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3c663545d174780e0c85bde189f3367c.jpg",
            "publishedAt": "2022-05-25T13:30:00Z",
            "content": "You dont know you sound bad on a FaceTime or Zoom call until someone points it out. If youre chatting with a particularly polite bunch, you might never know, and your hilarious stories or inspiring s… [+2653 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "Why You Should Switch to Substack’s New App",
            "description": "Substack is a newsletter service that lets you follow specific writers and receive their articles directly to your inbox. Its business model centers around a subscription that allows writers to get paid directly from their audience, (while Substack also gets …",
            "url": "https://lifehacker.com/why-you-should-switch-to-substack-s-new-app-1848634159",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dfefae8796fe5f8872cab9048802609a.png",
            "publishedAt": "2022-03-10T17:00:00Z",
            "content": "Substack is a newsletter service that lets you follow specific writers and receive their articles directly to your inbox. Its business model centers around a subscriptionthat allows writers to get pa… [+1889 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "You Can Now Turn Apple Music Into a Free Karaoke Machine",
            "description": "We all have the songs we have to sing along to—whether they pop up on the radio, a streaming playlist, or the Sonos speaker in the office bathroom, when that track hits your ears, you’re grabbing the imaginary mic. And now, if you have Apple Music, you actual…",
            "url": "https://lifehacker.com/you-can-now-turn-apple-music-into-a-free-karaoke-machin-1849865397",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6369a80818e8c1990ef2f7fcb86ff64c.jpg",
            "publishedAt": "2022-12-07T22:00:00Z",
            "content": "We all have the songs we have to sing along towhether they pop up on the radio, a streaming playlist, or the Sonos speaker in the office bathroom, when that track hits your ears, youre grabbing the i… [+4297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Lifehacker's 22 Favorite Apps of 2022",
            "description": "“There’s an app for that” is as true in 2022 as it was in 2009. Every day, we dive through tech news, forums, and digital stores looking for the best apps to make your phone and computer even better. As the year draws to a close, we’ve highlighted 22 of our f…",
            "url": "https://lifehacker.com/lifehackers-22-favorite-apps-of-2022-1849898715",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/aa4fdaaddb63f7037108f1eb51a8653a.jpg",
            "publishedAt": "2022-12-16T15:00:00Z",
            "content": "The DuckDuckGo app has been around for a while, but the company doubled-down on privacy features in 2022. First, theres DuckDuckGos Hide My Email feature, which shields your personal email from compa… [+681 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "Enable These Instagram Privacy Settings Right Now",
            "description": "Instagram has been through so many changes, it’s hard to remember what is truly private on your account and what’s not. As a Meta product, though, Instagram isn’t known to respect your data, so the most “privacy-friendly” option would be to delete your accoun…",
            "url": "https://lifehacker.com/enable-these-instagram-privacy-settings-right-now-1849456072",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b2db3da824e15fc793b0d9fabe1e0085.jpg",
            "publishedAt": "2022-08-25T19:00:00Z",
            "content": "Instagram has been through so many changes, its hard to remember what is truly private on your account and whats not. As a Meta product, though, Instagram isnt known to respect your data, so the most… [+5327 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "How to Make Your Apple Watch Last for Days on a Single Charge",
            "description": "When it comes to the Apple Watch, “all-day battery life” is Apple’s party line—but what that really means is an 18-hour battery cycle. If you want to push it over a day, you need to stick to light use (and not wear it to bed). But now, with watchOS 9, Apple i…",
            "url": "https://lifehacker.com/how-to-make-your-apple-watch-last-for-days-on-a-single-1849533531",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/64d491723aac38745a600d35dc0f77de.jpg",
            "publishedAt": "2022-09-14T16:30:00Z",
            "content": "When it comes to the Apple Watch, all-day battery life is Apples party linebut what that really means is an 18-hour battery cycle. If you want to push it over a day, you need to stick to light use (a… [+1962 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "The Best Safari Ad Blockers of 2022",
            "description": "Unlike Firefox and Chrome, it’s not easy for Mac users to find good ad blockers for Safari. Apple has certain restrictions (like using the Mac App Store to ship updates) that drive ad blocker developers away from their browser, and as a result, your favorites…",
            "url": "https://lifehacker.com/the-best-safari-ad-blockers-of-2022-1849902684",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/533adba043e06c5ba7b16838abaca188.jpg",
            "publishedAt": "2022-12-16T15:30:00Z",
            "content": "Unlike Firefox and Chrome, its not easy for Mac users to find good ad blockers for Safari. Apple has certain restrictions (like using the Mac App Store to ship updates) that drive ad blocker develope… [+2485 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Android’s ‘Find My’ Alternative Might Be Better Than Apple’s",
            "description": "For those of us with iPhones, sharing our location with friends and family is simple. The Find My app (formally Find My Friends) is your one-stop shop for tracking the contacts, devices, and items in your life. But on Android, there’s not an obvious equivalen…",
            "url": "https://lifehacker.com/android-s-find-my-alternative-might-be-better-than-ap-1849846349",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5c65e2e47e69086e764be24cbb70acdd.jpg",
            "publishedAt": "2022-12-02T17:30:00Z",
            "content": "For those of us with iPhones, sharing our location with friends and family is simple. The Find My app (formally Find My Friends) is your one-stop shop for tracking the contacts, devices, and items in… [+2597 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Stephen Johnson",
            "title": "9 Ways to Talk to the Dead",
            "description": "According to Psychology Today, as many three-quarters of bereaved people report some kind of after-death communication with loved ones. This could come in the form of a dream, a feeling, a favorite song on the radio, just about anything, really. I’m going to …",
            "url": "https://lifehacker.com/9-ways-to-talk-to-the-dead-1849556416",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/560ea18decfd29d9e1a341a5069e971b.jpg",
            "publishedAt": "2022-09-20T13:00:00Z",
            "content": "Using technology to talk to the dead didnt die with Alexander Graham Bell. The modern expression of it can be seen in ghost hunters (both the kind with basic cable TV shows and those without them) wh… [+1207 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "How to Stop OneDrive From Spamming You With Emails and Notifications",
            "description": "OneDrive is among the best cloud storage services around, but it has a problem—its tendency to bombard you with notifications and email spam. Upload photos to OneDrive, and the service starts hitting you up with “On this day memories” notifications on the reg…",
            "url": "https://lifehacker.com/how-to-stop-onedrive-from-spamming-you-with-emails-and-1848633234",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/acaee55dca97b21b6e5b7fc9b58cd909.jpg",
            "publishedAt": "2022-03-10T22:00:00Z",
            "content": "OneDrive is among the best cloud storage services around, but it has a problemits tendency to bombard you with notifications and email spam. Upload photos to OneDrive, and the service starts hitting … [+1760 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Daniel Oropeza",
            "title": "You Can Order Domino's for 50% Off Right Now",
            "description": "This week, until Nov. 20, Domino’s is offering all of their pizzas 50% off. In a press release, the “largest pizza company in the world” explained that the promotion is in honor of National Gratitude Month and to thank its customers before the holidays. Of co…",
            "url": "https://lifehacker.com/you-can-order-dominos-for-50-off-right-now-1849790953",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/34ca42281e82eae830a1cbbc88f98e59.jpg",
            "publishedAt": "2022-11-16T18:30:00Z",
            "content": "This week, until Nov. 20, Dominos is offering all of their pizzas 50% off. In a press release, the largest pizza company in the world explained that the promotion is in honor of National Gratitude Mo… [+1697 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "You Can Disable Google Sign-in Pop-ups on All Websites",
            "description": "You may have noticed an increasing number of websites that now display a “Sign In With Google” pop-up every time you open the page. While it can be helpful if you use your Google Account to log into that site, you likely have plenty of sites (if not the major…",
            "url": "https://lifehacker.com/you-can-disable-google-sign-in-pop-ups-on-all-websites-1849913714",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/72af31d6f65d72c0837e01ea07369064.png",
            "publishedAt": "2022-12-20T16:30:00Z",
            "content": "You may have noticed an increasing number of websites that now display a Sign In With Google pop-up every time you open the page. While it can be helpful if you use your Google Account to log into th… [+1580 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "All of Your Smart Devices Are Spying on You",
            "description": "At this point, it’s obvious that our smartphones and computers are data-leakers. Plenty of us now cover our laptops’ webcams (although we always forget about the mics), while our smartphones track our locations with us wherever we go. Unfortunately, these too…",
            "url": "https://lifehacker.com/all-of-your-smart-devices-are-spying-on-you-1849419669",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/78e8cb1a6c024dfb7a4387bfa83499ca.jpg",
            "publishedAt": "2022-08-16T21:30:00Z",
            "content": "At this point, its obvious that our smartphones and computers are data-leakers. Plenty of us now cover our laptops webcams (although we always forget about the mics), while our smartphones track our … [+6646 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "Improve Your Safari Browsing Experience With These Automatic Redirects",
            "description": "Browsing the internet has its perils. Some websites are borderline unusable thanks to pop-ups, ads, or poor design. If you encounter these sites frequently, automatic redirects can help take you to a better place (on the internet, at least).Read more...",
            "url": "https://lifehacker.com/improve-your-safari-browsing-experience-with-these-auto-1849812013",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b4c211e4075cbbe5e0e602445ca53294.jpg",
            "publishedAt": "2022-11-22T17:30:00Z",
            "content": "Browsing the internet has its perils. Some websites are borderline unusable thanks to pop-ups, ads, or poor design. If you encounter these sites frequently, automatic redirects can help take you to a… [+2198 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "Why Your Wifi Router Needs a 'Guest Mode'",
            "description": "It might not feel like it, but your wifi router is one of the most personal things you have in your home. All the internet traffic from every connected gadget in your home goes through this little device. That’s reason enough to protect it from any outsider—a…",
            "url": "https://lifehacker.com/why-your-wifi-router-needs-a-guest-mode-1849573880",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ea7af10ef288fe0786f0c21812fa8296.jpg",
            "publishedAt": "2022-09-23T20:30:00Z",
            "content": "It might not feel like it, but your wifi router is one of the most personal things you have in your home. All the internet traffic from every connected gadget in your home goes through this little de… [+1810 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "You Can Make Instagram DMs Better",
            "description": "For years, DM-ing on Instagram was an experience you lived through, not something you enjoyed. The social media app was so focused on photo sharing, it neglected to focus on things like standard messaging features like custom notification settings. But since …",
            "url": "https://lifehacker.com/you-can-make-instagram-dms-better-1849012763",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/914cf4f648167759fbe973bfa148aae9.png",
            "publishedAt": "2022-06-03T15:30:00Z",
            "content": "For years, DM-ing on Instagram was an experience you lived through, not something you enjoyed. The social media app was so focused on photo sharing, it neglected to focus on things like standard mess… [+3443 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Every Store You Can Get 3% Cash Back With Your Apple Card",
            "description": "I use Apple Pay for everything. It’s fast, secure, and best of all it gives me 2% cash back on my Apple Card. However, some stores don’t stop at 2% cash back—participating retailers offer 3%. So if you want to squeeze every cent of credit card rewards you can…",
            "url": "https://lifehacker.com/every-store-you-can-get-3-cash-back-with-your-apple-ca-1848818805",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1a24c2356cb86542a938483ea357be6a.jpg",
            "publishedAt": "2022-04-20T20:00:00Z",
            "content": "I use Apple Pay for everything. Its fast, secure, and best of all it gives me 2% cash back on my Apple Card. However, some stores dont stop at 2% cash backparticipating retailers offer 3%. So if you … [+2783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "How to Download Every Issue of Nintendo Power Ever",
            "description": "Nintendo Power is an iconic part of Nintendo history, and gaming history generally. Its 24-year, 285-issue run spanned multiple generations of gamers, and helped us finish tough games played on systems from the OG NES to the Wii U. Many of us have fond memori…",
            "url": "https://lifehacker.com/how-to-download-every-issue-of-nintendo-power-ever-1849797319",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c0ec71dd58ccc21a0aa50235ed875e0f.png",
            "publishedAt": "2022-11-17T21:30:00Z",
            "content": "Nintendo Poweris an iconic part of Nintendo history, and gaming history generally. Its 24-year, 285-issue run spanned multiple generations of gamers, and helped us finish tough games played on system… [+2491 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Two Ways to Read a Snapchat Without Sending a Read Receipt",
            "description": "Snapchat, like most messaging apps, will instantly let you know when someone opens one of your snaps, and vice versa. This means the second you open a snap, you might feel the pressure to respond, even if you don’t know what to say. If you’re in a heated conv…",
            "url": "https://lifehacker.com/two-ways-to-read-a-snapchat-without-sending-a-read-rece-1849440845",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/61b67cab48782ec727a07a1ec00fa1f6.jpg",
            "publishedAt": "2022-08-22T16:30:00Z",
            "content": "Snapchat, like most messaging apps, will instantly let you know when someone opens one of your snaps, and vice versa. This means the second you open a snap, you might feel the pressure to respond, ev… [+3275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "These Windows Apps Are Outdated, Risky, or Scammy",
            "description": "Every computer develops some cruft over time: the small app you installed years ago and forgot about, or a cleaning utility you downloaded when you wanted to free up some space, but is still running in the background. Plus, Windows comes with its own bloatwar…",
            "url": "https://lifehacker.com/these-windows-apps-are-outdated-risky-or-scammy-1848707239",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eabb254cb2c8d17e8ec7375aaf9ef580.jpg",
            "publishedAt": "2022-04-04T20:30:00Z",
            "content": "Every computer develops some cruft over time: the small app you installed years ago and forgot about, or a cleaning utility you downloaded when you wanted to free up some space, but is still running … [+3750 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Lindsey Ellefson",
            "title": "Telltale Signs You’re Looking at a Manipulated Image",
            "description": "Much fuss is made over the use of digitally manipulated photos in ads and magazines, and for good reason: The impact of altered photos in media on consumers’ self esteem has long been researched—and the results are not good. More recently, the proliferation o…",
            "url": "https://lifehacker.com/telltale-signs-you-re-looking-at-a-manipulated-image-1848855015",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c553394b25fff9c12b3b916daef2987a.jpg",
            "publishedAt": "2022-04-28T20:30:00Z",
            "content": "Much fuss is made over the use of digitally manipulated photos in ads and magazines, and for good reason: The impact of altered photos in media on consumers self esteem has long been researchedand th… [+5643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Shannon Flynn",
            "title": "Use a Subscription Manager to Stop Paying for Services You Don't Use",
            "description": "From Netflix, to iCloud or Google Cloud, to Amazon Prime, to Blue Apron, you probably subscribe to more subscription-based services than you can easily remember— which can be a problem when it comes to canceling services that you aren’t actually using anymore…",
            "url": "https://lifehacker.com/use-a-subscription-manager-to-stop-paying-for-services-1849121341",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/60a7f6aea326d155a137e54b398a8716.jpg",
            "publishedAt": "2022-06-29T15:24:32Z",
            "content": "From Netflix, to iCloud or Google Cloud, to Amazon Prime, to Blue Apron, you probably subscribe to more subscription-based services than you can easily remember which can be a problem when it comes t… [+4019 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Stephen Johnson",
            "title": "How to Turn a Landline Telephone Into a Cell Phone Bluetooth Receiver",
            "description": "I’m not usually the nostalgic type, but I miss landline phones. Cell phones may do eight billion things, but they are tiny and inconsequential—artificial, semi-disposable black rectangles—whereas old telephones have weight, substance, and style. They come in …",
            "url": "https://lifehacker.com/how-to-turn-a-landline-telephone-into-a-cell-phone-blue-1849329883",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/11f38abc5d54fccc46ad228c2d30a438.jpg",
            "publishedAt": "2022-07-26T14:30:00Z",
            "content": "Im not usually the nostalgic type, but I miss landline phones. Cell phones may do eight billion things, but they are tiny and inconsequentialartificial, semi-disposable black rectangleswhereas old te… [+3868 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Lindsey Ellefson",
            "title": "How to Donate Your Organs (or Your Whole Body) When You Die",
            "description": "You can’t take anything with you when you die, including your body. In the absence of serving you, your organs would simply rot away, which would be a real shame since some of them could help other people. If you’re considering a way to make your final act on…",
            "url": "https://lifehacker.com/how-to-donate-your-organs-or-your-whole-body-when-you-1849407201",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/04e0ebddd022f668200e2be7226d9e27.jpg",
            "publishedAt": "2022-08-12T21:30:00Z",
            "content": "You cant take anything with you when you die, including your body. In the absence of serving you, your organs would simply rot away, which would be a real shame since some of them could help other pe… [+3751 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Is the Pixel 7 Pro Worth $300 More Than the Pixel 7?",
            "description": "Google has officially refreshed the Pixel line with the new Pixel 7 and 7 Pro. Both phones push the Android envelope with advances in computational photography, security enhancements, and the longest software support of any Google phone. But there are, of cou…",
            "url": "https://lifehacker.com/is-the-pixel-7-pro-worth-300-more-than-the-pixel-7-1849624470",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/efdcd618e931cf122c7963a50ebe495a.png",
            "publishedAt": "2022-10-06T17:30:00Z",
            "content": "Google has officially refreshed the Pixel line with the new Pixel 7 and 7 Pro. Both phones push the Android envelope with advances in computational photography, security enhancements, and the longest… [+7853 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Okay, Which MacBook Should You Buy?",
            "description": "Take a peek at Apple’s website or walk into an Apple Store and you’ll be inundated with MacBook options: MacBooks Air and Pro, of all different shapes, sizes, and specs, all vying for your attention and a significant chunk of your money. It’s not easy to know…",
            "url": "https://lifehacker.com/okay-which-macbook-should-you-buy-1849330413",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/9cba19ba436744de77c71510f9f6c4e2.jpg",
            "publishedAt": "2022-07-26T18:30:00Z",
            "content": "Take a peek at Apples website or walk into an Apple Store and youll be inundated with MacBook options: MacBooks Air and Pro, of all different shapes, sizes, and specs, all vying for your attention an… [+10653 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apple may be working on a pricier iPhone 'Ultra'",
            "description": "Next year could see the introduction of a new flagship iPhone. According to Bloomberg’s Mark Gurman, Apple is considering whether to release a more expensive iPhone “Ultra” that would slot in above the iPhone Pro and Pro Max. He says the device could arrive a…",
            "url": "https://www.engadget.com/apple-may-introduce-a-pricier-iphone-ultra-next-year-172301607.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-02/5b649390-a578-11ed-95fd-9cd77f6213ee",
            "publishedAt": "2023-02-05T17:23:01Z",
            "content": "Next year could see the introduction of a new flagship iPhone. According to Bloombergs Mark Gurman, Apple is considering whether to release a more expensive iPhone Ultra that would slot in above the … [+1577 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Devindra Hardawar",
            "title": "The iPhone 14 Pro loses the notch",
            "description": "The iPhone 14 Pro is here, and it's one of Apple's most significant upgrades in years. We're used to seeing better camera and screen technology in Apple's \"Pro\" lineup, but this time around it's a dramatic departure from the standard iPhone 14. For one, Apple…",
            "url": "https://www.engadget.com/apple-iphone-14-pro-dynamic-island-181347737.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/91cba750-2ed8-11ed-8f7d-faa3f8049d08",
            "publishedAt": "2022-09-07T18:13:47Z",
            "content": "The iPhone 14 Pro is here, and it's one of Apple's most significant upgrades in years. We're used to seeing better camera and screen technology in Apple's \"Pro\" lineup, but this time around it's a dr… [+431 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "The iPhone 14 now comes in yellow",
            "description": "Apple is keeping up its recent tradition of adding new iPhone colors in the spring. The company has introduced yellow versions of the iPhone 14 and 14 Plus — sorry, no Pro equivalent this year. They're identical in functionality and price to other hues, of co…",
            "url": "https://www.engadget.com/the-iphone-14-now-comes-in-yellow-133841844.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/ZTHR2nejbe8LSMaYrlGldg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-03/057247c0-bced-11ed-bf79-a513fbabfb3a.cf.jpg",
            "publishedAt": "2023-03-07T13:38:41Z",
            "content": "Apple is keeping up its recent tradition of adding new iPhone colors in the spring. The company has introduced yellow versions of the iPhone 14 and 14 Plus sorry, no Pro equivalent this year. They're… [+1442 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Valentina Palladino",
            "title": "The best iPhone cases for 2023",
            "description": "There are two types of people in this world: those with naked iPhones and those who stick their handset in a case as soon as they unbox it. If you just got a new phone and fall into the latter category, you have an overwhelming range of options to consider. I…",
            "url": "https://www.engadget.com/best-iphone-cases-153035988.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/1dd547a0-349d-11ed-9eeb-9d420115ca52",
            "publishedAt": "2022-12-19T14:15:35Z",
            "content": "There are two types of people in this world: those with naked iPhones and those who stick their handset in a case as soon as they unbox it. If you just got a new phone and fall into the latter catego… [+6917 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Cherlynn Low",
            "title": "Feast your eyes on the new green iPhone 13 and 13 Pro",
            "description": "It's Apple pre-order day, and not just for the M1-powered iPad Air or the latest iPhone SE. At its \"Peek Performance\" event this week, Apple unveiled new green versions of the iPhone 13 series, bringing the total number of colors for the non-Pro models to six…",
            "url": "https://www.engadget.com/iphone-13-green-photos-140005020.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/c259af32-a0f2-11ec-bbdf-7d706f4f1259",
            "publishedAt": "2022-03-11T14:00:05Z",
            "content": "It's Apple pre-order day, and not just for the M1-powered iPad Air or the latest iPhone SE. At its \"Peek Performance\" event this week, Apple unveiled new green versions of the iPhone 13 series, bring… [+1260 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apple now offers less for some iPhone trade-ins",
            "description": "Following the recent announcement of the HomePod\r\n and new M2 MacBook Pros\r\n, as noted by MacRumors Apple has quietly adjusted the trade-in values it offers for its own devices. In the US, iPhone models are now frequently worth less than before. For instance,…",
            "url": "https://www.engadget.com/apple-is-now-offering-less-for-some-iphone-trade-ins-231530059.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-01/353598f0-7765-11ec-bbbf-9f0ea07ea914",
            "publishedAt": "2023-01-25T23:15:30Z",
            "content": "Following the recent announcement of the HomePod\r\n and new M2 MacBook Pros\r\n, as noted by MacRumors Apple has quietly adjusted the trade-in values it offers for its own devices. In the US, iPhone mod… [+1264 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Cherlynn Low",
            "title": "iPhone SE review (2022): A small throwback of a phone",
            "description": "Since the iPhone 5c, Apple’s approach to making a more affordable iPhone has been to stuff premium processors into cases belonging to older models. With the third generation of the iPhone SE, the company has stuck to that strategy. With its home button, top a…",
            "url": "https://www.engadget.com/iphone-se-3-2022-review-battery-life-camera-sample-touch-id-home-button-130047678.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/a921eec0-a17d-11ec-9eff-a7e1a152f4df",
            "publishedAt": "2022-03-14T13:00:47Z",
            "content": "Since the iPhone 5c, Apples approach to making a more affordable iPhone has been to stuff premium processors into cases belonging to older models. With the third generation of the iPhone SE, the comp… [+8488 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apple’s Photonic Engine technology improves low-light camera performance",
            "description": "The iPhone 14 delivers a 49 percent improvement in low-light performance and it's all thanks to a tweak Apple made to its Deep Fusion image pipeline. During its Far Out event on Wednesday, Apple detailed all the camera enhancements coming to its 2022 iPhone l…",
            "url": "https://www.engadget.com/apple-iphone-14-pro-camera-features-181326015.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/3469d1f0-2ed7-11ed-aa6f-270aedad99fa",
            "publishedAt": "2022-09-07T18:13:26Z",
            "content": "The iPhone 14 delivers a 49 percent improvement in low-light performance and it's all thanks to a tweak Apple made to its Deep Fusion image pipeline. During its Far Out event on Wednesday, Apple deta… [+414 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Modders thought it would be fun to make a folding iPhone",
            "description": "You don't have wait for Apple to see what a foldable iPhone would look like in practice. China-based The Aesthetics of Science and Technology (AST) claims to have built a folding iPhone through heavy modifications. The engineers say they created the one-off w…",
            "url": "https://www.engadget.com/folding-iphone-unofficial-171559538.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/5183fe30-6048-11ed-aed0-07edb649475b",
            "publishedAt": "2022-11-09T17:15:59Z",
            "content": "You don't have wait for Apple to see what a foldable iPhone would look like in practice. China-based The Aesthetics of Science and Technology (AST) claims to have built a folding iPhone through heavy… [+1819 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple is reportedly planning an iPhone hardware subscription service",
            "description": "Apple's iPhones and other devices have become increasingly expensive, and the company may be using alternative sales models to help soften the blow. Bloombergsources claim Apple is developing a subscription service for the iPhone and other hardware. Akin to t…",
            "url": "https://www.engadget.com/apple-iphone-hardware-subscription-service-rumor-173402698.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/45453e60-ab97-11ec-bff2-c465f5469a16",
            "publishedAt": "2022-03-24T17:34:02Z",
            "content": "Apple's iPhones and other devices have become increasingly expensive, and the company may be using alternative sales models to help soften the blow. Bloombergsources claim Apple is developing a subsc… [+1011 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple begins manufacturing the iPhone 13 in India",
            "description": "Apple has started manufacturing one of its latest phones in India. Reutersreports the tech firm has begun producing iPhone 13 units in the country. While Apple didn't say which factory was responsible, a Reuters source claimed a Foxconn plant in the Tamil Nad…",
            "url": "https://www.engadget.com/apple-iphone-13-india-manufacturing-131034955.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-04/ce07bc60-b992-11ec-bfe6-27d6c26b542c",
            "publishedAt": "2022-04-11T13:04:55Z",
            "content": "Apple has started manufacturing one of its latest phones in India. Reutersreports the tech firm has begun producing iPhone 13 units in the country. While Apple didn't say which factory was responsibl… [+1443 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "How to share your location using an iPhone",
            "description": "Smartphones may mean never having to ask for directions, but it can still be tricky to relay exactly where you are at any given moment to friends and family trying to find you. iPhone users can share their current location using Messages, Apple Maps, Google M…",
            "url": "https://www.engadget.com/how-to-share-location-iphone-143002231.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-01/ebdce750-911f-11ed-b79f-26895dba5187",
            "publishedAt": "2023-01-16T14:30:02Z",
            "content": "Smartphones may mean never having to ask for directions, but it can still be tricky to relay exactly where you are at any given moment to friends and family trying to find you. iPhone users can share… [+8714 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "Windows 11 Phone Link supports limited iPhone syncing in preview",
            "description": "Microsoft is taking its first steps towards bringing iPhone syncing to Windows 11. The company announced today that the Insider preview of Phone Link would support iPhones starting this week. The feature (which has undergone several name changes) has worked w…",
            "url": "https://www.engadget.com/windows-11-phone-link-supports-limited-iphone-syncing-in-preview-140005285.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/CUa8oxuupOGtZ8Hba9lHlA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/ddf60d60-b6d6-11ed-bfaf-6a4876125ef9.cf.jpg",
            "publishedAt": "2023-02-28T14:00:05Z",
            "content": "Microsoft is taking its first steps towards bringing iPhone syncing to Windows 11. The company announced today that the Insider preview of Phone Link would support iPhones starting this week. The fea… [+1562 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Uber puts a ride tracker on the iPhone lock screen",
            "description": "Uber has rolled out an update for its iPhone app that gives you the capability to see at a glance whether it's time to head out the door and meet the ride you ordered. The company has launched support for Live Activities, an iOS 16 feature that puts real time…",
            "url": "https://www.engadget.com/uber-ride-tracker-iphone-lock-screen-060908235.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/J2YKCUmqOFgoB8IGORwR.Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-02/acf68150-b338-11ed-b7df-fe851f6641fa.cf.jpg",
            "publishedAt": "2023-02-23T06:09:08Z",
            "content": "Uber has rolled out an update for its iPhone app that gives you the capability to see at a glance whether it's time to head out the door and meet the ride you ordered. The company has launched suppor… [+1173 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apollo update transforms the iPhone 14 Pro’s Dynamic Island into a home for ‘Pixel Pals’",
            "description": "The iPhone 14 Pro and Pro Max\r\n may have only arrived yesterday but developers are already dreaming up fun and interesting use cases for Apple’s new Dynamic Island interface\r\n. Take Apollo\r\n creator Christian Selig, for instance. On Friday, he updated his Red…",
            "url": "https://www.engadget.com/apollo-reddit-iphone-14-pro-dynamic-island-pixel-pals-update-221206984.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/1a5cca10-2fb8-11ed-8dbd-8898f02f9acd",
            "publishedAt": "2022-09-17T22:12:06Z",
            "content": "The iPhone 14 Pro and Pro Max\r\n may have only arrived yesterday but developers are already dreaming up fun and interesting use cases for Apples new Dynamic Island interface\r\n. Take Apollo\r\n creator C… [+990 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Cherlynn Low",
            "title": "iPhone 14 review: Not an upgrade year for most",
            "description": "caa47972-4b4f-4731-b726-2d3fdda5f604The iPhone 14 series is at once controversial and underwhelming. With its latest phones, Apple chose to ditch the physical SIM card slot but continued to avoid adopting USB-C, and on the non-Pro models there's still the not…",
            "url": "https://www.engadget.com/iphone-14-review-camera-test-sample-pictures-notch-specs-battery-life-130022134.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/7e16cd50-33ee-11ed-bd7f-45b4dd0372d0",
            "publishedAt": "2022-09-14T13:00:22Z",
            "content": "caa47972-4b4f-4731-b726-2d3fdda5f604The iPhone 14 series is at once controversial and underwhelming. With its latest phones, Apple chose to ditch the physical SIM card slot but continued to avoid ado… [+11433 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Watch Apple's iPhone 14 event here at 1PM ET",
            "description": "It's time once again for Apple to show off a bunch of new gear. The company's \"Far Out\" iPhone event starts today at 1PM ET and, as ever, you'll be able to watch it live. The stream will be available on Apple's website and YouTube channel, as well as the Appl…",
            "url": "https://www.engadget.com/how-to-watch-apple-iphone-14-event-160045601.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/0839c060-23c7-11ed-bcda-2b52e94f3743",
            "publishedAt": "2022-09-07T16:00:45Z",
            "content": "It's time once again for Apple to show off a bunch of new gear. The company's \"Far Out\" iPhone event starts today at 1PM ET and, as ever, you'll be able to watch it live. The stream will be available… [+969 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple Fitness+ comes to iPhone on October 24th",
            "description": "Apple isn't just updating iPad and Mac software next week. The company has revealed that Fitness+ will come to the iPhone on October 24th in tandem with required software updates, including iOS 16.1. You'll need the handset to sign up, but it will also be acc…",
            "url": "https://www.engadget.com/apple-fitness-plus-iphone-release-date-144013544.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/b8027c40-5080-11ed-bb6c-387879493ff4",
            "publishedAt": "2022-10-20T14:40:13Z",
            "content": "Apple isn't just updating iPad and Mac software next week. The company has revealed that Fitness+ will come to the iPhone on October 24th in tandem with required software updates, including iOS 16.1.… [+1293 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Cherlynn Low",
            "title": "iPhone 14 has a Plus variant with a 6.9-inch screen and last-year’s A15 processor",
            "description": "Apple has officially unveiled the iPhone 14 at its \"Far Out\" event today and it seems mostly like an iterative upgrade over last year's model. We do have a new Plus model this year by way of the iPhone 14 Plus, which features a 6.7-inch display, in addition t…",
            "url": "https://www.engadget.com/apple-iphone-14-specs-price-availability-175937968.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/bf2e2ea0-2ed5-11ed-8dea-8bb9654e9494",
            "publishedAt": "2022-09-07T17:59:37Z",
            "content": "Apple has officially unveiled the iPhone 14 at its \"Far Out\" event today and it seems mostly like an iterative upgrade over last year's models. We do have a new Plus model this year by way of the iPh… [+2461 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Tim Cook's response to improving Android texting compatibility: 'buy your mom an iPhone'",
            "description": "At the 2022 Code Conference, Tim Cook responded to a journalist's question about RCS text messaging by suggesting they buy an iPhone, The Verge reported. Asked how Apple could improve communication between iPhone and Android users, he said \"I don't hear our u…",
            "url": "https://www.engadget.com/tim-cook-response-green-bubbles-android-your-mom-095538175.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/c763c4a0-2f10-11ed-95ba-fe3f5efbdc81",
            "publishedAt": "2022-09-08T09:55:38Z",
            "content": "At the 2022 Code Conference, Tim Cook responded to a journalist's question about RCS text messaging by suggesting they buy an iPhone, The Verge reported. Asked how Apple could improve communication b… [+1248 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apple releases rare iOS 12 update to address security flaw on older iPhones and iPads",
            "description": "Apple has released an iOS 12 update users of older iPhone and iPad devices should download as soon as possible. The new version of the company’s 2018 operating system addresses a major vulnerability that Apple recently patched within iOS 15. According to a su…",
            "url": "https://www.engadget.com/apple-releases-ios-12-5-6-security-flaw-194911468.html",
            "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Sq2KgdtefXEdOlDpiynlPw--~B/aD02MTM7dz05NjA7YXBwaWQ9eXRhY2h5b24-/https://o.aolcdn.com/hss/storage/midas/7434a3763e9e4bae6e7d780a45ef5327/200766880/iPhone_6_main_final-960.jpg",
            "publishedAt": "2022-08-31T19:49:11Z",
            "content": "Apple has released an iOS 12 update users of older iPhone and iPad devices should download as soon as possible. The new version of the companys 2018 operating system addresses a major vulnerability t… [+593 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jeff Dunn",
            "title": "Apple's MagSafe Battery Pack is down to a new low of $71",
            "description": "Apple's MagSafe Battery Pack is exactly what it says on the tin: a portable battery that snaps to the back of an iPhone through Apple's MagSafe magnetic charging tech and charges the handset wirelessly. The battery is a tougher sell at full price, but today i…",
            "url": "https://www.engadget.com/apple-magsafe-battery-pack-deal-down-to-new-low-71-amazon-174136959.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/129fd1b0-dff8-11ec-bfe2-b7143f3918e0",
            "publishedAt": "2022-11-11T17:41:36Z",
            "content": "Apple's MagSafe Battery Pack is exactly what it says on the tin: a portable battery that snaps to the back of an iPhone through Apple's MagSafe magnetic charging tech and charges the handset wireless… [+3575 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Apple releases macOS Ventura, iOS 16.1 and iPadOS 16",
            "description": "It's a major Apple\r\n update day, as the company is rolling out new versions of its iPhone, iPad and Mac operating systems. While iPhone users at large have already had a taste of iOS 16, this will be the first time that most folks will get their hands on iPad…",
            "url": "https://www.engadget.com/apple-macos-venture-ipados-16-ios-161-updates-170844000.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-07/2b79ece0-020b-11ed-b7fd-6b5f3d385199",
            "publishedAt": "2022-10-24T17:08:44Z",
            "content": "It's a major Apple update day, as the company is rolling out new versions of its iPhone, iPad and Mac operating systems. While iPhone users at large have already had a taste of iOS 16, this will be t… [+2005 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple turns healthy profit despite weak iPad sales",
            "description": "Apple seems to be weathering the financial storm, albeit with a few hitches. The company reported a record high revenue of $90.1 billion in its fiscal fourth quarter, with a net profit of $20.7 billion. While those were only slight increases versus the same p…",
            "url": "https://www.engadget.com/apple-q4-2022-earnings-215812098.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/770631e0-563a-11ed-9ed2-56cf3d5673fb",
            "publishedAt": "2022-10-27T21:58:12Z",
            "content": "Apple seems to be weathering the financial storm, albeit with a few hitches. The company reported a record high revenue of $90.1 billion in its fiscal fourth quarter, with a net profit of $20.7 billi… [+2291 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Engadget",
            "title": "The best smartphones you can buy right now",
            "description": "Choosing your next smartphone can be challenging. With so many brands offering similar features at similar prices, it can be hard to understand what device actually has the things you want. If you’ve already determined you only want an iPhone, your decision-m…",
            "url": "https://www.engadget.com/best-smartphones-140004900.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/25c681c0-1cfe-11ec-b1ed-aff3c2fd2c38",
            "publishedAt": "2022-06-30T14:00:04Z",
            "content": "Choosing your next smartphone can be challenging. With so many brands offering similar features at similar prices, it can be hard to understand what device actually has the things you want. If youve … [+11341 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Square will support Apple's Tap to Pay on iPhones later this year",
            "description": "Soon, sellers using Square's Point of Sale app can accept payments with only an iPhone. The mobile payment company has announced that it's working with Apple to enable the feature within its application and will launch the service to the public later this yea…",
            "url": "https://www.engadget.com/square-will-support-apple-tap-to-pay-iphone-125511583.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/35b79bc0-e335-11ec-9dd8-4b1f2c16f55d",
            "publishedAt": "2022-06-03T12:55:11Z",
            "content": "Soon, sellers using Square's Point of Sale app can accept payments with only an iPhone. The mobile payment company has announced that it's working with Apple to enable the feature within its applicat… [+1236 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "YouTube TV finally supports picture-in-picture on iOS",
            "description": "Google has begun rolling out a new update to its iOS YouTube TV app that allows both iPhone and iPad users to take advantage of picture-in-picture functionality. To watch something in PiP mode, swipe up from the bottom of the screen. The video will then autom…",
            "url": "https://www.engadget.com/youtube-tv-picture-in-picture-ios-213505208.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/09ff6140-b070-11ec-bdab-e334c244ae4a",
            "publishedAt": "2022-03-30T21:35:05Z",
            "content": "Google has begun rolling out a new update to its iOS YouTube TV app that allows both iPhone and iPad users to take advantage of picture-in-picture functionality. To watch something in PiP mode, swipe… [+886 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Devindra Hardawar",
            "title": "Engadget Podcast: A foldable iPhone, Meta layoffs and the fall of FTX",
            "description": "We’re still waiting for Apple to deliver a genuine foldable iPhone, but that didn’t stop a group of engineers in China from crafting their own prototype. This week, Cherlynn and Devindra dive into the possibility of a real foldable iPhone, plus they discuss M…",
            "url": "https://www.engadget.com/engadget-podcast-foldable-iphone-hack-133040034.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-05/f43b53b0-909f-11ea-87fd-d8d721459924",
            "publishedAt": "2022-11-11T13:30:40Z",
            "content": "Were still waiting for Apple to deliver a genuine foldable iPhone, but that didnt stop a group of engineers in China from crafting their own prototype. This week, Cherlynn and Devindra dive into the … [+1242 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "Windows 11's iCloud Photos integration is now available",
            "description": "If you use an iPhone and a Windows PC, syncing photos is about to get a lot easier. The feature Microsoft announced last month that adds iCloud Photos to the Windows Photos app\r\n begins rolling out today. Microsoft says\r\n it will be available to all Windows 1…",
            "url": "https://www.engadget.com/windows-11-icloud-photos-update-214218257.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/2d0453f0-6072-11ed-bff3-50811c2a4f4c",
            "publishedAt": "2022-11-09T21:42:18Z",
            "content": "If you use an iPhone and a Windows PC, syncing photos is about to get a lot easier. The feature Microsoft announced last month that adds iCloud Photos to the Windows Photos app\r\n begins rolling out t… [+1138 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Anker charging accessories are up to 50 percent off for Prime Day",
            "description": "If you're looking for a charging accessory, whether it's just a charging cable or a portable power generator, you'll probably find what you need among all the items Anker has on sale for Prime Day. The collection is pretty extensive and includes a bunch of wi…",
            "url": "https://www.engadget.com/anker-charging-accessories-prime-day-134541872.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-07/069d8170-01d9-11ed-8f8f-ce36be4d5b80",
            "publishedAt": "2022-07-12T13:45:41Z",
            "content": "If you're looking for a charging accessory, whether it's just a charging cable or a portable power generator, you'll probably find what you need among all the items Anker has on sale for Prime Day. T… [+1928 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "iPhone 14 Pro's two hole-punch cutouts may look like a single 'wide pill'",
            "description": "Apple's\r\n big annual iPhone event is only a few days away\r\n and we'll soon find out exactly what the company has up its sleeve. In the meantime, the rumor mill is still churning away. The latest word on the street concerns the dual hole-punch cutouts that the…",
            "url": "https://www.engadget.com/iphone-14-pro-hole-punch-cutouts-privacy-indicators-display-camera-app-211710542.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/25c681c0-1cfe-11ec-b1ed-aff3c2fd2c38",
            "publishedAt": "2022-09-01T21:17:10Z",
            "content": "Apple's\r\n big annual iPhone event is only a few days away\r\n and we'll soon find out exactly what the company has up its sleeve. In the meantime, the rumor mill is still churning away. The latest word… [+1621 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: Apple's iPhone repair service and toolkits launch in the US",
            "description": "Apple's Self Service Repair program is now available in the US. If you have an iPhone 12, iPhone 13 or third-generation iPhone SE, you can buy replacement batteries, cameras and displays from a dedicated store and use the company’s official repair manuals to …",
            "url": "https://www.engadget.com/the-morning-after-apple-iphone-repair-service-launch-111552094.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/325bd980-4959-11ec-bfd2-888ffdd2c055",
            "publishedAt": "2022-04-28T11:15:52Z",
            "content": "Apple's Self Service Repair program is now available in the US. If you have an iPhone 12, iPhone 13 or third-generation iPhone SE, you can buy replacement batteries, cameras and displays from a dedic… [+3957 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: iPhone usage data may not be as anonymous as Apple claims",
            "description": "Developers at Mysk claim Apple's anonymous usage data for some of its in-house apps includes a Directory Services Identifier (DSID) uniquely linked to your Apple ID and iCloud data. Mysk notes that Apple's tool to prevent third-party app tracking debuted in i…",
            "url": "https://www.engadget.com/the-morning-after-i-phone-usage-data-may-not-be-as-anonymous-as-apple-claims-121555784.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/32d0f3b0-521c-11ed-bad3-4bf45e1f7ed2",
            "publishedAt": "2022-11-22T12:15:55Z",
            "content": "Developers at Mysk claim Apple's anonymous usage data for some of its in-house apps includes a Directory Services Identifier (DSID) uniquely linked to your Apple ID and iCloud data. Mysk notes that A… [+3172 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "iPhone users can now share their digital car keys with Pixel owners",
            "description": "You no longer need others to use the same phone OS to share your digital car keys. Google has added car key sharing to Pixel devices, making cross-platform swaps available in an early form. If you're using an iPhone running iOS 16.1, you can send keys stored …",
            "url": "https://www.engadget.com/iphone-digital-car-keys-share-with-android-pixel-162505575.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/5280b760-7254-11ed-acbd-f2b216bac9e7",
            "publishedAt": "2022-12-02T16:25:05Z",
            "content": "You no longer need others to use the same phone OS to share your digital car keys. Google has added car key sharing to Pixel devices, making cross-platform swaps available in an early form. If you're… [+1415 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "iPhone AirDrop restriction first seen in China will roll out worldwide with iOS 16.2",
            "description": "Apple’s next iOS update will tighten AirDrop security for everyone. The new default settings will arrive globally in the upcoming iOS 16.2 after the company limited AirDrop use in China, where protestors had used the feature to organize with strangers.The res…",
            "url": "https://www.engadget.com/apple-china-airdrop-limit-everyone-ios-16-2-223231192.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/19b7a9d0-723a-11ed-bf97-c3c936e16c03",
            "publishedAt": "2022-12-07T22:32:31Z",
            "content": "Apples next iOS update will tighten AirDrop security for everyone. The new default settings will arrive globally in the upcoming iOS 16.2 after the company limited AirDrop use in China, where protest… [+1437 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Nathan Ingraham",
            "title": "iMovie 3.0 for the iPhone and iPad makes it easier to create your first video",
            "description": "While Apple's iMovie software has always been a fairly powerful piece of movie-editing software, its main appeal is that it's a free and simple way to start making your own videos. But iMovie for the iPhone and iPad offers surprisingly little in the way of di…",
            "url": "https://www.engadget.com/apple-imovie-3-magic-movie-storyboards-170007142.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-04/7ce74000-ba76-11ec-9332-b2d03ebf96da",
            "publishedAt": "2022-04-12T17:00:07Z",
            "content": "While Apple's iMovie software has always been a fairly powerful piece of movie-editing software, its main appeal is that it's a free and simple way to start making your own videos. But iMovie for the… [+4320 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "watchOS 9 will arrive on September 12th",
            "description": "Just before the new generation of Apple Watches (including the fancy Apple Watch Ultra) arrives later this month, current smartwatch owners will be able to upgrade to watchOS 9. Apple says it will roll out the operating system on September 12th, the same day …",
            "url": "https://www.engadget.com/watchos-9-release-date-191305169.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/ebb8c420-2ee0-11ed-be71-1e34932b5a55",
            "publishedAt": "2022-09-07T19:13:18Z",
            "content": "Just before the new generation of Apple Watches (including the fancy Apple Watch Ultra) arrives later this month, current smartwatch owners will be able to upgrade to watchOS 9. Apple says it will ro… [+1001 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple will fix iOS 16's annoying copy and paste prompts",
            "description": "Apple has another bug to quash in iOS 16. Senior manager Ron Huang told a MacRumors reader that the company will fix the frequent permissions prompts when you try to copy and paste content between apps. This is \"absolutely not expected behavior,\" Huang said. …",
            "url": "https://www.engadget.com/apple-ios-16-copy-and-paste-prompt-fix-131559755.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/bccd3bf0-38e0-11ed-b7ec-8730884d360c",
            "publishedAt": "2022-09-20T13:15:59Z",
            "content": "Apple has another bug to quash in iOS 16. Senior manager Ron Huang told a MacRumors reader that the company will fix the frequent permissions prompts when you try to copy and paste content between ap… [+823 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Devindra Hardawar",
            "title": "Engadget Podcast: Diving into the iPhone 14 and Apple Watch Ultra",
            "description": "It’s Apple week, everyone! Editor-in-chief Dana Wollman joins Devindra to chat about everything Apple announced, including the iPhone 14 and 14 Pro, as well as all of the Apple Watches. Sure, they’re faster and have many more features, but did you know they c…",
            "url": "https://www.engadget.com/engadget-podcast-iphone-14-apple-watch-ultra-123002213.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb",
            "publishedAt": "2022-09-09T12:30:02Z",
            "content": "Its Apple week, everyone! Editor-in-chief Dana Wollman joins Devindra to chat about everything Apple announced, including the iPhone 14 and 14 Pro, as well as all of the Apple Watches. Sure, theyre f… [+1129 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Square makes Tap to Pay on iPhone available to all US sellers",
            "description": "Square has publicly launched its Tap to Pay solution for the iPhone after running an early access program these past few months. That means sellers across the US can now use the company's Point of Sale app to receive payments from customers using just their i…",
            "url": "https://www.engadget.com/square-tap-to-pay-iphone-public-launch-115532796.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/56b1f530-3fe4-11ed-be7f-86dd7ea8b248",
            "publishedAt": "2022-09-29T11:55:32Z",
            "content": "Square has publicly launched its Tap to Pay solution for the iPhone after running an early access program these past few months. That means sellers across the US can now use the company's Point of Sa… [+1187 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Polestar adds Apple CarPlay support to its EVs",
            "description": "Polestar promised Apple CarPlay support for its EVs two years ago, and it's finally delivering. As The Vergeexplains, the car brand has released an over-the-air update for the Polestar 2 that makes CarPlay available on the Android Automotive-based sedan. If y…",
            "url": "https://www.engadget.com/polestar-apple-carplay-support-update-163209915.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/99c49290-f243-11ec-bbab-0ae752589245",
            "publishedAt": "2022-06-22T16:32:09Z",
            "content": "Polestar promised Apple CarPlay support for its EVs two years ago, and it's finally delivering. As The Vergeexplains, the car brand has released an over-the-air update for the Polestar 2 that makes C… [+1374 chars]"
        }
    ];






// async function dataRequest(url){
//     try{
//         const response=await fetch(baseUrl + url + apiKey);
//         console.log(response);
//         const data=response.json();
//         return data;
//     } catch(error){
//         console.log(error);
//     }
// }

function dataRequest(url) {
    if(url === "/top-headlines?country=in&language=en"){
        return newsA;
    } else if(url === "/top-headlines?sources=techcrunch&language=en"){
        return newsB;
    } else if(url === "/everything?q=netflix&sortBy=publishedAt&language=en"){
        return newsC;
    } else if(url === "/everything?q=iphone&language=en&from=2023-03-09&to=2022-03-09&sortBy=popularity"){
        return newsD;
    }
}
function urlRequest(url) {
    dataRequest(url).forEach((item) => {
        cards.innerHTML += `<div class="card">
                                      <div class="image">
                                          <img src="${item.urlToImage ? item.urlToImage : backupImage}" alt="Default News Image">
                                      </div>
                                      <div class="information">
                                          <div>
                                              <p class="title">${item.title}</p>
                                              <p class="description">${item.description}</p>
                                              <p class="time">
                                                  <span>${item.publishedAt.replace("Z", "").split("T")[1]}</span>
                                                  <span>${item.publishedAt.replace("Z", "").split("T")[0]}</span>
                                              </p>
                                          </div>
                                          <div class="other">
                                              <span class="source">${item.source.name}</span>
                                              <a class="url" href="${item.url}" target="_blank">Read Article <i class="bi bi-arrow-right"></i></a>
                                          </div>
                                      </div>
                                  </div>`;
      });
}

// function urlRequest(url){
//     dataRequest(url).then(data => {
//         data.articles.forEach(news => {
//             cards.innerHTML+=`<div class="card">
//                                 <div class="image">
//                                     <img src="${news.urlToImage ? news.urlToImage : backupImage}" alt="Default News Image">
//                                 </div>
//                                 <div class="information">
//                                     <div>
//                                         <p class="title">${news.title}</p>
//                                         <p class="description">${news.description}</p>
//                                         <p class="time">
//                                             <span>${news.publishedAt.replace("Z","").split("T")[1]}</span>
//                                             <span>${news.publishedAt.replace("Z","").split("T")[0]}</span>
//                                         </p>
//                                     </div>
//                                     <div class="other">
//                                         <span class="source">${news.source.name}</span>
//                                         <a class="url" href="${news.url}">Read Article <i class="bi bi-arrow-right"></i></a>
//                                     </div>
//                                 </div>
//                             </div>`;
//         });
//     });
// }
category.addEventListener("click",event => {
   if(event.target.tagName==="SPAN"){
        cards.innerHTML="";
        urlRequest(event.target.dataset.id);
        categorySpan.forEach(item => item.classList.remove("active"));
        event.target.classList.add("active");
   } 
});


urlRequest("/top-headlines?country=in&language=en");
