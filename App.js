import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export default function App() {
  const logoUrl = 'https://i.postimg.cc/8zTP5pN3/solarium.png';

  const [solarSystemMembers, setSolarSystemMembers] = React.useState([
    {
      name: 'Sun',
      type: 'Main Sequence Star',
      diameter: 1400000,
      bio: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/1073px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg'
    },
    {
      name: 'Mercury',
      type: 'Terrestrial Planet',
      diameter: 4900,
      bio: 'Mercury is the smallest and closest planet to the sun in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1024px-Mercury_in_color_-_Prockter07-edit1.jpg'
    },
    {
      name: 'Venus',
      type: 'Terrestrial Planet',
      diameter: 12100,
      bio: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth\'s night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/1024px-PIA23791-Venus-NewlyProcessedView-20200608.jpg'
    },
    {
      name: 'Earth',
      type: 'Terrestrial Planet',
      diameter: 12700,
      bio: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth\'s surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also by lakes, rivers and other fresh water, which together constitute the hydrosphere.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg'
    },
    {
      name: 'Mars',
      type: 'Terrestrial Planet',
      diameter: 6800,
      bio: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet"',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg'
    },
    {
      name: 'Ceres',
      type: 'Dwarf Planet',
      diameter: 940,
      bio: 'Ceres is the largest object in the main asteroid belt that lies between the orbits of Mars and Jupiter. With a diameter of 940 km, Ceres is both the largest of the asteroids and the only dwarf planet inside Neptune\'s orbit. It is the 25th-largest body in the Solar System within the orbit of Neptune.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29_%28cropped%29.jpg'
    },
    {
      name: 'Jupiter',
      type: 'Gas Giant Planet',
      diameter: 142000,
      bio: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg'
    },
    {
      name: 'Saturn',
      type: 'Gas Giant Planet',
      diameter: 116500,
      bio: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1280px-Saturn_during_Equinox.jpg'
    },
    {
      name: 'Uranus',
      type: 'Ice Giant Planet',
      diameter: 50600,
      bio: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg'
    },
    {
      name: 'Neptune',
      type: 'Ice Giant Planet',
      diameter: 49000,
      bio: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg'
    },
    {
      name: 'Pluto',
      type: 'Dwarf Planet',
      diameter: 2400,
      bio: 'Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. After Pluto was discovered in 1930 it was declared to be the ninth planet from the Sun, only to be reclassified again as a dwarf planet in 2006.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1024px-Pluto_in_True_Color_-_High-Res.jpg'
    }
  ])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image style={{ width: 128, height: 32 }} source={{ uri: logoUrl }} resizeMode='contain' />
      </View>
      <ViewPager style={styles.pager}>
        {
          solarSystemMembers.map((member, index) => (
            <View style={styles.pagerItem} key={index} >
              <View style={styles.card}>
                <Image style={styles.image} source={{ uri: member.image }} resizeMode='contain' />
                <Text style={styles.title}>{member.name.toUpperCase()}</Text>
                <Text style={styles.subtitle}>{member.type.toUpperCase()}</Text>
                <Text style={styles.bio}>{member.bio}</Text>
                <Text style={styles.secondaryText}>DIAMETER: {member.diameter} KM</Text>
              </View>
            </View>
          ))
        }
      </ViewPager>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  pager: {
    flex: 1
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 24
  },
  subtitle: {
    color: '#ffffff',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 24
  },
  bio: {
    color: '#efefef',
    textAlign: 'center',
    marginBottom: 24
  },
  secondaryText: {
    color: '#bcbcbc'
  },
  pagerItem: {
    width: '100%',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '100%',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 256,
    height: 256
  }
});
