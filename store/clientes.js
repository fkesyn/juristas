export const state = () => ({
  header: [
    { text: 'ID', value: 'id' },
    { text: 'Nome', value: 'nome' },
    { text: 'Morada', value: 'morada' },
    { text: 'Data Nascimento', value: 'data_nascimento' },
    { text: 'Tipo', value: 'tipo' },
    { text: 'Naturalidade', value: 'naturalidade' },
    { text: 'Email', value: 'email' },
    { text: 'Telefone', value: 'telefone' }
  ],
  customers: [
    {
      id: 1,
      nome: 'Toby',
      morada: '4201 Union Alley',
      data_nascimento: '16/12/1977',
      tipo: true,
      naturalidade: 'Parung',
      email: 'tswansbury0@nhs.uk',
      telefone: '2264173746'
    },
    {
      id: 2,
      nome: 'Prisca',
      morada: '7252 Norway Maple Road',
      data_nascimento: '06/06/1977',
      tipo: true,
      naturalidade: 'Alua',
      email: 'pfetteplace1@stumbleupon.com',
      telefone: '2403767951'
    },
    {
      id: 3,
      nome: 'Sheffield',
      morada: '66 Swallow Street',
      data_nascimento: '02/03/1995',
      tipo: false,
      naturalidade: 'Shiraoi',
      email: 'sdonet2@edublogs.org',
      telefone: '8643090631'
    },
    {
      id: 4,
      nome: 'Yolanda',
      morada: '946 Almo Terrace',
      data_nascimento: '11/05/1975',
      tipo: true,
      naturalidade: 'Cincinnati',
      email: 'ybriiginshaw3@npr.org',
      telefone: '5133396413'
    },
    {
      id: 5,
      nome: 'Elyn',
      morada: '1 Fairfield Crossing',
      data_nascimento: '07/10/1951',
      tipo: false,
      naturalidade: 'Tengah',
      email: 'epartleton4@home.pl',
      telefone: '8646668137'
    },
    {
      id: 6,
      nome: 'Melody',
      morada: '1 Graedel Street',
      data_nascimento: '02/11/1972',
      tipo: false,
      naturalidade: 'Ágios Pétros',
      email: 'mdalbey5@tamu.edu',
      telefone: '4973744721'
    },
    {
      id: 7,
      nome: 'Andris',
      morada: '1 Chinook Terrace',
      data_nascimento: '19/09/1951',
      tipo: false,
      naturalidade: 'Panjiawan',
      email: 'ahumerstone6@mozilla.com',
      telefone: '7679423407'
    },
    {
      id: 8,
      nome: 'Robbert',
      morada: '8798 Stoughton Crossing',
      data_nascimento: '11/04/1986',
      tipo: false,
      naturalidade: 'Anjia',
      email: 'rannandale7@jalbum.net',
      telefone: '8432815111'
    },
    {
      id: 9,
      nome: 'Talia',
      morada: '27046 Anhalt Point',
      data_nascimento: '20/05/1989',
      tipo: false,
      naturalidade: 'Santa Bárbara',
      email: 'tcasellas8@toplist.cz',
      telefone: '2347426902'
    },
    {
      id: 10,
      nome: 'Merle',
      morada: '7 Buena Vista Point',
      data_nascimento: '06/02/1972',
      tipo: true,
      naturalidade: 'Jinjiang',
      email: 'mwarrington9@arstechnica.com',
      telefone: '7548335679'
    },
    {
      id: 11,
      nome: 'Sela',
      morada: '7006 Fair Oaks Point',
      data_nascimento: '28/04/1994',
      tipo: false,
      naturalidade: 'Lorient',
      email: 'sbryanta@ucsd.edu',
      telefone: '1662215245'
    },
    {
      id: 12,
      nome: 'Bearnard',
      morada: '613 Kensington Crossing',
      data_nascimento: '19/02/1955',
      tipo: true,
      naturalidade: 'Maglaj',
      email: 'bquenbyb@dailymotion.com',
      telefone: '6003473771'
    },
    {
      id: 13,
      nome: 'Mylo',
      morada: '68 Nancy Parkway',
      data_nascimento: '17/11/1967',
      tipo: true,
      naturalidade: 'Yangba',
      email: 'mdickec@google.ca',
      telefone: '8327270225'
    },
    {
      id: 14,
      nome: 'Kelcey',
      morada: '1 Summer Ridge Hill',
      data_nascimento: '04/12/1952',
      tipo: false,
      naturalidade: 'Novomoskovsk',
      email: 'kchasneyd@xing.com',
      telefone: '4748784569'
    },
    {
      id: 15,
      nome: 'Dalston',
      morada: '4 Bobwhite Circle',
      data_nascimento: '10/01/1973',
      tipo: true,
      naturalidade: 'Runsonglaozhai',
      email: 'dyuryaeve@youku.com',
      telefone: '4277341491'
    },
    {
      id: 16,
      nome: 'Moss',
      morada: '91584 Nobel Avenue',
      data_nascimento: '11/10/1957',
      tipo: false,
      naturalidade: 'Mocajuba',
      email: 'mcominellof@istockphoto.com',
      telefone: '6811595172'
    },
    {
      id: 17,
      nome: 'Monica',
      morada: '782 Scott Drive',
      data_nascimento: '27/05/1965',
      tipo: false,
      naturalidade: 'Baalbek',
      email: 'mdrakeleyg@yale.edu',
      telefone: '3116611283'
    },
    {
      id: 18,
      nome: 'Broddie',
      morada: '27664 Nelson Circle',
      data_nascimento: '03/11/1960',
      tipo: false,
      naturalidade: 'Beranci',
      email: 'bgreenh@example.com',
      telefone: '3275910114'
    },
    {
      id: 19,
      nome: 'Ara',
      morada: '1129 Hermina Avenue',
      data_nascimento: '10/12/1960',
      tipo: false,
      naturalidade: 'Kostyantynivka',
      email: 'ayui@dedecms.com',
      telefone: '8728608716'
    },
    {
      id: 20,
      nome: 'Hashim',
      morada: '3299 Carpenter Point',
      data_nascimento: '15/07/1995',
      tipo: false,
      naturalidade: 'Sarukhan',
      email: 'hmcmenamyj@blogspot.com',
      telefone: '7279239890'
    },
    {
      id: 21,
      nome: 'Etta',
      morada: '4 Briar Crest Terrace',
      data_nascimento: '16/07/1951',
      tipo: true,
      naturalidade: 'Taverny',
      email: 'emowsleyk@yandex.ru',
      telefone: '4345855892'
    },
    {
      id: 22,
      nome: 'Cobb',
      morada: '08219 Erie Alley',
      data_nascimento: '25/02/1950',
      tipo: true,
      naturalidade: 'Bao’an',
      email: 'clattinl@wufoo.com',
      telefone: '5742563307'
    },
    {
      id: 23,
      nome: 'Neddy',
      morada: '3 Blue Bill Park Crossing',
      data_nascimento: '09/03/1958',
      tipo: false,
      naturalidade: 'Madolenihm Municipality Government',
      email: 'ndwirem@ow.ly',
      telefone: '9298608452'
    },
    {
      id: 24,
      nome: 'Nicolle',
      morada: '6 Northridge Parkway',
      data_nascimento: '20/01/1980',
      tipo: false,
      naturalidade: 'Mangga Dua',
      email: 'ngerrensn@issuu.com',
      telefone: '5385489903'
    },
    {
      id: 25,
      nome: 'Rod',
      morada: '4344 Walton Drive',
      data_nascimento: '20/04/1999',
      tipo: false,
      naturalidade: 'Caper',
      email: 'rdorrityo@wired.com',
      telefone: '3694454180'
    },
    {
      id: 26,
      nome: 'Kerrin',
      morada: '5 Manufacturers Pass',
      data_nascimento: '28/05/1982',
      tipo: false,
      naturalidade: 'Concepcion',
      email: 'kkasselp@trellian.com',
      telefone: '5471836136'
    },
    {
      id: 27,
      nome: 'Mycah',
      morada: '0230 New Castle Pass',
      data_nascimento: '28/02/1965',
      tipo: true,
      naturalidade: 'West Palm Beach',
      email: 'mbarabichq@mashable.com',
      telefone: '5615058141'
    },
    {
      id: 28,
      nome: 'Dar',
      morada: '7168 Caliangt Pass',
      data_nascimento: '02/07/1959',
      tipo: true,
      naturalidade: 'Valtimo',
      email: 'dallsor@taobao.com',
      telefone: '6405780691'
    },
    {
      id: 29,
      nome: 'Appolonia',
      morada: '5785 Anderson Way',
      data_nascimento: '21/03/1999',
      tipo: true,
      naturalidade: 'Silago',
      email: 'anorths@bing.com',
      telefone: '7337355709'
    },
    {
      id: 30,
      nome: 'Auberta',
      morada: '7 Pond Trail',
      data_nascimento: '12/05/1952',
      tipo: true,
      naturalidade: 'Kan’onjichō',
      email: 'aclemenzat@jigsy.com',
      telefone: '6143237435'
    },
    {
      id: 31,
      nome: 'Raeann',
      morada: '7175 Tennyson Way',
      data_nascimento: '11/08/1987',
      tipo: true,
      naturalidade: 'Rathnew',
      email: 'rdarkinsu@wikipedia.org',
      telefone: '2463289454'
    },
    {
      id: 32,
      nome: 'Klemens',
      morada: '71331 Raven Hill',
      data_nascimento: '01/12/1997',
      tipo: true,
      naturalidade: 'Klimavichy',
      email: 'kbullentv@meetup.com',
      telefone: '8171463646'
    },
    {
      id: 33,
      nome: 'Benedikta',
      morada: '400 Larry Court',
      data_nascimento: '16/09/1989',
      tipo: false,
      naturalidade: 'Krasnokamsk',
      email: 'bmadgwickw@discovery.com',
      telefone: '7341135904'
    },
    {
      id: 34,
      nome: 'Meggie',
      morada: '92 Clove Lane',
      data_nascimento: '26/10/1987',
      tipo: true,
      naturalidade: 'Shūkat aş Şūfī',
      email: 'mjursx@google.ru',
      telefone: '4049276366'
    },
    {
      id: 35,
      nome: 'Cherye',
      morada: '29600 Farmco Point',
      data_nascimento: '21/10/1983',
      tipo: true,
      naturalidade: 'Wanglinkou',
      email: 'cmclanachany@shop-pro.jp',
      telefone: '8588895713'
    },
    {
      id: 36,
      nome: 'Britta',
      morada: '0 Burrows Trail',
      data_nascimento: '09/11/1982',
      tipo: true,
      naturalidade: 'Al Qābil',
      email: 'bduffittz@elegantthemes.com',
      telefone: '4661673478'
    },
    {
      id: 37,
      nome: 'Bernette',
      morada: '99 Dixon Park',
      data_nascimento: '10/02/1990',
      tipo: true,
      naturalidade: 'El Asintal',
      email: 'bchrisp10@bloglovin.com',
      telefone: '7199298934'
    },
    {
      id: 38,
      nome: 'Russell',
      morada: '7 Beilfuss Place',
      data_nascimento: '04/08/1966',
      tipo: false,
      naturalidade: 'Brckovljani',
      email: 'rduckitt11@state.tx.us',
      telefone: '1582739583'
    },
    {
      id: 39,
      nome: 'Nana',
      morada: '73800 Northwestern Pass',
      data_nascimento: '30/05/1963',
      tipo: true,
      naturalidade: 'Novomoskovs’k',
      email: 'ngorrissen12@sourceforge.net',
      telefone: '3045569498'
    },
    {
      id: 40,
      nome: 'Rubina',
      morada: '61123 Norway Maple Place',
      data_nascimento: '03/03/1960',
      tipo: true,
      naturalidade: 'Liujia',
      email: 'rcalder13@lycos.com',
      telefone: '9674618284'
    },
    {
      id: 41,
      nome: 'Melissa',
      morada: '3 Leroy Pass',
      data_nascimento: '22/08/1978',
      tipo: false,
      naturalidade: 'Cibeureum',
      email: 'mgreg14@plala.or.jp',
      telefone: '5571997750'
    },
    {
      id: 42,
      nome: 'Lianne',
      morada: '7347 Troy Park',
      data_nascimento: '24/07/1962',
      tipo: false,
      naturalidade: 'Tulihe',
      email: 'lokeefe15@drupal.org',
      telefone: '6938698315'
    },
    {
      id: 43,
      nome: 'Daphne',
      morada: '238 Graceland Junction',
      data_nascimento: '05/09/1977',
      tipo: true,
      naturalidade: 'Tocha',
      email: 'dquipp16@narod.ru',
      telefone: '8613575113'
    },
    {
      id: 44,
      nome: 'Brett',
      morada: '3 Fairfield Terrace',
      data_nascimento: '12/05/1982',
      tipo: true,
      naturalidade: 'Sukowidodo Barat',
      email: 'bfaldoe17@imdb.com',
      telefone: '6614324494'
    },
    {
      id: 45,
      nome: 'Jard',
      morada: '33030 Morningstar Center',
      data_nascimento: '20/07/1988',
      tipo: true,
      naturalidade: 'São Jerônimo',
      email: 'jelner18@macromedia.com',
      telefone: '2982960693'
    },
    {
      id: 46,
      nome: 'Rubetta',
      morada: '85 Charing Cross Road',
      data_nascimento: '19/07/1970',
      tipo: false,
      naturalidade: 'Chợ Mới',
      email: 'rtupman19@gravatar.com',
      telefone: '3838008072'
    },
    {
      id: 47,
      nome: 'Shaylynn',
      morada: '944 Bowman Way',
      data_nascimento: '26/09/1983',
      tipo: true,
      naturalidade: 'Baltasar Brum',
      email: 'sstickler1a@hostgator.com',
      telefone: '1143441318'
    },
    {
      id: 48,
      nome: 'Tore',
      morada: '2 Debra Place',
      data_nascimento: '08/06/1985',
      tipo: true,
      naturalidade: 'Paccho',
      email: 'tkinnar1b@google.fr',
      telefone: '6961684781'
    },
    {
      id: 49,
      nome: 'Fairleigh',
      morada: '08288 Red Cloud Center',
      data_nascimento: '01/03/1981',
      tipo: false,
      naturalidade: 'Hrodna',
      email: 'fwonfar1c@wix.com',
      telefone: '9267953828'
    },
    {
      id: 50,
      nome: 'Lamont',
      morada: '28207 Fremont Pass',
      data_nascimento: '03/10/1990',
      tipo: false,
      naturalidade: 'Liyang',
      email: 'lklementz1d@sbwire.com',
      telefone: '6468129662'
    },
    {
      id: 51,
      nome: 'Anna-diane',
      morada: '137 Miller Way',
      data_nascimento: '24/05/1979',
      tipo: false,
      naturalidade: 'Bhamdoûn el Mhatta',
      email: 'amulvey1e@hud.gov',
      telefone: '4352142177'
    },
    {
      id: 52,
      nome: 'Philippe',
      morada: '13954 Ramsey Way',
      data_nascimento: '24/02/1965',
      tipo: false,
      naturalidade: 'Guapi',
      email: 'pseson1f@pinterest.com',
      telefone: '3803371865'
    },
    {
      id: 53,
      nome: 'Matty',
      morada: '1734 Ruskin Junction',
      data_nascimento: '09/03/1996',
      tipo: true,
      naturalidade: 'Seda',
      email: 'mscathard1g@oaic.gov.au',
      telefone: '9621549830'
    },
    {
      id: 54,
      nome: 'Tadio',
      morada: '49976 Vera Lane',
      data_nascimento: '24/03/1950',
      tipo: true,
      naturalidade: 'Hexi',
      email: 'tnathan1h@house.gov',
      telefone: '7389127334'
    },
    {
      id: 55,
      nome: 'Steven',
      morada: '1 Cottonwood Center',
      data_nascimento: '05/07/1957',
      tipo: true,
      naturalidade: 'Timbuktu',
      email: 'sdixson1i@theglobeandmail.com',
      telefone: '7289686831'
    },
    {
      id: 56,
      nome: 'Vitia',
      morada: '1614 Monterey Avenue',
      data_nascimento: '05/12/1971',
      tipo: false,
      naturalidade: 'Soledad',
      email: 'vburniston1j@wisc.edu',
      telefone: '5186136928'
    },
    {
      id: 57,
      nome: 'Eldon',
      morada: '3657 Sherman Junction',
      data_nascimento: '27/03/1996',
      tipo: false,
      naturalidade: 'Vila Franca das Naves',
      email: 'elinny1k@goodreads.com',
      telefone: '9231499538'
    },
    {
      id: 58,
      nome: 'Boris',
      morada: '8868 Artisan Junction',
      data_nascimento: '16/04/1979',
      tipo: false,
      naturalidade: 'Krzepice',
      email: 'bmccrow1l@cdc.gov',
      telefone: '9083638528'
    },
    {
      id: 59,
      nome: 'Wheeler',
      morada: '23038 Mariners Cove Road',
      data_nascimento: '10/06/1960',
      tipo: false,
      naturalidade: 'Navatat',
      email: 'wgraffham1m@seesaa.net',
      telefone: '8357289362'
    },
    {
      id: 60,
      nome: 'Kelsey',
      morada: '3 Corscot Point',
      data_nascimento: '24/07/1993',
      tipo: true,
      naturalidade: 'Tuam',
      email: 'kcoyle1n@freewebs.com',
      telefone: '2647334243'
    },
    {
      id: 61,
      nome: 'Joel',
      morada: '075 Autumn Leaf Point',
      data_nascimento: '03/12/1969',
      tipo: true,
      naturalidade: 'Moutsamoudou',
      email: 'jroches1o@homestead.com',
      telefone: '5164675770'
    },
    {
      id: 62,
      nome: 'Dorice',
      morada: '216 Mallard Parkway',
      data_nascimento: '24/08/1953',
      tipo: true,
      naturalidade: 'Souto',
      email: 'dverlinden1p@cmu.edu',
      telefone: '3523595424'
    },
    {
      id: 63,
      nome: 'Sella',
      morada: '58 Susan Avenue',
      data_nascimento: '07/07/1969',
      tipo: false,
      naturalidade: "Giv'on HaHadasha",
      email: 'swinscom1q@posterous.com',
      telefone: '7507941195'
    },
    {
      id: 64,
      nome: 'Fancie',
      morada: '255 Elgar Pass',
      data_nascimento: '08/05/1953',
      tipo: true,
      naturalidade: 'Nizhniy Tsasuchey',
      email: 'ffear1r@hatena.ne.jp',
      telefone: '9196647477'
    },
    {
      id: 65,
      nome: 'Mick',
      morada: '7419 Debs Terrace',
      data_nascimento: '11/03/1954',
      tipo: false,
      naturalidade: 'Rtyně v Podkrkonoší',
      email: 'myukhnin1s@blogger.com',
      telefone: '4978784471'
    },
    {
      id: 66,
      nome: 'Humbert',
      morada: '49237 Westport Way',
      data_nascimento: '18/09/1957',
      tipo: false,
      naturalidade: 'Konary',
      email: 'hsalsbury1t@youtube.com',
      telefone: '5189336203'
    },
    {
      id: 67,
      nome: 'Nester',
      morada: '9 Carioca Lane',
      data_nascimento: '06/02/1966',
      tipo: false,
      naturalidade: 'Huangzhai',
      email: 'nclaw1u@cocolog-nifty.com',
      telefone: '4824427702'
    },
    {
      id: 68,
      nome: 'Daphene',
      morada: '765 Sachs Park',
      data_nascimento: '22/09/1961',
      tipo: false,
      naturalidade: 'Nezhinka',
      email: 'dsolon1v@blogger.com',
      telefone: '2591779647'
    },
    {
      id: 69,
      nome: 'Levy',
      morada: '00700 Doe Crossing Terrace',
      data_nascimento: '25/06/1978',
      tipo: false,
      naturalidade: 'Jianjiang',
      email: 'ljosephi1w@devhub.com',
      telefone: '1882866306'
    },
    {
      id: 70,
      nome: 'Kalindi',
      morada: '2850 Bluejay Road',
      data_nascimento: '25/12/1954',
      tipo: true,
      naturalidade: 'Norrtälje',
      email: 'kduny1x@state.gov',
      telefone: '3488219416'
    },
    {
      id: 71,
      nome: 'Virgil',
      morada: '46 Mandrake Drive',
      data_nascimento: '13/03/1996',
      tipo: true,
      naturalidade: 'Bilar',
      email: 'voshea1y@seattletimes.com',
      telefone: '4319082980'
    },
    {
      id: 72,
      nome: 'Iolanthe',
      morada: '07 Longview Terrace',
      data_nascimento: '05/09/1959',
      tipo: true,
      naturalidade: 'Santa Cruz',
      email: 'ibrady1z@ameblo.jp',
      telefone: '6251072213'
    },
    {
      id: 73,
      nome: 'Haley',
      morada: '89 Huxley Parkway',
      data_nascimento: '07/06/1976',
      tipo: false,
      naturalidade: 'Geta',
      email: 'hmclucky20@barnesandnoble.com',
      telefone: '5578218609'
    },
    {
      id: 74,
      nome: 'Gabriel',
      morada: '9 Elka Terrace',
      data_nascimento: '24/02/1951',
      tipo: true,
      naturalidade: 'Harrison',
      email: 'gmcvity21@bloglines.com',
      telefone: '3535618597'
    },
    {
      id: 75,
      nome: 'Herc',
      morada: '56 Gateway Street',
      data_nascimento: '01/04/1958',
      tipo: true,
      naturalidade: 'Choujiang',
      email: 'hhagley22@state.tx.us',
      telefone: '9481854923'
    },
    {
      id: 76,
      nome: 'Biddy',
      morada: '2975 Jenna Road',
      data_nascimento: '31/03/1959',
      tipo: false,
      naturalidade: 'Alīgūdarz',
      email: 'bepps23@nytimes.com',
      telefone: '7052502098'
    },
    {
      id: 77,
      nome: 'Hobie',
      morada: '4 Kropf Place',
      data_nascimento: '03/07/1960',
      tipo: false,
      naturalidade: 'Salon-de-Provence',
      email: 'hfancutt24@princeton.edu',
      telefone: '4747427148'
    },
    {
      id: 78,
      nome: 'Susan',
      morada: '4586 Westridge Center',
      data_nascimento: '25/07/1968',
      tipo: true,
      naturalidade: 'Mintang',
      email: 'sburry25@gmpg.org',
      telefone: '7225484583'
    },
    {
      id: 79,
      nome: 'Florina',
      morada: '89413 Kensington Terrace',
      data_nascimento: '17/07/1979',
      tipo: false,
      naturalidade: 'Ash Shuyūkh',
      email: 'fkensington26@nytimes.com',
      telefone: '1424337964'
    },
    {
      id: 80,
      nome: 'Elysia',
      morada: '79031 Novick Hill',
      data_nascimento: '23/05/1982',
      tipo: false,
      naturalidade: 'San Diego',
      email: 'erawlingson27@samsung.com',
      telefone: '5467283281'
    },
    {
      id: 81,
      nome: 'Holden',
      morada: '63 Anhalt Crossing',
      data_nascimento: '23/10/1996',
      tipo: true,
      naturalidade: 'Wanglu Kulon',
      email: 'hbeadell28@wufoo.com',
      telefone: '1801814196'
    },
    {
      id: 82,
      nome: 'Francklin',
      morada: '14 Nancy Hill',
      data_nascimento: '20/05/1990',
      tipo: false,
      naturalidade: 'Jocotenango',
      email: 'fconaboy29@nps.gov',
      telefone: '9249553993'
    },
    {
      id: 83,
      nome: 'Addi',
      morada: '24 Loeprich Circle',
      data_nascimento: '14/11/1963',
      tipo: false,
      naturalidade: 'Qīr',
      email: 'agoscomb2a@cdc.gov',
      telefone: '9496577195'
    },
    {
      id: 84,
      nome: 'Stefan',
      morada: '24928 Fisk Way',
      data_nascimento: '03/08/1991',
      tipo: false,
      naturalidade: 'Kuznetsovs’k',
      email: 'sgovinlock2b@arizona.edu',
      telefone: '6995562750'
    },
    {
      id: 85,
      nome: 'Allyn',
      morada: '0 Prairieview Court',
      data_nascimento: '25/11/1955',
      tipo: false,
      naturalidade: 'Urkarakh',
      email: 'arolin2c@nymag.com',
      telefone: '4961194643'
    },
    {
      id: 86,
      nome: 'Alfi',
      morada: '40509 Westend Center',
      data_nascimento: '31/01/1961',
      tipo: false,
      naturalidade: 'Ylihärmä',
      email: 'asawford2d@deviantart.com',
      telefone: '6008427718'
    },
    {
      id: 87,
      nome: 'Gunther',
      morada: '302 Anzinger Lane',
      data_nascimento: '11/08/1963',
      tipo: true,
      naturalidade: 'Jaboatão',
      email: 'gshevels2e@wikispaces.com',
      telefone: '6636109912'
    },
    {
      id: 88,
      nome: 'Lois',
      morada: '673 Maple Wood Alley',
      data_nascimento: '17/09/1979',
      tipo: false,
      naturalidade: 'Ciparakan',
      email: 'lhacquoil2f@vimeo.com',
      telefone: '4882954736'
    },
    {
      id: 89,
      nome: 'Philbert',
      morada: '64159 Pennsylvania Crossing',
      data_nascimento: '04/05/1956',
      tipo: true,
      naturalidade: 'Nasielsk',
      email: 'pfrayn2g@4shared.com',
      telefone: '3446817058'
    },
    {
      id: 90,
      nome: 'Annabela',
      morada: '5498 Troy Street',
      data_nascimento: '10/11/1990',
      tipo: false,
      naturalidade: 'Cizhu',
      email: 'acollens2h@simplemachines.org',
      telefone: '4533629936'
    },
    {
      id: 91,
      nome: 'Dannye',
      morada: '86 Comanche Hill',
      data_nascimento: '19/06/1979',
      tipo: false,
      naturalidade: 'Rawa Mazowiecka',
      email: 'drosgen2i@google.fr',
      telefone: '6063255062'
    },
    {
      id: 92,
      nome: 'Tibold',
      morada: '408 Valley Edge Terrace',
      data_nascimento: '23/06/1982',
      tipo: true,
      naturalidade: 'Gumuk Tengah',
      email: 'trowly2j@marriott.com',
      telefone: '5723448016'
    },
    {
      id: 93,
      nome: 'Loren',
      morada: '697 Forster Parkway',
      data_nascimento: '01/08/1976',
      tipo: false,
      naturalidade: 'Jamban',
      email: 'lcapenor2k@parallels.com',
      telefone: '1986067996'
    },
    {
      id: 94,
      nome: 'Ralina',
      morada: '545 South Circle',
      data_nascimento: '02/06/1952',
      tipo: false,
      naturalidade: 'Gegu',
      email: 'rstendell2l@telegraph.co.uk',
      telefone: '7916771215'
    },
    {
      id: 95,
      nome: 'Pepe',
      morada: '17777 Lien Hill',
      data_nascimento: '23/05/1964',
      tipo: true,
      naturalidade: 'Arujá',
      email: 'pkenzie2m@discuz.net',
      telefone: '1548203331'
    },
    {
      id: 96,
      nome: 'Ward',
      morada: '79025 Brentwood Drive',
      data_nascimento: '09/11/1968',
      tipo: true,
      naturalidade: 'Prado',
      email: 'wmellem2n@microsoft.com',
      telefone: '2964433420'
    },
    {
      id: 97,
      nome: 'Jacquelynn',
      morada: '76 Birchwood Junction',
      data_nascimento: '22/02/1990',
      tipo: false,
      naturalidade: 'Mosteiró',
      email: 'jhardcastle2o@ehow.com',
      telefone: '6108488338'
    },
    {
      id: 98,
      nome: 'Charmine',
      morada: '98503 Hallows Way',
      data_nascimento: '27/03/1958',
      tipo: false,
      naturalidade: 'Bangkal',
      email: 'cdelete2p@usnews.com',
      telefone: '2231119106'
    },
    {
      id: 99,
      nome: 'Rufus',
      morada: '4352 Reindahl Crossing',
      data_nascimento: '26/12/1962',
      tipo: true,
      naturalidade: 'Zhendeqiao',
      email: 'rpurkess2q@mashable.com',
      telefone: '6356109038'
    },
    {
      id: 100,
      nome: 'Sigismundo',
      morada: '15994 Roxbury Avenue',
      data_nascimento: '20/06/1956',
      tipo: true,
      naturalidade: 'Cikabuyutan Barat',
      email: 'smcallister2r@blogs.com',
      telefone: '5024032733'
    }
  ]
})

export const getters = {
  customers: state => state.customers,
  header: state => state.header
}
