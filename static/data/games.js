// hello

var games = [
  {
    'id': 'idlebreakout',
    'title': 'Idle Breakout',
    'url': 'https://sobloxsy.github.io/idle-breakout',
    'image': 'https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ'
  },
  {
    'id': 'cuttherope',
    'title': 'Cut the Rope',
    'url': 'https://yell0wsuit.page/assets/games/CutTheRope',
    'image': 'https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY'
  },
  {
    'id': 'papaburgers',
    'title': 'Papa\'s Burgeria',
    'url': 'https://mazahacka2017.github.io/papas-burgeria',
    'image': 'https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg'
  },
  {
    'id': 'jetpackjoyride',
    'title': 'Jetpack Joyride',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/jetpack-joyride/index.html',
    'image': 'https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXzl9r3oMnEWHC',
  },
  {
    'id': 'fnf',
    'title': 'Friday Night Funkin',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/fridaynightfunkin/index.html',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Boyfriend-2.png/250px-Boyfriend-2.png'
  },
  {
    'id': 'paperio2',
    'title': 'Paper.io 2',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/paperio2/index.html',
    'image': 'https://paperio2.online/upload/imgs/options/fav.jpg'
  },
  {
    'id': 'impossiblequiz',
    'title': 'The Impossible Quiz',
    'url': 'https://proudparrot2.github.io/msg-archive/g_mes/impossiblequiz1/impossiblequiz1/index.html',
    'image': 'https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    'id': 'ducklife4',
    'title': 'Duck Life 4',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/ducklife4/index.html',
    'image': 'https://play-lh.googleusercontent.com/AUGkRrKMtUCLVE9vCvlfMY9Ny9EBqzx17yejVtEEhvpkw-H6lJlvBHgCMqPJm8HV_tM'
  },
  {
    'id': 'retrobowl',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/retro-bowl/index.html',
    'title': 'Retro Bowl',
    'image': 'https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ'
  },
  {
    'id': 'templerun2',
    'title': 'Temple Run 2',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/temple-run-2/index.html',
    'image': 'https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA'
  },
  {
    'id': 'minecraft',
    'title': 'Minecraft Classic',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/minecraft-classic/index.html',
    'image': 'https://cdn.iconscout.com/icon/free/png-256/minecraft-2752120-2284937.png'
  },
  {
    'id': 'smashkarts',
    'title': 'Smash Karts',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/d108460237587095c92fe0968f1595f30cf5a5cc/smashkarts/index.html',
    'image': 'https://geometry-dash.co/upload/imgs/smash-karts-logo.png'
  },
  {
    'id': 'roblox',
    'title': "Roblox",
    'url': 'https://nowgg.vercel.app',
    'image': 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht'
  },
  {
    'id': 'tunnelrush',
    'title': 'Tunnel Rush',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/temple-run-2/index.html',
    'image': 'https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg',
  },
  {
    'id': 'slope',
    'title': 'Slope',
    'url': 'https://mathadventure1.github.io/slope/slope/index.html',
    'image': 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    "id": '1v1lol',
    'title': "1v1.lol",
    'url': 'https://docs-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/to@1e8a949f89fcf2b110640c41a0705db01405d161/d7uf4.xml#',
    'image': 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    'id': 'crossyroad',
    'title': 'Crossy Road',
    'url': 'https://yell0wsuit.page/assets/games/crossy-road',
    'image': 'https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png'
  },
  {
    'id': 'subwaysurfers',
    'title': 'Subway Surfers',
    'url': 'https://yell0wsuit.page/assets/games/subway-surfers-unity',
    'image': 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    'id': 'geometrydash',
    'title': 'Geometry Dash',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/geodash/index.html',
    'image': 'https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG'
  },
  {
    'id': 'idlecraft',
    'title': 'Idlecraft',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/grindcraft/index.html',
    'image': 'https://play-lh.googleusercontent.com/Pl3YYYdxM1Lhe-pXFwaLfmzSpqDZqlzvxS7-BH60Mho_cydWeOCkhTCrSgtMEXL54Cm0'
  },
  {
    'id': '8ballpool',
    'title': '8 Ball Pool',
    'url': 'https://8ball-pool.io',
    'image': 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag'
  },
  {
    'id': 'fruitninja',
    'title': 'Fruit Ninja',
    'url': 'https://yell0wsuit.page/assets/games/fruitninja',
    'image': 'https://downloadr2.apkmirror.com/wp-content/uploads/2019/01/5c5122d13cd72.png'
  },
  {
    'id': 'chromedino',
    'title': "Chrome Dino Game",
    'url': 'https://yell0wsuit.page/assets/games/chrome-dino',
    'image': 'https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq'
  },
  {
    'id': 'doodlejump',
    'title': 'Doodle Jump',
    'url': 'https://upload.wikimedia.org/wikipedia/en/a/ac/Doodle_jump_icon.png',
    'image': 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg'
  },
  {
    'id': 'cookieclicker',
    'title': 'Cookie Clicker',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/cookie-clicker/index.html',
    'image': 'https://play-lh.googleusercontent.com/OssE3ON9WsLZedOF39UCgtIHcRYfV0OqQS9O78LfmRdxSyKdHX52G2OFa0LkG6D-k9w'
  },
  {
    'id': 'slither',
    'title': 'slither.io',
    'url': 'https://slither.io',
    'image': 'https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA'
  },
  {
    'id': 'basketballstars',
    'title': 'Basketball Stars',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/d1a97cbddcf69b15adf2ab4a491df717ecf22938/basketball-stars/index.html',
    'image': 'https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I=w240-h480-rw'
  },
  {
    'id': 'amongus',
    'title': 'Among Us',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/d1a97cbddcf69b15adf2ab4a491df717ecf22938/among-us/index.html',
    'image': 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
  },
  {
    'id': 'rocketleague',
    'title': 'Rocket League',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/d1a97cbddcf69b15adf2ab4a491df717ecf22938/Rocket-League/index.html',
    'image': 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
  },
  {
    'id': 'bitlife',
    'title': 'Bitlife',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/d1a97cbddcf69b15adf2ab4a491df717ecf22938/bitlife/index.html',
    'image': 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    'id': 'btd4',
    'title': 'Bloons TD 4',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/d1a97cbddcf69b15adf2ab4a491df717ecf22938/btd4/index.html',
    'image': 'https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg'
  },
  {
    'id': 'ovo',
    'title': 'OvO',
    'url': 'https://purepro4561.github.io/OvO',
    'image': 'https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg=w240-h480-rw'
  },
  {
    'id': 'dogeminer',
    'title': "Doge Miner",
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/DogeMiner/index.html',
    'image': 'https://play-lh.googleusercontent.com/7diC1RZgf6Z5XCspiwJMYD3vQz5TmjFElLw5qnPJZjcjNXgfhepPJzmIBijgraJRd8uv'
  },
  {
    'id': 'aquapark',
    'title': 'aquapark.io',
    'url': 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/aquapark-slides/index.html',
    'image': 'https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6'
  }
]

console.log("Loaded " + games.length + " games")
