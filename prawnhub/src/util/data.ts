const prawnImages = [
    {title: "Jumbo Shrimp Scampi Sauteeing in Butter and Olive Oil", src: "istockphoto", views: "17.2M",link: "https://media.istockphoto.com/id/469311080/photo/jumbo-shrimp-scampi-sauteeing-in-butter-and-olive-oil.jpg?s=612x612&w=0&k=20&c=zKkCXnYEIzgx4DRKWtHbFiRZksHpN4ijtWM5_EqdI2s="},
    {title: "Garlic Prawns or Shrimp in black rustic bowl with crusty bread", src: "istockphoto", views: "12.2M", link: "https://media.istockphoto.com/id/1365258650/photo/garlic-prawns-or-shrimp-in-black-rustic-bowl-with-crusty-bread.jpg?s=612x612&w=0&k=20&c=CMHHR4Am085u24dEBwAnONImccKddNLZz8_4QEvRV1I="},
    {title: "Prawn and avocado salad", src: "istockphoto", views: "8.2M", link: "https://media.istockphoto.com/id/184853716/photo/prawn-and-avocado-salad.jpg?s=612x612&w=0&k=20&c=Fbqdhc8li-GB6oYv69MU-YQK6VP4yLDcqOFjl6XBBXg="},
    {title: "Red shrimps copy space tasty plate.", src: "istockphotos", views: "12.5M", link: "https://media.istockphoto.com/id/1367395659/photo/red-shrimps-copy-space-tasty-plate.jpg?s=612x612&w=0&k=20&c=6MmflqPfQvKkAA71cMATMCBYuvmkj8_AxZgQU2LdelY="},
    {title: "Fresh red shrimps seafood from Mediterranean sea in ice full.", src: "istockphoto", views: "92.1M", link: "https://media.istockphoto.com/id/1330509370/photo/fresh-red-shrimps-seafood-from-mediterranean-sea-in-ice-full-frame.jpg?s=612x612&w=0&k=20&c=40dxQpAO2TvNB2LvwPtB11UruT-iAYRgE2CS_ifrZ5M="},
    {title: "Raw shrimp hands", src: "istockphoto", views: "7.3M", link: "https://media.istockphoto.com/id/1328600779/photo/raw-shrimp-hands.jpg?s=612x612&w=0&k=20&c=LKbGNOeS4I8SCqMLcnCKKkzpCgP6tGgJ9piYajDPWag="},
    {title: "Cajun Shrimp", src: "istockphoto", views: "18.9M", link: "https://media.istockphoto.com/id/610264540/photo/cajun-shrimp.jpg?s=612x612&w=0&k=20&c=0pdBeE3DBE-0eDIY25PU0uYAxSva-OkVLLXyDvQ5RBs="},
    {title: "Pasta with king prawns", src: "istockphoto", views: "13.5M", link: "https://media.istockphoto.com/id/183869552/photo/pasta-with-king-prawns.jpg?s=612x612&w=0&k=20&c=aLTrQ16nUuIEnoP6_haHbJ9ZZMjV7xyuhIBPG4ipFeo="},
    {title: "Jumbo Shrimp Scampi Sauteeing in Butter and Oliv", src: "istockphoto", views: "44.6M", link: "https://media.istockphoto.com/id/469311080/photo/jumbo-shrimp-scampi-sauteeing-in-butter-and-olive-oil.jpg?s=612x612&w=0&k=20&c=zKkCXnYEIzgx4DRKWtHbFiRZksHpN4ijtWM5_EqdI2s="},
    {title: "Creamy Shrimp Curry", src: "istockphoto", views: "8.7M", link: "https://media.istockphoto.com/id/1003411832/photo/creamy-shrimp-curry.jpg?s=612x612&w=0&k=20&c=ddGesjoq0GAQ8vZk0flPFZfAEIV7_V7Fgwx24EBH0rA="},
    {title: "Raw frozen and peeled shrimp background. Pile of", src: "istockphoto", views: "56.4M", link: "https://media.istockphoto.com/id/1187753495/photo/raw-frozen-and-peeled-shrimp-background-pile-of-frozen-shrimps-close-up-of-frozen-shrimps-a.jpg?s=612x612&w=0&k=20&c=yDKNyctpQfrvMZpKOoiyI9CjmKHsx_rVgWRC8cMrbF4="},
    {title: "Grilled shrimp with Tamarind sauce or Tamarind Udang Gorend", src: "istockphoto", views: "7.7M", link: "https://media.istockphoto.com/id/981734470/photo/grilled-shrimp-with-tamarind-sauce-or-tamarind-udang-gorend-assam-prawn-malaysian-dish.jpg?s=612x612&w=0&k=20&c=B6irVZZwe2cTYy9XRte9_V4YXxacvs-0jIUPHL69ciE="},
    {title: "Jumbo Tiger Prawn Scampi", src: "istockphoto", views: "6.6M", link: "https://media.istockphoto.com/id/984444796/photo/jumbo-tiger-prawn-scampi.jpg?s=612x612&w=0&k=20&c=zRjnCK9sogLudzPsyw8i7adrwT6lvkqwX0zkDFs3Qu4="},
    {title: "Fried shrimp and vegetable on plate", src: "istockphoto", views: "9.9M", link: "https://media.istockphoto.com/id/1192253012/photo/fried-shrimp-and-vegetable-on-plate.jpg?s=612x612&w=0&k=20&c=Lr_bMVcdgAupLvaRt06kqsJYiTXC7ct3bCmOqINKXB0="},
    {title: "Indian Biryani with Shrimp", src: "istockphoto", views: "66.8M", link: "https://media.istockphoto.com/id/494094785/photo/indian-biryani-with-shrimp.jpg?s=612x612&w=0&k=20&c=HPjzvYh2ZH85df_h1MZOKn1p9KZvgEc8IV6kmToRjeU="},
    {title: "Grilled spicey shrimps with seasoning", src: "istockphoto", views: "101.5M", link: "https://media.istockphoto.com/id/1302126017/photo/grilled-spicey-shrimps-with-seasoning.jpg?s=612x612&w=0&k=20&c=ddb_u3G3mAos-daXwi2SGXL1Y8h-q9YTfUfF2PO8D6Q="},
]

// {title: "", src: "istockphoto", views: "12.5M", link: ""},

const Categories = [
    {title: "Prawns Videos", link: "/prawns"},
    {title: "fried prawns", link: "/prawns"},
    {title: "prawns recipes", link: "/prawns"},
    {title: "red prawns", link: "/prawns"},
    {title: "prawns pictures", link: "/prawns"},
    {title: "prawns videos", link: "/prawns"},
    {title: "seafood", link: "/prawns"},
    {title: "raw prawns", link: "/prawns"},
]

export {prawnImages, Categories}