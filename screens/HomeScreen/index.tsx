import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CardMusic from '../../components/CardMusic';
import {styles} from './styles';
import Background from '../../components/Background';
import CardList from '../../components/CardList';

const mockData = {
  "tracks": {
    "track": [
      {
        "name": "Creep",
        "duration": "239",
        "listeners": "2895097",
        "mbid": "d11fcceb-dfc5-4d19-b45d-f4e8f6d3eaa6",
        "url": "https://www.last.fm/music/Radiohead/_/Creep",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "Radiohead",
          "mbid": "a74b1b7f-71a5-4011-9441-d0b5e4122711",
          "url": "https://www.last.fm/music/Radiohead"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "0"
        }
      },
      {
        "name": "Do I Wanna Know?",
        "duration": "272",
        "listeners": "2149103",
        "mbid": "f1e57531-e0df-4b3e-938f-1ae30c5b1a11",
        "url": "https://www.last.fm/music/Arctic+Monkeys/_/Do+I+Wanna+Know%3F",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "Arctic Monkeys",
          "mbid": "ada7a83c-e3e1-40f1-93f9-3e73dbc9298a",
          "url": "https://www.last.fm/music/Arctic+Monkeys"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "1"
        }
      },
      {
        "name": "Losing My Religion",
        "duration": "301",
        "listeners": "1856002",
        "mbid": "04233db6-f991-4fb2-bef9-813f95a0bf30",
        "url": "https://www.last.fm/music/R.E.M./_/Losing+My+Religion",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "R.E.M.",
          "mbid": "ea4dfa26-f633-4da6-a52a-f49ea4897b58",
          "url": "https://www.last.fm/music/R.E.M."
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "2"
        }
      },
      {
        "name": "Seven Nation Army",
        "duration": "449",
        "listeners": "2363060",
        "mbid": "24cc8311-98fd-423a-bed1-97728f5eabc5",
        "url": "https://www.last.fm/music/The+White+Stripes/_/Seven+Nation+Army",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "The White Stripes",
          "mbid": "11ae9fbb-f3d7-4a47-936f-4c0a04d3b3b5",
          "url": "https://www.last.fm/music/The+White+Stripes"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "3"
        }
      },
      {
        "name": "Take Me Out",
        "duration": "256",
        "listeners": "2387054",
        "mbid": "11b7c3d2-8a49-4812-95dc-aef93c4cec37",
        "url": "https://www.last.fm/music/Franz+Ferdinand/_/Take+Me+Out",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "Franz Ferdinand",
          "mbid": "aa7a2827-f74b-473c-bd79-03d065835cf7",
          "url": "https://www.last.fm/music/Franz+Ferdinand"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "4"
        }
      },
      {
        "name": "Last Nite",
        "duration": "0",
        "listeners": "1676006",
        "mbid": "4ce968a0-4e52-40e3-9f77-1b726200a3c0",
        "url": "https://www.last.fm/music/The+Strokes/_/Last+Nite",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "The Strokes",
          "mbid": "f181961b-20f7-459e-89de-920ef03c7ed0",
          "url": "https://www.last.fm/music/The+Strokes"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "5"
        }
      },
      {
        "name": "Reptilia",
        "duration": "214",
        "listeners": "1940742",
        "mbid": "8eea2d35-8fe5-4142-864d-119914cfb628",
        "url": "https://www.last.fm/music/The+Strokes/_/Reptilia",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "The Strokes",
          "mbid": "f181961b-20f7-459e-89de-920ef03c7ed0",
          "url": "https://www.last.fm/music/The+Strokes"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "6"
        }
      },
      {
        "name": "Smells Like Teen Spirit",
        "duration": "301",
        "listeners": "3224799",
        "mbid": "0ebe2d92-a11d-4b2b-9922-806383074ed7",
        "url": "https://www.last.fm/music/Nirvana/_/Smells+Like+Teen+Spirit",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "Nirvana",
          "mbid": "9282c8b4-ca0b-4c6b-b7e3-4f7762dfc4d6",
          "url": "https://www.last.fm/music/Nirvana"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "7"
        }
      },
      {
        "name": "Mr. Brightside",
        "duration": "224",
        "listeners": "3096471",
        "mbid": "37d516ab-d61f-4bcb-9316-7a0b3eb845a8",
        "url": "https://www.last.fm/music/The+Killers/_/Mr.+Brightside",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "The Killers",
          "mbid": "95e1ead9-4d31-4808-a7ac-32c3614c116b",
          "url": "https://www.last.fm/music/The+Killers"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "8"
        }
      },
      {
        "name": "Sex on Fire",
        "duration": "222",
        "listeners": "2187083",
        "mbid": "051caac1-1f67-4733-80b5-62cb32660daa",
        "url": "https://www.last.fm/music/Kings+of+Leon/_/Sex+on+Fire",
        "streamable": {
          "#text": "0",
          "fulltrack": "0"
        },
        "artist": {
          "name": "Kings of Leon",
          "mbid": "6ffb8ea9-2370-44d8-b678-e9237bbd347b",
          "url": "https://www.last.fm/music/Kings+of+Leon"
        },
        "image": [
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "small"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "medium"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "large"
          },
          {
            "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
            "size": "extralarge"
          }
        ],
        "@attr": {
          "rank": "9"
        }
      },
    ]
  }
}

function HomeScreen() {
  return (
    <Background>
      <Text style={styles.title}>Top 20 Colombia</Text>
      <View style={styles.constainerList}>
        <CardList />
      </View>
    </Background>
  );
}

export default HomeScreen;
