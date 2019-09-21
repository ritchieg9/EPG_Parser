var http = require("http");
var builder = require("xmlbuilder");

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello");
    res.end();
  })
  .listen(8080); //the server object listens on port 8080
/*
axios
  .get(
    "https://api.fubo.tv/v3/kgraph/v2/epg?startTime=2019-09-20T00%3A00%3A00.000Z&endTime=2019-09-20T06%3A00%3A00.000Z"
  )
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("maxi");
  });
*/

let epg = [
  {
    airings: [
      {
        airingId:
          "SH016908010000_19572_2019-09-20T00:00:00Z_2019-09-20T00:30:00Z",
        tmsId: "SH016908010000",
        sourceType: "lookback",
        contentType: "episode",
        title: "KPIX 5 News at 5pm",
        description: "",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p9752640_b_h10_aa.jpg",
        startDateTime: "2019-09-20T00:00:00Z",
        endDateTime: "2019-09-20T00:30:00Z",
        lookbackStartDateTime: "2019-09-20T00:30:00Z",
        lookbackEndDateTime: "2019-09-23T00:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p9752640_b_h10_aa.jpg"
        },
        seriesId: 9752640,
        seriesName: "KPIX 5 News at 5pm",
        isNew: true,
        fullStartOver: false,
        heading: "KPIX 5 News at 5pm",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "SH016908080000_19572_2019-09-20T00:30:00Z_2019-09-20T01:00:00Z",
        tmsId: "SH016908080000",
        sourceType: "lookback",
        contentType: "episode",
        title: "KPIX 5 News at 5:30pm",
        description: "",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p9752648_b_h10_aa.jpg",
        startDateTime: "2019-09-20T00:30:00Z",
        endDateTime: "2019-09-20T01:00:00Z",
        lookbackStartDateTime: "2019-09-20T01:00:00Z",
        lookbackEndDateTime: "2019-09-23T01:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p9752648_b_h10_aa.jpg"
        },
        seriesId: 9752648,
        seriesName: "KPIX 5 News at 5:30pm",
        isNew: true,
        fullStartOver: false,
        heading: "KPIX 5 News at 5:30pm",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "SH016908020000_19572_2019-09-20T01:00:00Z_2019-09-20T01:30:00Z",
        tmsId: "SH016908020000",
        sourceType: "lookback",
        contentType: "episode",
        title: "KPIX 5 News at 6pm",
        description:
          "Complete Bay Area coverage including stories you will only see on KPIX 5 news.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p9752642_b_h10_aa.jpg",
        startDateTime: "2019-09-20T01:00:00Z",
        endDateTime: "2019-09-20T01:30:00Z",
        lookbackStartDateTime: "2019-09-20T01:30:00Z",
        lookbackEndDateTime: "2019-09-23T01:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p9752642_b_h10_aa.jpg"
        },
        seriesId: 9752642,
        seriesName: "KPIX 5 News at 6pm",
        isNew: true,
        fullStartOver: false,
        heading: "KPIX 5 News at 6pm",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "EP032582570049_19572_2019-09-20T01:30:00Z_2019-09-20T02:00:00Z",
        tmsId: "EP032582570049",
        sourceType: "lookback",
        contentType: "episode",
        title: "CBS Evening News With Norah O'Donnell",
        description:
          'Emmy-winning journalist Norah O\'Donnell -- who most recently served as a co-host of "CBS This Morning" and a "60 Minutes" correspondent -- brings eight years of experience with CBS News to the anchor chair most recently held by Jeff Glor, offering a weeknight survey of major news stories. Additionally, each broadcast offers human-interest segments as well as interviews with newsmakers.',
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p17079977_i_h8_ab.jpg",
        startDateTime: "2019-09-20T01:30:00Z",
        endDateTime: "2019-09-20T02:00:00Z",
        lookbackStartDateTime: "2019-09-20T02:00:00Z",
        lookbackEndDateTime: "2019-09-23T02:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p17079977_b_h8_ab.jpg"
        },
        seriesId: 17079977,
        seriesName: "CBS Evening News With Norah O'Donnell",
        seasonNumber: 2019,
        episodeNumber: 49,
        isNew: true,
        fullStartOver: false,
        heading: "CBS Evening News With Norah O'Donnell",
        subheading: "S2019, EP49"
      },
      {
        airingId:
          "SH031443700000_19572_2019-09-20T02:00:00Z_2019-09-20T02:30:00Z",
        tmsId: "SH031443700000",
        sourceType: "lookback",
        contentType: "episode",
        title: "KPIX 5 News at 7pm",
        description:
          "Complete Bay Area coverage including stories you will only see on KPIX 5 news.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p16475019_st_h10_aa.jpg",
        startDateTime: "2019-09-20T02:00:00Z",
        endDateTime: "2019-09-20T02:30:00Z",
        lookbackStartDateTime: "2019-09-20T02:30:00Z",
        lookbackEndDateTime: "2019-09-23T02:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p16475019_st_h10_aa.jpg"
        },
        seriesId: 16475019,
        seriesName: "KPIX 5 News at 7pm",
        isNew: true,
        fullStartOver: false,
        heading: "KPIX 5 News at 7pm",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "EP013320551726_19572_2019-09-20T02:30:00Z_2019-09-20T03:00:00Z",
        tmsId: "EP013320551726",
        sourceType: "lookback",
        contentType: "episode",
        title: "Family Feud",
        description:
          "Steve Harvey assumes the hosting duties for this daytime game show in which five members of one family are pitted against five members of another family. Each team's goal is to guess the results of audience survey questions. A player from each team initially faces off, answering the question to earn the chance to either pass or play. The winning family gets a chance to earn extra cash in a bonus round.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p8314079_i_h8_ab.jpg",
        startDateTime: "2019-09-20T02:30:00Z",
        endDateTime: "2019-09-20T03:00:00Z",
        lookbackStartDateTime: "2019-09-20T03:00:00Z",
        lookbackEndDateTime: "2019-09-23T03:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p8314079_b_h10_ab.jpg"
        },
        seriesId: 8314079,
        seriesName: "Family Feud",
        seasonNumber: 21,
        episodeNumber: 7,
        rating: "TVPG",
        isNew: true,
        fullStartOver: false,
        heading: "Family Feud",
        subheading: "S21, EP7"
      },
      {
        airingId:
          "EP026422390044_19572_2019-09-20T03:00:00Z_2019-09-20T03:31:00Z",
        tmsId: "EP026422390044",
        sourceType: "lookback",
        contentType: "episode",
        title: "Young Sheldon",
        description:
          "The Coopers help Pastor Jeff through a rough patch in his marriage; Sheldon pressures church members for donations when Mary takes him to work for a day.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p16768730_e_h8_aa.jpg",
        startDateTime: "2019-09-20T03:00:00Z",
        endDateTime: "2019-09-20T03:31:00Z",
        lookbackStartDateTime: "2019-09-20T03:31:00Z",
        lookbackEndDateTime: "2019-09-23T03:31:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p13923677_b_h8_ah.jpg"
        },
        seriesId: 13923677,
        seriesName: "Young Sheldon",
        episodeName: "A Broken Heart and a Crock Monster",
        seasonNumber: 2,
        episodeNumber: 21,
        rating: "TVPG",
        isNew: false,
        fullStartOver: false,
        heading: "Young Sheldon",
        subheading: 'S2, EP21 "A Broken Heart and a Crock Monster"'
      },
      {
        airingId:
          "EP026422390043_19572_2019-09-20T03:31:00Z_2019-09-20T04:00:00Z",
        tmsId: "EP026422390043",
        sourceType: "lookback",
        contentType: "episode",
        title: "Young Sheldon",
        description:
          "Sheldon invites the entire school to a party for the Nobel Prize announcements; Meemaw learns more about Dr. Sturgis' past; Georgie's desire for cable TV leads to a standoff between him and George Sr.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p16685034_e_h8_aa.jpg",
        startDateTime: "2019-09-20T03:31:00Z",
        endDateTime: "2019-09-20T04:00:00Z",
        lookbackStartDateTime: "2019-09-20T04:00:00Z",
        lookbackEndDateTime: "2019-09-23T04:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p13923677_b_h8_ah.jpg"
        },
        seriesId: 13923677,
        seriesName: "Young Sheldon",
        episodeName: "A Swedish Science Thing and the Equation for Toast",
        seasonNumber: 2,
        episodeNumber: 22,
        rating: "TVPG",
        isNew: false,
        fullStartOver: false,
        heading: "Young Sheldon",
        subheading:
          'S2, EP22 "A Swedish Science Thing and the Equation for Toast"'
      },
      {
        airingId:
          "EP003781390730_19572_2019-09-20T04:00:00Z_2019-09-20T05:00:00Z",
        tmsId: "EP003781390730",
        sourceType: "stream",
        contentType: "episode",
        title: "Big Brother",
        description: "A houseguest is evicted.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p188043_i_h8_ab.jpg",
        startDateTime: "2019-09-20T04:00:00Z",
        endDateTime: "2019-09-20T05:00:00Z",
        lookbackStartDateTime: "2019-09-20T05:00:00Z",
        lookbackEndDateTime: "2019-09-23T05:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p188043_b_h8_ad.jpg"
        },
        seriesId: 188043,
        seriesName: "Big Brother",
        seasonNumber: 21,
        episodeNumber: 38,
        rating: "TVPG",
        isNew: true,
        fullStartOver: false,
        heading: "Big Brother",
        subheading: "S21, EP38"
      },
      {
        airingId:
          "EP029715140015_19572_2019-09-20T05:00:00Z_2019-09-20T06:00:00Z",
        tmsId: "EP029715140015",
        sourceType: "stream",
        contentType: "episode",
        title: "FBI",
        description:
          "After an investigative journalist is murdered, the team uncovers information linking the suspect to past cases; the victim's death strikes a chord with Maggie, leaving her desperate for answers in regard to a traumatic event in her personal life.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p16522721_e_h8_aa.jpg",
        startDateTime: "2019-09-20T05:00:00Z",
        endDateTime: "2019-09-20T06:00:00Z",
        lookbackStartDateTime: "2019-09-20T06:00:00Z",
        lookbackEndDateTime: "2019-09-23T06:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p15528073_b_h8_ae.jpg"
        },
        seriesId: 15528073,
        seriesName: "FBI",
        episodeName: "Exposed",
        seasonNumber: 1,
        episodeNumber: 14,
        rating: "TVPG",
        isNew: false,
        fullStartOver: false,
        heading: "FBI",
        subheading: 'S1, EP14 "Exposed"'
      },
      {
        airingId:
          "SH016908040000_19572_2019-09-20T06:00:00Z_2019-09-20T06:35:00Z",
        tmsId: "SH016908040000",
        sourceType: "stream",
        contentType: "episode",
        title: "KPIX 5 News at 11pm",
        description: "",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p9752644_b_h10_aa.jpg",
        startDateTime: "2019-09-20T06:00:00Z",
        endDateTime: "2019-09-20T06:35:00Z",
        lookbackStartDateTime: "2019-09-20T06:35:00Z",
        lookbackEndDateTime: "2019-09-23T06:35:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p9752644_b_h10_aa.jpg"
        },
        seriesId: 9752644,
        seriesName: "KPIX 5 News at 11pm",
        isNew: true,
        fullStartOver: false,
        heading: "KPIX 5 News at 11pm",
        subheading: "September 20, 2019"
      }
    ],
    station: {
      id: 19572,
      name: "CBS (KPIX – San Francisco, CA)",
      logoOnWhiteUrl:
        "https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/cbslogo_c.png",
      logoOnDarkUrl:
        "https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/cbsLogo_m.png",
      allowDVR: true,
      callSign: "KPIX",
      displayNetworkId: 9,
      favorite: false,
      startoverPauseFF: true
    }
  },
  {
    airings: [
      {
        airingId:
          "EP005544687804_19571_2019-09-19T23:00:00Z_2019-09-20T02:00:00Z",
        tmsId: "EP005544687804",
        sourceType: "lookback",
        contentType: "match",
        title: "MLB Baseball",
        description: "All the latest action from Major League Baseball.",
        letterImageUrl:
          "https://fubotv-v3-dev-custom-assets.imgix.net/sports_logos/baseballbackground.png",
        startDateTime: "2019-09-19T23:00:00Z",
        endDateTime: "2019-09-20T02:00:00Z",
        lookbackStartDateTime: "2019-09-20T02:00:00Z",
        lookbackEndDateTime: "2019-09-23T02:00:00Z",
        homeTeam: {
          teamId: 8,
          teamName: "Cleveland Indians",
          properName: "Cleveland Indians",
          logoUrl: "https://fubotv-v3-dev.imgix.net/assets/t8_l_h9_aa.png"
        },
        awayTeam: {
          teamId: 10,
          teamName: "Detroit Tigers",
          properName: "Detroit Tigers",
          logoUrl: "https://fubotv-v3-dev.imgix.net/assets/t10_l_h9_ab.png"
        },
        teamTemplate: "awayAtHome",
        isNew: true,
        fullStartOver: false,
        heading: "Detroit Tigers at Cleveland Indians",
        subheading: "MLB"
      },
      {
        airingId:
          "SH031413530000_19571_2019-09-20T02:00:00Z_2019-09-20T02:30:00Z",
        tmsId: "SH031413530000",
        sourceType: "lookback",
        contentType: "episode",
        title: "KTVU FOX 2 News at 7pm",
        description: "",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p16455754_st_h10_aa.jpg",
        startDateTime: "2019-09-20T02:00:00Z",
        endDateTime: "2019-09-20T02:30:00Z",
        lookbackStartDateTime: "2019-09-20T02:30:00Z",
        lookbackEndDateTime: "2019-09-23T02:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p16455754_st_h10_aa.jpg"
        },
        seriesId: 16455754,
        seriesName: "KTVU FOX 2 News at 7pm",
        isNew: true,
        fullStartOver: false,
        heading: "KTVU FOX 2 News at 7pm",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "SH026135180000_19571_2019-09-20T02:30:00Z_2019-09-20T03:00:00Z",
        tmsId: "SH026135180000",
        sourceType: "lookback",
        contentType: "episode",
        title: "KTVU FOX 2 News",
        description: "",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p13773800_i_h10_aa.jpg",
        startDateTime: "2019-09-20T02:30:00Z",
        endDateTime: "2019-09-20T03:00:00Z",
        lookbackStartDateTime: "2019-09-20T03:00:00Z",
        lookbackEndDateTime: "2019-09-23T03:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p13773800_i_h10_aa.jpg"
        },
        seriesId: 13773800,
        seriesName: "KTVU FOX 2 News",
        isNew: true,
        fullStartOver: false,
        heading: "KTVU FOX 2 News",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "EP009311820228_19571_2019-09-20T03:00:00Z_2019-09-20T03:30:00Z",
        tmsId: "EP009311820228",
        sourceType: "lookback",
        contentType: "episode",
        title: "The Big Bang Theory",
        description:
          "Sheldon gets jealous when a co-worker wins an award; Wolowitz finds an old remote control Stephen Hawking action figure that he made.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p13484023_e_h8_ad.jpg",
        startDateTime: "2019-09-20T03:00:00Z",
        endDateTime: "2019-09-20T03:30:00Z",
        lookbackStartDateTime: "2019-09-20T03:30:00Z",
        lookbackEndDateTime: "2019-09-23T03:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p185554_b_h8_az.jpg"
        },
        seriesId: 185554,
        seriesName: "The Big Bang Theory",
        episodeName: "The Geology Elevation",
        seasonNumber: 10,
        episodeNumber: 9,
        rating: "TVPG",
        isNew: false,
        fullStartOver: false,
        heading: "The Big Bang Theory",
        subheading: 'S10, EP9 "The Geology Elevation"'
      },
      {
        airingId:
          "EP009311820094_19571_2019-09-20T03:30:00Z_2019-09-20T04:00:00Z",
        tmsId: "EP009311820094",
        sourceType: "lookback",
        contentType: "episode",
        title: "The Big Bang Theory",
        description:
          "Amy and Leonard try to become better acquainted; Bernadette, Howard and Mrs. Wolowitz spend the weekend together.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p8845658_e_h8_ab.jpg",
        startDateTime: "2019-09-20T03:30:00Z",
        endDateTime: "2019-09-20T04:00:00Z",
        lookbackStartDateTime: "2019-09-20T04:00:00Z",
        lookbackEndDateTime: "2019-09-23T04:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p185554_b_h8_az.jpg"
        },
        seriesId: 185554,
        seriesName: "The Big Bang Theory",
        episodeName: "The Pulled Groin Extrapolation",
        seasonNumber: 5,
        episodeNumber: 3,
        rating: "TVPG",
        isNew: false,
        fullStartOver: false,
        heading: "The Big Bang Theory",
        subheading: 'S5, EP3 "The Pulled Groin Extrapolation"'
      },
      {
        airingId:
          "EP011581240086_19571_2019-09-20T04:00:00Z_2019-09-20T04:30:00Z",
        tmsId: "EP011581240086",
        sourceType: "stream",
        contentType: "episode",
        title: "Modern Family",
        description:
          "When Gloria's mother and sister visit, they bring traditions, baby names and family baggage; Phil helps the kids with their problems; Mitchell and Cameron try to correct Lily's bad habits.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p9653912_e_h8_ab.jpg",
        startDateTime: "2019-09-20T04:00:00Z",
        endDateTime: "2019-09-20T04:30:00Z",
        lookbackStartDateTime: "2019-09-20T04:30:00Z",
        lookbackEndDateTime: "2019-09-23T04:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p3560360_b_h8_nw.jpg"
        },
        seriesId: 3560360,
        seriesName: "Modern Family",
        episodeName: "Fulgencio",
        seasonNumber: 4,
        episodeNumber: 13,
        rating: "TVPG",
        isNew: false,
        fullStartOver: false,
        heading: "Modern Family",
        subheading: 'S4, EP13 "Fulgencio"'
      },
      {
        airingId:
          "EP011581240090_19571_2019-09-20T04:30:00Z_2019-09-20T05:00:00Z",
        tmsId: "EP011581240090",
        sourceType: "stream",
        contentType: "episode",
        title: "Modern Family",
        description:
          'When the lead in the school\'s production of "Phantom of the Opera" gets sick, Manny is willing to do anything to land the lead; Phil and Jay wind up in a golf-off with Mitch and Pepper; Gloria and Alex visit a psychic.',
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p9724719_e_h8_ab.jpg",
        startDateTime: "2019-09-20T04:30:00Z",
        endDateTime: "2019-09-20T05:00:00Z",
        lookbackStartDateTime: "2019-09-20T05:00:00Z",
        lookbackEndDateTime: "2019-09-23T05:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p3560360_b_h8_nw.jpg"
        },
        seriesId: 3560360,
        seriesName: "Modern Family",
        episodeName: "A Slight at the Opera",
        seasonNumber: 4,
        episodeNumber: 14,
        rating: "TVPG",
        isNew: false,
        fullStartOver: false,
        heading: "Modern Family",
        subheading: 'S4, EP14 "A Slight at the Opera"'
      },
      {
        airingId:
          "SH022216020000_19571_2019-09-20T05:00:00Z_2019-09-20T06:00:00Z",
        tmsId: "SH022216020000",
        sourceType: "stream",
        contentType: "episode",
        title: "The Ten O'clock News on KTVU Fox 2",
        description:
          "Major local news covering the stories that matter most to the Bay Area; weather reports; sports.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p11919777_i_h10_ab.jpg",
        startDateTime: "2019-09-20T05:00:00Z",
        endDateTime: "2019-09-20T06:00:00Z",
        lookbackStartDateTime: "2019-09-20T06:00:00Z",
        lookbackEndDateTime: "2019-09-23T06:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p11919777_i_h10_ab.jpg"
        },
        seriesId: 11919777,
        seriesName: "The Ten O'clock News on KTVU Fox 2",
        isNew: true,
        fullStartOver: false,
        heading: "The Ten O'Clock News on KTVU FOX 2",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "SH026570630000_19571_2019-09-20T06:00:00Z_2019-09-20T06:30:00Z",
        tmsId: "SH026570630000",
        sourceType: "stream",
        contentType: "episode",
        title: "The Eleven O'Clock News on KTVU FOX 2",
        description:
          "Major local news covering the stories that matter most to the Bay Area; weather reports; sports.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p13994275_b_h10_ac.jpg",
        startDateTime: "2019-09-20T06:00:00Z",
        endDateTime: "2019-09-20T06:30:00Z",
        lookbackStartDateTime: "2019-09-20T06:30:00Z",
        lookbackEndDateTime: "2019-09-23T06:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p13994275_b_h10_ac.jpg"
        },
        seriesId: 13994275,
        seriesName: "The Eleven O'Clock News on KTVU FOX 2",
        isNew: true,
        fullStartOver: false,
        heading: "The Eleven O'Clock News on KTVU FOX 2",
        subheading: "September 20, 2019"
      }
    ],
    station: {
      id: 19571,
      name: "FOX (KTVU - San Francisco, CA)",
      logoOnWhiteUrl:
        "https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/fox_c.png",
      logoOnDarkUrl:
        "https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/fox_m.png",
      allowDVR: true,
      callSign: "KTVU",
      displayNetworkId: 23,
      favorite: false,
      startoverPauseFF: true
    }
  },
  {
    airings: [
      {
        airingId:
          "SH014426910000_21785_2019-09-20T00:00:00Z_2019-09-20T00:30:00Z",
        tmsId: "SH014426910000",
        sourceType: "lookback",
        contentType: "episode",
        title: "NBC Bay Area News at 5",
        description:
          "The latest local news, weather and investigative stories impacting the community.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p8776719_i_h10_aa.jpg",
        startDateTime: "2019-09-20T00:00:00Z",
        endDateTime: "2019-09-20T00:30:00Z",
        lookbackStartDateTime: "2019-09-20T00:30:00Z",
        lookbackEndDateTime: "2019-09-23T00:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p8776719_b_h8_ac.jpg"
        },
        seriesId: 8776719,
        seriesName: "NBC Bay Area News at 5",
        isNew: true,
        fullStartOver: false,
        heading: "NBC Bay Area News at 5",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "EP023034511386_21785_2019-09-20T00:30:00Z_2019-09-20T01:00:00Z",
        tmsId: "EP023034511386",
        sourceType: "lookback",
        contentType: "episode",
        title: "NBC Nightly News With Lester Holt",
        description:
          "Lester Holt reports the day's major international and domestic news stories each weeknight. The broadcasts also feature human-interest segments called Making a Difference, which spotlight ordinary Americans who positively affect the lives of those around them.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p12308123_i_h8_ac.jpg",
        startDateTime: "2019-09-20T00:30:00Z",
        endDateTime: "2019-09-20T01:00:00Z",
        lookbackStartDateTime: "2019-09-20T01:00:00Z",
        lookbackEndDateTime: "2019-09-23T01:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p12308123_b_h10_ab.jpg"
        },
        seriesId: 12308123,
        seriesName: "NBC Nightly News With Lester Holt",
        isNew: true,
        fullStartOver: false,
        heading: "NBC Nightly News With Lester Holt",
        subheading: "September 19, 2019"
      },
      {
        airingId:
          "SH014426920000_21785_2019-09-20T01:00:00Z_2019-09-20T02:00:00Z",
        tmsId: "SH014426920000",
        sourceType: "lookback",
        contentType: "episode",
        title: "NBC Bay Area News at 6",
        description:
          "The latest local news, weather and investigative stories impacting the community.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p8776722_i_h10_aa.jpg",
        startDateTime: "2019-09-20T01:00:00Z",
        endDateTime: "2019-09-20T02:00:00Z",
        lookbackStartDateTime: "2019-09-20T02:00:00Z",
        lookbackEndDateTime: "2019-09-23T02:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p8776722_b_h8_ac.jpg"
        },
        seriesId: 8776722,
        seriesName: "NBC Bay Area News at 6",
        isNew: true,
        fullStartOver: false,
        heading: "NBC Bay Area News at 6",
        subheading: "September 20, 2019"
      },
      {
        airingId:
          "EP001887076165_21785_2019-09-20T02:00:00Z_2019-09-20T02:30:00Z",
        tmsId: "EP001887076165",
        sourceType: "lookback",
        contentType: "episode",
        title: "Access Hollywood",
        description:
          'An interview with Brad Pitt at the Hollywood premiere of "Ad Astra."',
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p184468_i_h8_ah.jpg",
        startDateTime: "2019-09-20T02:00:00Z",
        endDateTime: "2019-09-20T02:30:00Z",
        lookbackStartDateTime: "2019-09-20T02:30:00Z",
        lookbackEndDateTime: "2019-09-23T02:30:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p184468_b_h10_aj.jpg"
        },
        seriesId: 184468,
        seriesName: "Access Hollywood",
        seasonNumber: 24,
        episodeNumber: 10,
        rating: "TVPG",
        isNew: true,
        fullStartOver: false,
        heading: "Access Hollywood",
        subheading: "S24, EP10"
      },
      {
        airingId:
          "EP032815470009_21785_2019-09-20T02:30:00Z_2019-09-20T03:00:00Z",
        tmsId: "EP032815470009",
        sourceType: "lookback",
        contentType: "episode",
        title: "All Access",
        description:
          '"All Access" provides a deep dive into the day\'s top entertainment headlines, true crime cases and human interest stories.',
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p17198904_i_h8_aa.jpg",
        startDateTime: "2019-09-20T02:30:00Z",
        endDateTime: "2019-09-20T03:00:00Z",
        lookbackStartDateTime: "2019-09-20T03:00:00Z",
        lookbackEndDateTime: "2019-09-23T03:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p17198904_b_h10_aa.jpg"
        },
        seriesId: 17198904,
        seriesName: "All Access",
        seasonNumber: 1,
        episodeNumber: 9,
        rating: "TVPG",
        isNew: true,
        fullStartOver: false,
        heading: "All Access",
        subheading: "S1, EP9"
      },
      {
        airingId:
          "SH033007900000_21785_2019-09-20T03:00:00Z_2019-09-20T04:00:00Z",
        tmsId: "SH033007900000",
        sourceType: "lookback",
        contentType: "other",
        title: "Return to Downton Abbey: A Grand Event",
        description:
          "Celebrities, cast members and other special guests revisit the series with behind-the-scenes looks at their favorite moments from the show and more, including a unique view of Highclere Castle, the historical estate used as its primary location.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p17309051_b_h8_ac.jpg",
        startDateTime: "2019-09-20T03:00:00Z",
        endDateTime: "2019-09-20T04:00:00Z",
        lookbackStartDateTime: "2019-09-20T04:00:00Z",
        lookbackEndDateTime: "2019-09-23T04:00:00Z",
        rating: "TVPG",
        isNew: true,
        fullStartOver: false,
        heading: "Return to Downton Abbey: A Grand Event",
        subheading: ""
      },
      {
        airingId:
          "SH032999550000_21785_2019-09-20T04:00:00Z_2019-09-20T05:00:00Z",
        tmsId: "SH032999550000",
        sourceType: "stream",
        contentType: "other",
        title: "The Paley Center Salutes The Good Place",
        description:
          'The stars and producers of "The Good Place" celebrate the show by taking viewers behind the scenes for in-depth interviews with the cast and crew, as well as a closer look at the costumes, special effects and favorite clips.',
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p17304094_b_h8_ac.jpg",
        startDateTime: "2019-09-20T04:00:00Z",
        endDateTime: "2019-09-20T05:00:00Z",
        lookbackStartDateTime: "2019-09-20T05:00:00Z",
        lookbackEndDateTime: "2019-09-23T05:00:00Z",
        rating: "TVPG",
        isNew: true,
        fullStartOver: false,
        heading: "The Paley Center Salutes The Good Place",
        subheading: ""
      },
      {
        airingId:
          "EP003169780535_21785_2019-09-20T05:00:00Z_2019-09-20T06:00:00Z",
        tmsId: "EP003169780535",
        sourceType: "stream",
        contentType: "episode",
        title: "Law \u0026 Order: Special Victims Unit",
        description:
          "When a teenager is found dead in the Hudson River, Lt. Benson suspects Rob Miller is behind the mysterious death but can't prove it; despite having only circumstantial evidence, ADA Stone takes the case to court before Miller can destroy more lives.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p184536_i_h8_ag.jpg",
        startDateTime: "2019-09-20T05:00:00Z",
        endDateTime: "2019-09-20T06:00:00Z",
        lookbackStartDateTime: "2019-09-20T06:00:00Z",
        lookbackEndDateTime: "2019-09-23T06:00:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p184536_b_h8_bw.jpg"
        },
        seriesId: 184536,
        seriesName: "Law \u0026 Order: Special Victims Unit",
        episodeName: "End Game",
        seasonNumber: 20,
        episodeNumber: 24,
        rating: "TV14",
        isNew: false,
        fullStartOver: false,
        heading: "Law \u0026 Order: Special Victims Unit",
        subheading: 'S20, EP24 "End Game"'
      },
      {
        airingId:
          "SH013255550000_21785_2019-09-20T06:00:00Z_2019-09-20T06:34:00Z",
        tmsId: "SH013255550000",
        sourceType: "stream",
        contentType: "episode",
        title: "NBC Bay Area News at 11",
        description:
          "The latest local news, weather and investigative stories impacting the community.",
        letterImageUrl:
          "https://fubotv-v3-dev.imgix.net/assets/p8288160_i_h10_aa.jpg",
        startDateTime: "2019-09-20T06:00:00Z",
        endDateTime: "2019-09-20T06:34:00Z",
        lookbackStartDateTime: "2019-09-20T06:34:00Z",
        lookbackEndDateTime: "2019-09-23T06:34:00Z",
        series: {
          imageWithTitleUrl:
            "https://fubotv-v3-dev.imgix.net/assets/p8288160_b_h8_ac.jpg"
        },
        seriesId: 8288160,
        seriesName: "NBC Bay Area News at 11",
        isNew: true,
        fullStartOver: false,
        heading: "NBC Bay Area News at 11",
        subheading: "September 20, 2019"
      }
    ],
    station: {
      id: 21785,
      name: "NBC (KNTVDT – San Francisco, CA)",
      logoOnWhiteUrl:
        "https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/nbc_c.png",
      logoOnDarkUrl:
        "https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/nbc_m.png",
      allowDVR: true,
      callSign: "KNTV",
      displayNetworkId: 40,
      favorite: false,
      startoverPauseFF: true
    }
  }
];
//console.log(epg);
//console.log(epg.length);

var channelArray = new Array();
var programmeArray = new Array();
for (var i = 0; i < epg.length; i++) {
  var id = epg[i].station.id;
  var channelName = epg[i].station.name;
  //var icon = epg[i].station.logoOnDarkUrl;
  //var callSign = epg[i].station.callSign;

  channelArray.push({
    "@id": id,
    "display-name": {
      "#text": channelName // text node
    }
  });

  for (var j = 0; j < epg[i].airings.length; j++) {
    var title = epg[i].airings[j].title;
    var startDateTime = epg[i].airings[j].startDateTime;
    var endDateTime = epg[i].airings[j].endDateTime;

    programmeArray.push({
      "@start": startDateTime,
      "@stop": endDateTime,
      "@channel": id,
      "display-name": {
        "#text": title // text node
      }
    });
  }
}

console.log(channelArray);

var obj = {
  tv: {
    channel: [channelArray],
    programme: [programmeArray]
  }
};

var xmls = builder.create(obj).end({ pretty: true });
console.log(xmls);

var xml = builder
  .create("tv")
  .ele("channel", { id: "123" })
  .ele("display-name", "Sample Name")
  .end({ pretty: true });

//console.log(xml);
