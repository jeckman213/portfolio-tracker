'use strict';

const seeds = {
  up : (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stock', 
    [
      /* NASDAQ Stocks */
      {
        symbol : 'AAIT',
        name : "iShares MSCI All Country Asia Information Technology Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAL',
        name : "American Airlines Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAME',
        name : "Atlantic American Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAOI',
        name : "Applied Optoelectronics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAON',
        name : "AAON, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAPL',
        name : "Apple Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAVL',
        name : "Avalanche Biotechnologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAWW',
        name : "Atlas Air Worldwide Holdings",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AAXJ',
        name : "iShares MSCI All Country Asia ex Japan Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABAC',
        name : "Aoxin Tianli Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABAX',
        name : "ABAXIS, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABCB',
        name : "Ameris Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABCD',
        name : "Cambium Learning Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABCO',
        name : "The Advisory Board Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABCW',
        name : "Anchor BanCorp Wisconsin Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABDC',
        name : "Alcentra Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABGB',
        name : "Abengoa, S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABIO',
        name : "ARCA biopharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABMD',
        name : "ABIOMED, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABTL',
        name : "Autobytel Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ABY',
        name : "Abengoa Yield plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACAD',
        name : "ACADIA Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACAS',
        name : "American Capital, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACAT',
        name : "Arctic Cat Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACET',
        name : "Aceto Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACFC',
        name : "Atlantic Coast Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACFN',
        name : "Acorn Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACGL',
        name : "Arch Capital Group Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACHC',
        name : "Acadia Healthcare Company, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACHN',
        name : "Achillion Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACIW',
        name : "ACI Worldwide, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACLS',
        name : "Axcelis Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACNB',
        name : "ACNB Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACOR',
        name : "Acorda Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACPW',
        name : "Active Power, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACRX',
        name : "AcelRx Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACSF',
        name : "American Capital Senior Floating, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACST',
        name : "Acasti Pharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACTA',
        name : "Actua Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACTG',
        name : "Acacia Research Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACTS',
        name : "Actions Semiconductor Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACUR',
        name : "Acura Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACWI',
        name : "iShares MSCI ACWI Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACWX',
        name : "iShares MSCI ACWI ex US Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ACXM',
        name : "Acxiom Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADAT',
        name : "Authentidate Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADBE',
        name : "Adobe Systems Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADEP',
        name : "Adept Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADES',
        name : "Advanced Emissions Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADHD',
        name : "Alcobra Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADI',
        name : "Analog Devices, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADMA',
        name : "ADMA Biologics Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADMP',
        name : "Adamis Pharmaceuticals Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADMS',
        name : "Adamas Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADNC',
        name : "Audience, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADP',
        name : "Automatic Data Processing, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADRA',
        name : "BLDRS Asia 50 ADR Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADRD',
        name : "BLDRS Developed Markets 100 ADR Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADRE',
        name : "BLDRS Emerging Markets 50 ADR Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADRU',
        name : "BLDRS Europe 100 ADR Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADSK',
        name : "Autodesk, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADTN',
        name : "ADTRAN, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADUS',
        name : "Addus HomeCare Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADVS',
        name : "Advent Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADXS',
        name : "Advaxis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ADXSW',
        name : "Advaxis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AEGN',
        name : "Aegion Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AEGR',
        name : "Aegerion Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AEHR',
        name : "Aehr Test Systems",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AEIS',
        name : "Advanced Energy Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AEPI',
        name : "AEP Industries Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AERI',
        name : "Aerie Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AETI',
        name : "American Electric Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AEY',
        name : "ADDvantage Technologies Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AEZS',
        name : "AEterna Zentaris Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AFAM',
        name : "Almost Family Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AFCB',
        name : "Athens Bancshares Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AFFX',
        name : "Affymetrix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AFH',
        name : "Atlas Financial Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AFMD',
        name : "Affimed N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AFOP',
        name : "Alliance Fiber Optic Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AFSI',
        name : "AmTrust Financial Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGEN',
        name : "Agenus Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGII',
        name : "Argo Group International Holdings, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGIIL',
        name : "Argo Group International Holdings, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGIO',
        name : "Agios Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGNC',
        name : "American Capital Agency Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGNCB',
        name : "American Capital Agency Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGNCP',
        name : "American Capital Agency Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGND',
        name : "WisdomTree Barclays U.S. Aggregate Bond Negative Duration Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGRX',
        name : "Agile Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGTC',
        name : "Applied Genetic Technologies Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGYS',
        name : "Agilysys, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AGZD',
        name : "WisdomTree Barclays U.S. Aggregate Bond Zero Duration Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AHGP',
        name : "Alliance Holdings GP, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AHPI',
        name : "Allied Healthcare Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AIMC',
        name : "Altra Industrial Motion Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AINV',
        name : "Apollo Investment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AIQ',
        name : "Alliance HealthCare Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AIRM',
        name : "Air Methods Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AIRR',
        name : "First Trust RBA American Industrial Renaissance ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AIRT',
        name : "Air T, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AIXG',
        name : "Aixtron SE",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AKAM',
        name : "Akamai Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AKAO',
        name : "Achaogen, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AKBA',
        name : "Akebia Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AKER',
        name : "Akers Biosciences Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AKRX',
        name : "Akorn, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALCO',
        name : "Alico, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALDR',
        name : "Alder BioPharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALDX',
        name : "Aldeyra Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALGN',
        name : "Align Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALGT',
        name : "Allegiant Travel Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALIM',
        name : "Alimera Sciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALKS',
        name : "Alkermes plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALLB',
        name : "Alliance Bancorp, Inc. of Pennsylvania",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALLT',
        name : "Allot Communications Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALNY',
        name : "Alnylam Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALOG',
        name : "Analogic Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALOT',
        name : "Astro",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALQA',
        name : "Alliqua, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALSK',
        name : "Alaska Communications Systems Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALTR',
        name : "Altera Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALXA',
        name : "Alexza Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ALXN',
        name : "Alexion Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMAG',
        name : "AMAG Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMAT',
        name : "Applied Materials, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMBA',
        name : "Ambarella, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMBC',
        name : "Ambac Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMBCW',
        name : "Ambac Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMCC',
        name : "Applied Micro Circuits Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMCF',
        name : "Andatee China Marine Fuel Services Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMCN',
        name : "AirMedia Group Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMCX',
        name : "AMC Networks Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMD',
        name : "Advanced Micro Devices, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMDA',
        name : "Amedica Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMED',
        name : "Amedisys Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMGN',
        name : "Amgen Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMIC',
        name : "American Independence Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMKR',
        name : "Amkor Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMNB',
        name : "American National Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMOT',
        name : "Allied Motion Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMOV',
        name : "America Movil, S.A.B. de C.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMPH',
        name : "Amphastar Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMRB',
        name : "American River Bankshares",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMRI',
        name : "Albany Molecular Research, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMRK',
        name : "A",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMRN',
        name : "Amarin Corporation plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMRS',
        name : "Amyris, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMSC',
        name : "American Superconductor Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMSF',
        name : "AMERISAFE, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMSG',
        name : "Amsurg Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMSGP',
        name : "Amsurg Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMSWA',
        name : "American Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMTX',
        name : "Aemetis, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMWD',
        name : "American Woodmark Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AMZN',
        name : "Amazon.com, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANAC',
        name : "Anacor Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANAD',
        name : "ANADIGICS, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANAT',
        name : "American National Insurance Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANCB',
        name : "Anchor Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANCI',
        name : "American Caresource Holdings Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANCX',
        name : "Access National Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANDE',
        name : "The Andersons, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANGI',
        name : "Angie's List, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANGO',
        name : "AngioDynamics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANIK',
        name : "Anika Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANIP',
        name : "ANI Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANSS',
        name : "ANSYS, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANTH',
        name : "Anthera Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ANY',
        name : "Sphere 3D Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AOSL',
        name : "Alpha and Omega Semiconductor Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APAGF',
        name : "Apco Oil and Gas International Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APDN',
        name : "Applied DNA Sciences Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APDNW',
        name : "Applied DNA Sciences Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APEI',
        name : "American Public Education, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APOG',
        name : "Apogee Enterprises, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APOL',
        name : "Apollo Education Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APPY',
        name : "Venaxis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APRI',
        name : "Apricus Biosciences, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APSA',
        name : "Alto Palermo S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APTO',
        name : "Aptose Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'APWC',
        name : "Asia Pacific Wire & Cable Corporation Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AQXP',
        name : "Aquinox Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARAY',
        name : "Accuray Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARCB',
        name : "ArcBest Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARCC',
        name : "Ares Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARCI',
        name : "Appliance Recycling Centers of America, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARCP',
        name : "American Realty Capital Properties, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARCPP',
        name : "American Realty Capital Properties, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARCW',
        name : "ARC Group Worldwide, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARDM',
        name : "Aradigm Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARDX',
        name : "Ardelyx, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AREX',
        name : "Approach Resources Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARGS',
        name : "Argos Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARIA',
        name : "ARIAD Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARII',
        name : "American Railcar Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARIS',
        name : "ARI Network Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARKR',
        name : "Ark Restaurants Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARLP',
        name : "Alliance Resource Partners, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARMH',
        name : "ARM Holdings plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARNA',
        name : "Arena Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AROW',
        name : "Arrow Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARQL',
        name : "ArQule, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARRS',
        name : "ARRIS Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARRY',
        name : "Array BioPharma Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARTNA',
        name : "Artesian Resources Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARTW',
        name : "Art's",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARTX',
        name : "Arotech Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARUN',
        name : "Aruba Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ARWR',
        name : "Arrowhead Research Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASBB',
        name : "ASB Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASBI',
        name : "Ameriana Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASCMA',
        name : "Ascent Capital Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASEI',
        name : "American Science and Engineering, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASFI',
        name : "Asta Funding, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASMB',
        name : "Assembly Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASMI',
        name : "ASM International N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASML',
        name : "ASML Holding N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASNA',
        name : "Ascena Retail Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASPS',
        name : "Altisource Portfolio Solutions S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASPX',
        name : "Auspex Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASRV',
        name : "AmeriServ Financial Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASRVP',
        name : "AmeriServ Financial Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASTC',
        name : "Astrotech Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASTE',
        name : "Astec Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASTI',
        name : "Ascent Solar Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASUR',
        name : "Asure Software Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ASYS',
        name : "Amtech Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATAI',
        name : "ATA Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATAX',
        name : "America First Multifamily Investors, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATEA',
        name : "Astea International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATEC',
        name : "Alphatec Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATHN',
        name : "athenahealth, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATHX',
        name : "Athersys, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATLC',
        name : "Atlanticus Holdings Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATLO',
        name : "Ames National Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATML',
        name : "Atmel Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATNI',
        name : "Atlantic Tele",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATNY',
        name : "API Technologies Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATOS',
        name : "Atossa Genetics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATRA',
        name : "Atara Biotherapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATRC',
        name : "AtriCure, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATRI',
        name : "ATRION Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATRM',
        name : "ATRM Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATRO',
        name : "Astronics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATRS',
        name : "Antares Pharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATSG',
        name : "Air Transport Services Group, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATTU',
        name : "Attunity Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ATVI',
        name : "Activision Blizzard, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AUBN',
        name : "Auburn National Bancorporation, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AUDC',
        name : "AudioCodes Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AUMA',
        name : "AR Capital Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AUMAU',
        name : "AR Capital Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AUMAW',
        name : "AR Capital Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AUPH',
        name : "Aurinia Pharmaceuticals Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AUXL',
        name : "Auxilium Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AVAV',
        name : "AeroVironment, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AVEO',
        name : "AVEO Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AVGO',
        name : "Avago Technologies Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AVHI',
        name : "A V Homes, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AVID',
        name : "Avid Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AVNR',
        name : "Avanir Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AVNW',
        name : "Aviat Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AWAY',
        name : "HomeAway, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AWRE',
        name : "Aware, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AXAS',
        name : "Abraxas Petroleum Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AXDX',
        name : "Accelerate Diagnostics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AXGN',
        name : "AxoGen, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AXJS',
        name : "iShares MSCI All Country Asia ex Japan Small Cap Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AXPW',
        name : "Axion Power International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AXPWW',
        name : "Axion Power International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AXTI',
        name : "AXT Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'AZPN',
        name : "Aspen Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BABY',
        name : "Natus Medical Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BAGR',
        name : "Diversified Restaurant Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BAMM',
        name : "Books",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BANF',
        name : "BancFirst Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BANFP',
        name : "BancFirst Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BANR',
        name : "Banner Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BANX',
        name : "StoneCastle Financial Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BASI',
        name : "Bioanalytical Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBBY',
        name : "Bed Bath & Beyond Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBC',
        name : "BioShares Biotechnology Clinical Trials Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBCN',
        name : "BBCN Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBEP',
        name : "BreitBurn Energy Partners, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBEPP',
        name : "BreitBurn Energy Partners, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBGI',
        name : "Beasley Broadcast Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBLU',
        name : "Blue Earth, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBNK',
        name : "Bridge Capital Holdings",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBOX',
        name : "Black Box Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBP',
        name : "BioShares Biotechnology Products Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBRG',
        name : "Bravo Brio Restaurant Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBRY',
        name : "BlackBerry Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BBSI',
        name : "Barrett Business Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BCBP',
        name : "BCB Bancorp, Inc. (NJ)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BCLI',
        name : "Brainstorm Cell Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BCOM',
        name : "B Communications Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BCOR',
        name : "Blucora, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BCOV',
        name : "Brightcove Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BCPC',
        name : "Balchem Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BCRX',
        name : "BioCryst Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BDBD',
        name : "Boulder Brands, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BDCV',
        name : "BDCA Venture, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BDE',
        name : "Black Diamond, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BDGE',
        name : "Bridge Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BDMS',
        name : "Birner Dental Management Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BDSI',
        name : "BioDelivery Sciences International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BEAT',
        name : "BioTelemetry, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BEAV',
        name : "B/E Aerospace, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BEBE',
        name : "bebe stores, inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BECN',
        name : "Beacon Roofing Supply, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BELFA',
        name : "Bel Fuse Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BELFB',
        name : "Bel Fuse Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BFIN',
        name : "BankFinancial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BGCP',
        name : "BGC Partners, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BGFV',
        name : "Big 5 Sporting Goods Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BGMD',
        name : "BG Medicine, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BHBK',
        name : "Blue Hills Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIB',
        name : "ProShares Ultra Nasdaq Biotechnology",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BICK',
        name : "First Trust BICK Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIDU',
        name : "Baidu, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIIB',
        name : "Biogen Idec Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIND',
        name : "BIND Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIOC',
        name : "Biocept, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIOD',
        name : "Biodel Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIOL',
        name : "Biolase, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIOS',
        name : "BioScrip, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIRT',
        name : "Actuate Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BIS',
        name : "ProShares UltraShort Nasdaq Biotechnology",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BJRI',
        name : "BJ's Restaurants, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BKCC',
        name : "BlackRock Kelso Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BKEP',
        name : "Blueknight Energy Partners L.P., L.L.C.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BKEPP',
        name : "Blueknight Energy Partners L.P., L.L.C.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BKMU',
        name : "Bank Mutual Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BKSC',
        name : "Bank of South Carolina Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BKYF',
        name : "The Bank of Kentucky Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLCM',
        name : "Bellicum Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLDP',
        name : "Ballard Power Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLDR',
        name : "Builders FirstSource, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLFS',
        name : "BioLife Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLIN',
        name : "Bridgeline Digital, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLKB',
        name : "Blackbaud, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLMN',
        name : "Bloomin' Brands, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLMT',
        name : "BSB Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLRX',
        name : "BioLineRx Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLUE',
        name : "bluebird bio, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLVD',
        name : "Boulevard Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLVDU',
        name : "Boulevard Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BLVDW',
        name : "Boulevard Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BMRC',
        name : "Bank of Marin Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BMRN',
        name : "BioMarin Pharmaceutical Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BMTC',
        name : "Bryn Mawr Bank Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BNCL',
        name : "Beneficial Mutual Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BNCN',
        name : "BNC Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BNDX',
        name : "Vanguard Total International Bond ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BNFT',
        name : "Benefitfocus, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BNSO',
        name : "Bonso Electronics International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOBE',
        name : "Bob Evans Farms, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOCH',
        name : "Bank of Commerce Holdings (CA)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOFI',
        name : "BofI Holding, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOKF',
        name : "BOK Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BONA',
        name : "Bona Film Group Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BONT',
        name : "The Bon",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOOM',
        name : "Dynamic Materials Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOSC',
        name : "B.O.S. Better Online Solutions",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOTA',
        name : "Biota Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BOTJ',
        name : "Bank of the James Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BPFH',
        name : "Boston Private Financial Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BPFHP',
        name : "Boston Private Financial Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BPFHW',
        name : "Boston Private Financial Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BPOP',
        name : "Popular, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BPOPM',
        name : "Popular, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BPOPN',
        name : "Popular, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BPTH',
        name : "Bio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRCD',
        name : "Brocade Communications Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRCM',
        name : "Broadcom Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRDR',
        name : "Borderfree, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BREW',
        name : "Craft Brew Alliance, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRID',
        name : "Bridgford Foods Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRKL',
        name : "Brookline Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRKR',
        name : "Bruker Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRKS',
        name : "Brooks Automation, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BRLI',
        name : "Bio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSDM',
        name : "BSD Medical Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSET',
        name : "Bassett Furniture Industries, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSF',
        name : "Bear State Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSFT',
        name : "BroadSoft, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSPM',
        name : "Biostar Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSQR',
        name : "BSQUARE Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSRR',
        name : "Sierra Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BSTC',
        name : "BioSpecifics Technologies Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BTUI',
        name : "BTU International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BUR',
        name : "Burcon NutraScience Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BUSE',
        name : "First Busey Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BV',
        name : "Bazaarvoice, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BVA',
        name : "Cordia Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BVSN',
        name : "BroadVision, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BWEN',
        name : "Broadwind Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BWFG',
        name : "Bankwell Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BWINA',
        name : "Baldwin & Lyons, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BWINB',
        name : "Baldwin & Lyons, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BWLD',
        name : "Buffalo Wild Wings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BYBK',
        name : "Bay Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BYFC',
        name : "Broadway Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'BYLK',
        name : "Baylake Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CA',
        name : "CA Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAAS',
        name : "China Automotive Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAC',
        name : "Camden National Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CACB',
        name : "Cascade Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CACC',
        name : "Credit Acceptance Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CACG',
        name : "Chart Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CACGU',
        name : "Chart Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CACGW',
        name : "Chart Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CACH',
        name : "Cache, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CACQ',
        name : "Caesars Acquisition Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CADC',
        name : "China Advanced Construction Materials Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CADT',
        name : "DT Asia Investments Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CADTR',
        name : "DT Asia Investments Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CADTU',
        name : "DT Asia Investments Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CADTW',
        name : "DT Asia Investments Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAKE',
        name : "The Cheesecake Factory Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CALA',
        name : "Calithera Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CALD',
        name : "Callidus Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CALI',
        name : "China Auto Logistics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CALL',
        name : "magicJack VocalTec Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CALM',
        name : "Cal",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAMB',
        name : "Cambridge Capital Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAMBU',
        name : "Cambridge Capital Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAMBW',
        name : "Cambridge Capital Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAMP',
        name : "CalAmp Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAMT',
        name : "Camtek Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAPN',
        name : "Capnia, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAPNW',
        name : "Capnia, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAR',
        name : "Avis Budget Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CARA',
        name : "Cara Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CARB',
        name : "Carbonite, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CARO',
        name : "Carolina Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CART',
        name : "Carolina Trust Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CARV',
        name : "Carver Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CARZ',
        name : "First Trust NASDAQ Global Auto Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CASH',
        name : "Meta Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CASI',
        name : "CASI Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CASM',
        name : "CAS Medical Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CASS',
        name : "Cass Information Systems, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CASY',
        name : "Caseys General Stores, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CATM',
        name : "Cardtronics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CATY',
        name : "Cathay General Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CATYW',
        name : "Cathay General Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CAVM',
        name : "Cavium, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBAK',
        name : "China BAK Battery, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBAN',
        name : "Colony Bankcorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBAY',
        name : "CymaBay Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBDE',
        name : "CBD Energy Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBF',
        name : "Capital Bank Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBFV',
        name : "CB Financial Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBIN',
        name : "Community Bank Shares of Indiana, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBLI',
        name : "Cleveland BioLabs, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBMG',
        name : "Cellular Biomedicine Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBMX',
        name : "CombiMatrix Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBNJ',
        name : "Cape Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBNK',
        name : "Chicopee Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBOE',
        name : "CBOE Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBPO',
        name : "China Biologic Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBRL',
        name : "Cracker Barrel Old Country Store, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBRX',
        name : "Columbia Laboratories, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBSH',
        name : "Commerce Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBSHP',
        name : "Commerce Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBST',
        name : "Cubist Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CBSTZ',
        name : "Cubist Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCBG',
        name : "Capital City Bank Group",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCCL',
        name : "China Ceramics Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCCR',
        name : "China Commercial Credit, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCIH',
        name : "ChinaCache International Holdings Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCLP',
        name : "CSI Compressco LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCMP',
        name : "Cabot Microelectronics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCNE',
        name : "CNB Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCOI',
        name : "Cogent Communications Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCRN',
        name : "Cross Country Healthcare, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCUR',
        name : "Concurrent Computer Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CCXI',
        name : "ChemoCentryx, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDC',
        name : "Compass EMP U S EQ Income 100 Enhanced Volatility Weighted Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDK',
        name : "CDK Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDNA',
        name : "CareDx, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDNS',
        name : "Cadence Design Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDTI',
        name : "Clean Diesel Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDW',
        name : "CDW Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDXS',
        name : "Codexis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CDZI',
        name : "Cadiz, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CECE',
        name : "CECO Environmental Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CECO',
        name : "Career Education Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CELG',
        name : "Celgene Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CELGZ',
        name : "Celgene Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CEMI',
        name : "Chembio Diagnostics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CEMP',
        name : "Cempra, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CENT',
        name : "Central Garden & Pet Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CENTA',
        name : "Central Garden & Pet Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CENX',
        name : "Century Aluminum Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CERE',
        name : "Ceres, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CERN',
        name : "Cerner Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CERS',
        name : "Cerus Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CERU',
        name : "Cerulean Pharma Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CETV',
        name : "Central European Media Enterprises Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CEVA',
        name : "CEVA, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFA',
        name : "Compass EMP US 500 Volatility Weighted Index ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFBK',
        name : "Central Federal Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFFI',
        name : "C&F Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFFN',
        name : "Capitol Federal Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFGE',
        name : "Calamos Focus Growth ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFNB',
        name : "California First National Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFNL',
        name : "Cardinal Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFO',
        name : "Compass EMP US 500 Enhanced Volatility Weighted Index ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFRX',
        name : "ContraFect Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFRXW',
        name : "ContraFect Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CFRXZ',
        name : "ContraFect Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CG',
        name : "The Carlyle Group L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CGEN',
        name : "Compugen Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CGIX',
        name : "Cancer Genetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CGNX',
        name : "Cognex Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CGO',
        name : "Calamos Global Total Return Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHCI',
        name : "Comstock Holding Companies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHCO',
        name : "City Holding Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHDN',
        name : "Churchill Downs, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHEF',
        name : "The Chefs' Warehouse, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHEV',
        name : "Cheviot Financial Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHFC',
        name : "Chemical Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHFN',
        name : "Charter Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHI',
        name : "Calamos Convertible Opportunities and Income Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHKE',
        name : "Cherokee Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHKP',
        name : "Check Point Software Technologies Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHLN',
        name : "China Housing & Land Development, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHMG',
        name : "Chemung Financial Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHNR',
        name : "China Natural Resources, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHOP',
        name : "China Gerui Advanced Materials Group Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHRS',
        name : "Coherus BioSciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHRW',
        name : "C.H. Robinson Worldwide, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHSCM',
        name : "CHS Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHSCN',
        name : "CHS Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHSCO',
        name : "CHS Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHSCP',
        name : "CHS Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHTR',
        name : "Charter Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHUY',
        name : "Chuy's Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHW',
        name : "Calamos Global Dynamic Income Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHXF',
        name : "WisdomTree China Dividend Ex",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHY',
        name : "Calamos Convertible and High Income Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CHYR',
        name : "ChyronHego Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CIDM',
        name : "Cinedigm Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CIFC',
        name : "CIFC Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CIMT',
        name : "Cimatron, Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CINF',
        name : "Cincinnati Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CISAW',
        name : "CIS Acquisition Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CISG',
        name : "CNinsure Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CIZ',
        name : "Compass EMP Developed 500 Enhanced Volatility Weighted Index ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CIZN',
        name : "Citizens Holding Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CJJD',
        name : "China Jo",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CKEC',
        name : "Carmike Cinemas, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CKSW',
        name : "ClickSoftware Technologies Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLAC',
        name : "Capitol Acquisition Corp. II",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLACU',
        name : "Capitol Acquisition Corp. II",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLACW',
        name : "Capitol Acquisition Corp. II",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLBH',
        name : "Carolina Bank Holdings Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLCT',
        name : "Collectors Universe, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLDN',
        name : "Celladon Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLDX',
        name : "Celldex Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLFD',
        name : "Clearfield, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLIR',
        name : "ClearSign Combustion Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLMS',
        name : "Calamos Asset Management, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLMT',
        name : "Calumet Specialty Products Partners, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLNE',
        name : "Clean Energy Fuels Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLNT',
        name : "Cleantech Solutions International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLRB',
        name : "Cellectar Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLRBW',
        name : "Cellectar Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLRO',
        name : "ClearOne, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLRX',
        name : "CollabRx, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLSN',
        name : "Celsion Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLTX',
        name : "Celsus Therapeutics Plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLUB',
        name : "Town Sports International Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLVS',
        name : "Clovis Oncology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CLWT',
        name : "Euro Tech Holdings Company Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMCO',
        name : "Columbus McKinnon Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMCSA',
        name : "Comcast Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMCSK',
        name : "Comcast Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMCT',
        name : "CIM Commercial Trust Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CME',
        name : "CME Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMFN',
        name : "CM Finance Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMGE',
        name : "China Mobile Games and Entertainment Group Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMLS',
        name : "Cumulus Media Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMPR',
        name : "Cimpress N.V",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMRX',
        name : "Chimerix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMSB',
        name : "CMS Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CMTL',
        name : "Comtech Telecommunications Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNAT',
        name : "Conatus Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNBKA',
        name : "Century Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNCE',
        name : "Concert Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNDO',
        name : "Coronado Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNET',
        name : "ChinaNet Online Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNIT',
        name : "China Information Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNLM',
        name : "CB Pharma Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNLMR',
        name : "CB Pharma Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNLMU',
        name : "CB Pharma Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNLMW',
        name : "CB Pharma Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNMD',
        name : "CONMED Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNOB',
        name : "ConnectOne Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNSI',
        name : "Comverse Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNSL',
        name : "Consolidated Communications Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNTF',
        name : "China TechFaith Wireless Communication Technology Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNTY',
        name : "Century Casinos, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNV',
        name : "Cnova N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNXR',
        name : "Connecture, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CNYD',
        name : "China Yida Holding, Co.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COB',
        name : "CommunityOne Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COBK',
        name : "Colonial Financial Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COBZ',
        name : "CoBiz Financial Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COCO',
        name : "Corinthian Colleges, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COHR',
        name : "Coherent, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COHU',
        name : "Cohu, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COKE',
        name : "Coca",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COLB',
        name : "Columbia Banking System, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COLM',
        name : "Columbia Sportswear Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COMM',
        name : "CommScope Holding Company, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COMT',
        name : "iShares Commodities Select Strategy ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CONE',
        name : "CyrusOne Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CONN',
        name : "Conn's, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COOL',
        name : "Majesco Entertainment Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CORE',
        name : "Core",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CORI',
        name : "Corium International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CORT',
        name : "Corcept Therapeutics Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COSI',
        name : "Cosi, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COST',
        name : "Costco Wholesale Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COVS',
        name : "Covisint Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COWN',
        name : "Cowen Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'COWNL',
        name : "Cowen Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPAH',
        name : "CounterPath Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPGI',
        name : "China Shengda Packaging Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPHC',
        name : "Canterbury Park Holding Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPHD',
        name : "CEPHEID",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPHR',
        name : "Cipher Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPIX',
        name : "Cumberland Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPLA',
        name : "Capella Education Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPLP',
        name : "Capital Product Partners L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPRT',
        name : "Copart, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPRX',
        name : "Catalyst Pharmaceutical Partners, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPSI',
        name : "Computer Programs and Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPSS',
        name : "Consumer Portfolio Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPST',
        name : "Capstone Turbine Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPTA',
        name : "Capitala Finance Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CPXX',
        name : "Celator Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRAI',
        name : "CRA International,Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRAY',
        name : "Cray Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRDC',
        name : "Cardica, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRDS',
        name : "Crossroads Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRDT',
        name : "WisdomTree Strategic Corporate Bond Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CREE',
        name : "Cree, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CREG',
        name : "China Recycling Energy Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRESW',
        name : "Cresud S.A.C.I.F. y A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRESY',
        name : "Cresud S.A.C.I.F. y A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRIS',
        name : "Curis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRME',
        name : "Cardiome Pharma Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRMT',
        name : "America's Car",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRNT',
        name : "Ceragon Networks Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CROX',
        name : "Crocs, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRRC',
        name : "Courier Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRRS',
        name : "Corporate Resource Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRTN',
        name : "Cartesian, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRTO',
        name : "Criteo S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRUS',
        name : "Cirrus Logic, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRVL',
        name : "CorVel Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRWN',
        name : "Crown Media Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRWS',
        name : "Crown Crafts, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CRZO',
        name : "Carrizo Oil & Gas, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSBK',
        name : "Clifton Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSCD',
        name : "Cascade Microtech, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSCO',
        name : "Cisco Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSF',
        name : "Compass EMP U.S. Discovery 500 Enhanced Volatility Weighted Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSFL',
        name : "CenterState Banks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSGP',
        name : "CoStar Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSGS',
        name : "CSG Systems International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSII',
        name : "Cardiovascular Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSIQ',
        name : "Canadian Solar Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSOD',
        name : "Cornerstone OnDemand, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSPI',
        name : "CSP Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSQ',
        name : "Calamos Strategic Total Return Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSRE',
        name : "CSR plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSTE',
        name : "CaesarStone Sdot",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSUN',
        name : "China Sunergy Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CSWC',
        name : "Capital Southwest Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTAS',
        name : "Cintas Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTBI',
        name : "Community Trust Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTCM',
        name : "CTC Media, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTCT',
        name : "Constant Contact, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTG',
        name : "Computer Task Group, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTHR',
        name : "Charles & Colvard Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTIB',
        name : "CTI Industries Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTIC',
        name : "CTI BioPharma Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTRE',
        name : "CareTrust REIT, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTRL',
        name : "Control4 Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTRN',
        name : "Citi Trends, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTRP',
        name : "Ctrip.com International, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTRX',
        name : "Catamaran Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTSH',
        name : "Cognizant Technology Solutions Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTSO',
        name : "Cytosorbents Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTWS',
        name : "Connecticut Water Service, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CTXS',
        name : "Citrix Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CU',
        name : "First Trust ISE Global Copper Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CUBA',
        name : "The Herzfeld Caribbean Basin Fund, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CUI',
        name : "CUI Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CUNB',
        name : "CU Bancorp (CA)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CUTR',
        name : "Cutera, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVBF',
        name : "CVB Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVCO',
        name : "Cavco Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVCY',
        name : "Central Valley Community Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVGI',
        name : "Commercial Vehicle Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVGW',
        name : "Calavo Growers, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVLT',
        name : "CommVault Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVLY',
        name : "Codorus Valley Bancorp, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVTI',
        name : "Covenant Transportation Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CVV',
        name : "CVD Equipment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CWAY',
        name : "Coastway Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CWBC',
        name : "Community West Bancshares",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CWCO',
        name : "Consolidated Water Co. Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CWST',
        name : "Casella Waste Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CXDC',
        name : "China XD Plastics Company Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CY',
        name : "Cypress Semiconductor Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYAN',
        name : "Cyanotech Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYBE',
        name : "CyberOptics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYBR',
        name : "CyberArk Software Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYBX',
        name : "Cyberonics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYCC',
        name : "Cyclacel Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYCCP',
        name : "Cyclacel Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYHHZ',
        name : "Community Health Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYNO',
        name : "Cynosure, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYOU',
        name : "Changyou.com Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYRN',
        name : "CYREN Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYTK',
        name : "Cytokinetics, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYTR',
        name : "CytRx Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CYTX',
        name : "Cytori Therapeutics Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CZFC',
        name : "Citizens First Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CZNC',
        name : "Citizens & Northern Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CZR',
        name : "Caesars Entertainment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'CZWI',
        name : "Citizens Community Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DAEG',
        name : "Daegis Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DAIO',
        name : "Data I/O Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DAKT',
        name : "Daktronics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DARA',
        name : "DARA Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DATE',
        name : "Jiayuan.com International Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DAVE',
        name : "Famous Dave's of America, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DAX',
        name : "Recon Capital DAX Germany ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DBVT',
        name : "DBV Technologies S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DCIX',
        name : "Diana Containerships Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DCOM',
        name : "Dime Community Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DCTH',
        name : "Delcath Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DENN',
        name : "Denny's Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DEPO',
        name : "Depomed, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DERM',
        name : "Dermira, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DEST',
        name : "Destination Maternity Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DFRG',
        name : "Del Frisco's Restaurant Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DFVL',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DFVS',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGAS',
        name : "Delta Natural Gas Company, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGICA',
        name : "Donegal Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGICB',
        name : "Donegal Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGII',
        name : "Digi International Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGLD',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGLY',
        name : "Digital Ally, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGRE',
        name : "WisdomTree Emerging Markets Dividend Growth Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGRS',
        name : "WisdomTree U.S. SmallCap Dividend Growth Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DGRW',
        name : "WisdomTree U.S. Dividend Growth Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DHIL',
        name : "Diamond Hill Investment Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DHRM',
        name : "Dehaier Medical Systems Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DIOD',
        name : "Diodes Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DISCA',
        name : "Discovery Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DISCB',
        name : "Discovery Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DISCK',
        name : "Discovery Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DISH',
        name : "DISH Network Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DJCO',
        name : "Daily Journal Corp. (S.C.)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DLBL',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DLBS',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DLHC',
        name : "DLH Holdings Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DLTR',
        name : "Dollar Tree, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DMLP',
        name : "Dorchester Minerals, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DMND',
        name : "Diamond Foods, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DMRC',
        name : "Digimarc Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DNBF',
        name : "DNB Financial Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DNKN',
        name : "Dunkin' Brands Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DORM',
        name : "Dorman Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DOVR',
        name : "Dover Saddlery, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DOX',
        name : "Amdocs Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DPRX',
        name : "Dipexium Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRAD',
        name : "Digirad Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRAM',
        name : "Dataram Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRIV',
        name : "Digital River, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRNA',
        name : "Dicerna Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRRX',
        name : "DURECT Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRWI',
        name : "DragonWave Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRWIW',
        name : "DragonWave Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DRYS',
        name : "DryShips Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSCI',
        name : "Derma Sciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSCO',
        name : "Discovery Laboratories, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSGX',
        name : "The Descartes Systems Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSKX',
        name : "DS Healthcare Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSKY',
        name : "iDreamSky Technology Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSLV',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSPG',
        name : "DSP Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DSWL',
        name : "Deswell Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DTLK',
        name : "Datalink Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DTSI',
        name : "DTS, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DTUL',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DTUS',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DTV',
        name : "DIRECTV",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DTYL',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DTYS',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DVAX',
        name : "Dynavax Technologies Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DVCR',
        name : "Diversicare Healthcare Services Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DWA',
        name : "Dreamworks Animation SKG, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DWAT',
        name : "Arrow DWA Tactical ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DWCH',
        name : "Datawatch Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DWSN',
        name : "Dawson Geophysical Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXCM',
        name : "DexCom, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXGE',
        name : "WisdomTree Germany Hedged Equity Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXJS',
        name : "WisdomTree Japan Hedged SmallCap Equity Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXKW',
        name : "WisdomTree Korea Hedged Equity Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXLG',
        name : "Destination XL Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXM',
        name : "Dex Media, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXPE',
        name : "DXP Enterprises, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXPS',
        name : "WisdomTree United Kingdom Hedged Equity Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DXYN',
        name : "The Dixie Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DYAX',
        name : "Dyax Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DYNT',
        name : "Dynatronics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'DYSL',
        name : "Dynasil Corporation of America",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EA',
        name : "Electronic Arts Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EAC',
        name : "Erickson Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EARS',
        name : "Auris Medical Holding AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EBAY',
        name : "eBay Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EBIO',
        name : "Eleven Biotherapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EBIX',
        name : "Ebix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EBMT',
        name : "Eagle Bancorp Montana, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EBSB',
        name : "Meridian Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EBTC',
        name : "Enterprise Bancorp Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ECHO',
        name : "Echo Global Logistics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ECOL',
        name : "US Ecology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ECPG',
        name : "Encore Capital Group Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ECTE',
        name : "Echo Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ECYT',
        name : "Endocyte, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EDAP',
        name : "EDAP TMS S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EDGW',
        name : "Edgewater Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EDS',
        name : "Exceed Company Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EDUC',
        name : "Educational Development Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EEFT',
        name : "Euronet Worldwide, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EEI',
        name : "Ecology and Environment, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EEMA',
        name : "iShares MSCI Emerging Markets Asia Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EEME',
        name : "iShares MSCI Emerging Markets EMEA Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EEML',
        name : "iShares MSCI Emerging Markets Latin America Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EFII',
        name : "Electronics for Imaging, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EFOI',
        name : "Energy Focus, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EFSC',
        name : "Enterprise Financial Services Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EFUT',
        name : "eFuture Information Technology Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGAN',
        name : "eGain Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGBN',
        name : "Eagle Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGHT',
        name : "8x8 Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGLE',
        name : "Eagle Bulk Shipping Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGLT',
        name : "Egalet Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGOV',
        name : "NIC Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGRW',
        name : "iShares MSCI Emerging Markets Growth Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGRX',
        name : "Eagle Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EGT',
        name : "Entertainment Gaming Asia Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EHTH',
        name : "eHealth, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EIGI',
        name : "Endurance International Group Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ELGX',
        name : "Endologix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ELNK',
        name : "EarthLink Holdings Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ELON',
        name : "Echelon Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ELOS',
        name : "Syneron Medical Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ELRC',
        name : "Electro Rent Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ELSE',
        name : "Electro",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ELTK',
        name : "Eltek Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMCB',
        name : "WisdomTree Emerging Markets Corporate Bond Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMCF',
        name : "Emclaire Financial Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMCG',
        name : "WisdomTree Emerging Markets Consumer Growth Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMCI',
        name : "EMC Insurance Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMDI',
        name : "iShares MSCI Emerging Markets Consumer Discrectionary Sector Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMEY',
        name : "iShares MSCI Emerging Markets Energy Sector Capped Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMIF',
        name : "iShares S&P Emerging Markets Infrastructure Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMITF',
        name : "Elbit Imaging Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMKR',
        name : "EMCORE Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EML',
        name : "Eastern Company (The)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMMS',
        name : "Emmis Communications Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EMMSP',
        name : "Emmis Communications Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENDP',
        name : "Endo International plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENFC',
        name : "Entegra Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENG',
        name : "ENGlobal Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENOC',
        name : "EnerNOC, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENPH',
        name : "Enphase Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENSG',
        name : "The Ensign Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENT',
        name : "Global Eagle Entertainment Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENTA',
        name : "Enanta Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENTG',
        name : "Entegris, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENTR',
        name : "Entropic Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENVI',
        name : "Envivio, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENZN',
        name : "Enzon Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ENZY',
        name : "Enzymotec Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EOPN',
        name : "E2open, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EPAX',
        name : "Ambassadors Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EPAY',
        name : "Bottomline Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EPIQ',
        name : "EPIQ Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EPRS',
        name : "EPIRUS Biopharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EPZM',
        name : "Epizyme, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EQIX',
        name : "Equinix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ERI',
        name : "Eldorado Resorts, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ERIC',
        name : "Ericsson",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ERIE',
        name : "Erie Indemnity Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ERII',
        name : "Energy Recovery, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EROC',
        name : "Eagle Rock Energy Partners, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ERS',
        name : "Empire Resources, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ERW',
        name : "VelocityShares Equal Risk Weighted Large Cap ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESBF',
        name : "ESB Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESBK',
        name : "Elmira Savings Bank NY (The)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESCA',
        name : "Escalade, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESCR',
        name : "Escalera Resources Co.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESCRP',
        name : "Escalera Resources Co.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESEA',
        name : "Euroseas Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESGR',
        name : "Enstar Group Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESIO',
        name : "Electro Scientific Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESLT',
        name : "Elbit Systems Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESMC',
        name : "Escalon Medical Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESPR',
        name : "Esperion Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESRX',
        name : "Express Scripts Holding Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESSA',
        name : "ESSA Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESSX',
        name : "Essex Rental Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESXB',
        name : "Community Bankers Trust Corporation.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ESYS',
        name : "Elecsys Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ETFC',
        name : "E*TRADE Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ETRM',
        name : "EnteroMedics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EUFN',
        name : "iShares MSCI Europe Financials Sector Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVAL',
        name : "iShares MSCI Emerging Markets Value Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVAR',
        name : "Lombard Medical, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVBS',
        name : "Eastern Virginia Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVEP',
        name : "EV Energy Partners, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVK',
        name : "Ever",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVLV',
        name : "EVINE Live Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVOK',
        name : "Evoke Pharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVOL',
        name : "Evolving Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EVRY',
        name : "EveryWare Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EWBC',
        name : "East West Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXA',
        name : "Exa Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXAC',
        name : "Exactech, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXAS',
        name : "Exact Sciences Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXEL',
        name : "Exelixis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXFO',
        name : "EXFO Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXLP',
        name : "Exterran Partners, L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXLS',
        name : "ExlService Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXPD',
        name : "Expeditors International of Washington, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXPE',
        name : "Expedia, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXPO',
        name : "Exponent, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXTR',
        name : "Extreme Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EXXI',
        name : "Energy XXI Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EYES',
        name : "Second Sight Medical Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EZCH',
        name : "EZchip Semiconductor Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'EZPW',
        name : "EZCORP, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FALC',
        name : "FalconStor Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FANG',
        name : "Diamondback Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FARM',
        name : "Farmer Brothers Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FARO',
        name : "FARO Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FAST',
        name : "Fastenal Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FATE',
        name : "Fate Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FB',
        name : "Facebook, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FBIZ',
        name : "First Business Financial Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FBMS',
        name : "The First Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FBNC',
        name : "First Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FBNK',
        name : "First Connecticut Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FBRC',
        name : "FBR & Co",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FBSS',
        name : "Fauquier Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCAP',
        name : "First Capital, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCBC',
        name : "First Community Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCCO',
        name : "First Community Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCCY',
        name : "1st Constitution Bancorp (NJ)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCEL',
        name : "FuelCell Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCFS',
        name : "First Cash Financial Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCHI',
        name : "iShares FTSE China (HK Listed) Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCLF',
        name : "First Clover Leaf Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCNCA',
        name : "First Citizens BancShares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCS',
        name : "Fairchild Semiconductor International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCSC',
        name : "Fibrocell Science Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCTY',
        name : "1st Century Bancshares, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCVA',
        name : "First Capital Bancorp, Inc. (VA)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCZA',
        name : "First Citizens Banc Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FCZAP',
        name : "First Citizens Banc Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FDEF',
        name : "First Defiance Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FDIV',
        name : "First Trust Strategic Income ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FDML',
        name : "Federal",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FDUS',
        name : "Fidus Investment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FEIC',
        name : "FEI Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FEIM',
        name : "Frequency Electronics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FELE',
        name : "Franklin Electric Co., Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FEMB',
        name : "First Trust Emerging Markets Local Currency Bond ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FES',
        name : "Forbes Energy Services Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FEUZ',
        name : "First Trust Eurozone AlphaDEX ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FEYE',
        name : "FireEye, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFBC',
        name : "First Financial Bancorp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFBCW',
        name : "First Financial Bancorp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFHL',
        name : "Fuwei Films (Holdings) Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFIC',
        name : "Flushing Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFIN',
        name : "First Financial Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFIV',
        name : "F5 Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFKT',
        name : "Farmers Capital Bank Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFNM',
        name : "First Federal of Northern Michigan Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFNW',
        name : "First Financial Northwest, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FFWM',
        name : "First Foundation Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FGEN',
        name : "FibroGen, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FHCO',
        name : "Female Health Company (The)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FIBK',
        name : "First Interstate BancSystem, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FINL',
        name : "The Finish Line, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FISH',
        name : "Marlin Midstream Partners, LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FISI',
        name : "Financial Institutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FISV',
        name : "Fiserv, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FITB',
        name : "Fifth Third Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FITBI',
        name : "Fifth Third Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FIVE',
        name : "Five Below, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FIVN',
        name : "Five9, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FIZZ',
        name : "National Beverage Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLAT',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLDM',
        name : "Fluidigm Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLEX',
        name : "Flextronics International Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLIC',
        name : "The First of Long Island Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLIR',
        name : "FLIR Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLL',
        name : "Full House Resorts, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLML',
        name : "Flamel Technologies S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLWS',
        name : "1",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLXN',
        name : "Flexion Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FLXS',
        name : "Flexsteel Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FMB',
        name : "First Trust Managed Municipal ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FMBH',
        name : "First Mid",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FMBI',
        name : "First Midwest Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FMER',
        name : "FirstMerit Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FMI',
        name : "Foundation Medicine, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FMNB',
        name : "Farmers National Banc Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNBC',
        name : "First NBC Bank Holding Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNFG',
        name : "First Niagara Financial Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNGN',
        name : "Financial Engines, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNHC',
        name : "Federated National Holding Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNJN',
        name : "Finjan Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNLC',
        name : "First Bancorp, Inc (ME)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNRG',
        name : "ForceField Energy Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FNSR',
        name : "Finisar Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FOLD',
        name : "Amicus Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FOMX',
        name : "Foamix Pharmaceuticals Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FONE',
        name : "First Trust NASDAQ CEA Smartphone Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FONR',
        name : "Fonar Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FORD',
        name : "Forward Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FORM',
        name : "FormFactor, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FORR',
        name : "Forrester Research, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FORTY',
        name : "Formula Systems (1985) Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FOSL',
        name : "Fossil Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FOX',
        name : "Twenty",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FOXA',
        name : "Twenty",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FOXF',
        name : "Fox Factory Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FPRX',
        name : "Five Prime Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FPXI',
        name : "First Trust International IPO ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRAN',
        name : "Francesca's Holdings Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRBA',
        name : "First Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRBK',
        name : "Republic First Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRED',
        name : "Fred's, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FREE',
        name : "FreeSeas Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRGI',
        name : "Fiesta Restaurant Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRME',
        name : "First Merchants Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRP',
        name : "FairPoint Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRPH',
        name : "FRP Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRPHV',
        name : "FRP Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRPT',
        name : "Freshpet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FRSH',
        name : "Papa Murphy's Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSAM',
        name : "Fifth Street Asset Management Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSBK',
        name : "First South Bancorp Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSBW',
        name : "FS Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSC',
        name : "Fifth Street Finance Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSCFL',
        name : "Fifth Street Finance Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSFG',
        name : "First Savings Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSFR',
        name : "Fifth Street Senior Floating Rate Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSGI',
        name : "First Security Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSLR',
        name : "First Solar, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSNN',
        name : "Fusion Telecommunications International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSRV',
        name : "FirstService Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSTR',
        name : "L.B. Foster Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FSYS',
        name : "Fuel Systems Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTCS',
        name : "First Trust Capital Strength ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTD',
        name : "FTD Companies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTEK',
        name : "Fuel Tech, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTGC',
        name : "First Trust Global Tactical Commodity Strategy Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTHI',
        name : "First Trust High Income ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTLB',
        name : "First Trust Low Beta Income ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTNT',
        name : "Fortinet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTR',
        name : "Frontier Communications Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTSL',
        name : "First Trust Senior Loan Fund ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FTSM',
        name : "First Trust Enhanced Short Maturity ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FUEL',
        name : "Rocket Fuel Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FULL',
        name : "Full Circle Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FULLL',
        name : "Full Circle Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FULT',
        name : "Fulton Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FUNC',
        name : "First United Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FUND',
        name : "Royce Focus Trust, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FV',
        name : "First Trust Dorsey Wright Focus 5 ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FWM',
        name : "Fairway Group Holdings Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FWP',
        name : "Forward Pharma A/S",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FWRD',
        name : "Forward Air Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FXCB',
        name : "Fox Chase Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FXEN',
        name : "FX Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'FXENP',
        name : "FX Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GABC',
        name : "German American Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GAI',
        name : "Global",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GAIA',
        name : "Gaiam, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GAIN',
        name : "Gladstone Investment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GAINO',
        name : "Gladstone Investment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GAINP',
        name : "Gladstone Investment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GALE',
        name : "Galena Biopharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GALT',
        name : "Galectin Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GALTU',
        name : "Galectin Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GALTW',
        name : "Galectin Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GAME',
        name : "Shanda Games Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GARS',
        name : "Garrison Capital Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GASS',
        name : "StealthGas, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GBCI',
        name : "Glacier Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GBDC',
        name : "Golub Capital BDC, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GBIM',
        name : "GlobeImmune, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GBLI',
        name : "Global Indemnity plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GBNK',
        name : "Guaranty Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GBSN',
        name : "Great Basin Scientific, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GCBC',
        name : "Greene County Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GCVRZ',
        name : "Sanofi",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GDEF',
        name : "Global Defense & National Security Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GENC',
        name : "Gencor Industries Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GENE',
        name : "Genetic Technologies Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GEOS',
        name : "Geospace Technologies Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GERN',
        name : "Geron Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GEVA',
        name : "Synageva BioPharma Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GEVO',
        name : "Gevo, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GFED',
        name : "Guaranty Federal Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GFN',
        name : "General Finance Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GFNCP',
        name : "General Finance Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GFNSL',
        name : "General Finance Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GGAC',
        name : "Garnero Group Acquisition Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GGACR',
        name : "Garnero Group Acquisition Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GGACU',
        name : "Garnero Group Acquisition Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GGACW',
        name : "Garnero Group Acquisition Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GGAL',
        name : "Grupo Financiero Galicia S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GHDX',
        name : "Genomic Health, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GIFI',
        name : "Gulf Island Fabrication, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GIGA',
        name : "Giga",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GIGM',
        name : "GigaMedia Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GIII',
        name : "G",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GILD',
        name : "Gilead Sciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GILT',
        name : "Gilat Satellite Networks Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GK',
        name : "G&K Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GKNT',
        name : "Geeknet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLAD',
        name : "Gladstone Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLADO',
        name : "Gladstone Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLBS',
        name : "Globus Maritime Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLBZ',
        name : "Glen Burnie Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLDC',
        name : "Golden Enterprises, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLDD',
        name : "Great Lakes Dredge & Dock Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLDI',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLMD',
        name : "Galmed Pharmaceuticals Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLNG',
        name : "Golar LNG Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLPI',
        name : "Gaming and Leisure Properties, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLRE',
        name : "Greenlight Reinsurance, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLRI',
        name : "Glori Energy Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLUU',
        name : "Glu Mobile Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GLYC',
        name : "GlycoMimetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GMAN',
        name : "Gordmans Stores, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GMCR',
        name : "Keurig Green Mountain, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GMLP',
        name : "Golar LNG Partners LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GNBC',
        name : "Green Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GNCA',
        name : "Genocea Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GNCMA',
        name : "General Communication, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GNMA',
        name : "iShares Core GNMA Bond ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GNMK',
        name : "GenMark Diagnostics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GNTX',
        name : "Gentex Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GNVC',
        name : "GenVec, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOGO',
        name : "Gogo Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOLD',
        name : "Randgold Resources Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOMO',
        name : "Sungy Mobile Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOOD',
        name : "Gladstone Commercial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOODN',
        name : "Gladstone Commercial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOODO',
        name : "Gladstone Commercial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOODP',
        name : "Gladstone Commercial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOOG',
        name : "Google Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GOOGL',
        name : "Google Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GPIC',
        name : "Gaming Partners International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GPOR',
        name : "Gulfport Energy Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GPRE',
        name : "Green Plains, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GPRO',
        name : "GoPro, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GRBK',
        name : "Green Brick Partners, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GRFS',
        name : "Grifols, S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GRID',
        name : "First Trust NASDAQ Clean Edge Smart Grid Infrastructure Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GRIF',
        name : "Griffin Land & Nurseries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GRMN',
        name : "Garmin Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GROW',
        name : "U.S. Global Investors, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GRPN',
        name : "Groupon, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GRVY',
        name : "GRAVITY Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GSBC',
        name : "Great Southern Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GSIG',
        name : "GSI Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GSIT',
        name : "GSI Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GSM',
        name : "Globe Specialty Metals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GSOL',
        name : "Global Sources Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GSVC',
        name : "GSV Capital Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GT',
        name : "The Goodyear Tire & Rubber Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GTIM',
        name : "Good Times Restaurants Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GTIV',
        name : "Gentiva Health Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GTLS',
        name : "Chart Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GTWN',
        name : "Georgetown Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GTXI',
        name : "GTx, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GUID',
        name : "Guidance Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GULF',
        name : "WisdomTree Middle East Dividend Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GULTU',
        name : "Gulf Coast Ultra Deep Royalty Trust",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GURE',
        name : "Gulf Resources, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GWGH',
        name : "GWG Holdings, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GWPH',
        name : "GW Pharmaceuticals Plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'GYRO',
        name : "Gyrodyne Company of America, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HA',
        name : "Hawaiian Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HABT',
        name : "The Habit Restaurants, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HAFC',
        name : "Hanmi Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HAIN',
        name : "The Hain Celestial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HALL',
        name : "Hallmark Financial Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HALO',
        name : "Halozyme Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HART',
        name : "Harvard Apparatus Regenerative Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HAS',
        name : "Hasbro, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HAWK',
        name : "Blackhawk Network Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HAWKB',
        name : "Blackhawk Network Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HAYN',
        name : "Haynes International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBAN',
        name : "Huntington Bancshares Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBANP',
        name : "Huntington Bancshares Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBCP',
        name : "Home Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBHC',
        name : "Hancock Holding Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBIO',
        name : "Harvard Bioscience, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBK',
        name : "Hamilton Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBMD',
        name : "Howard Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBNC',
        name : "Horizon Bancorp (IN)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBNK',
        name : "Hampden Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBOS',
        name : "Heritage Financial Group",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HBP',
        name : "Huttig Building Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCAC',
        name : "Hennessy Capital Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCACU',
        name : "Hennessy Capital Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCACW',
        name : "Hennessy Capital Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCAP',
        name : "Harvest Capital Credit Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCBK',
        name : "Hudson City Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCCI',
        name : "Heritage",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCKT',
        name : "The Hackett Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCOM',
        name : "Hawaiian Telcom Holdco, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCSG',
        name : "Healthcare Services Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HCT',
        name : "American Realty Capital Healthcare Trust, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDNG',
        name : "Hardinge, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDP',
        name : "Hortonworks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDRA',
        name : "Hydra Industries Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDRAR',
        name : "Hydra Industries Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDRAU',
        name : "Hydra Industries Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDRAW',
        name : "Hydra Industries Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDS',
        name : "HD Supply Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HDSN',
        name : "Hudson Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HEAR',
        name : "Turtle Beach Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HEES',
        name : "H&E Equipment Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HELE',
        name : "Helen of Troy Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HEOP',
        name : "Heritage Oaks Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HERO',
        name : "Hercules Offshore, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HFBC',
        name : "HopFed Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HFBL',
        name : "Home Federal Bancorp, Inc. of Louisiana",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HFFC',
        name : "HF Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HFWA',
        name : "Heritage Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HGSH',
        name : "China HGS Real Estate, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HIBB',
        name : "Hibbett Sports, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HIFS',
        name : "Hingham Institution for Savings",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HIHO',
        name : "Highway Holdings Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HIIQ',
        name : "Health Insurance Innovations, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HILL',
        name : "Dot Hill Systems Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HIMX',
        name : "Himax Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HKTV',
        name : "Hong Kong Television Network Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HLIT',
        name : "Harmonic Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HLSS',
        name : "Home Loan Servicing Solutions, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMHC',
        name : "Houghton Mifflin Harcourt Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMIN',
        name : "Homeinns Hotel Group",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMNF',
        name : "HMN Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMNY',
        name : "Helios and Matheson Analytics Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMPR',
        name : "Hampton Roads Bankshares Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMST',
        name : "HomeStreet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMSY',
        name : "HMS Holdings Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HMTV',
        name : "Hemisphere Media Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HNH',
        name : "Handy & Harman Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HNNA',
        name : "Hennessy Advisors, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HNRG',
        name : "Hallador Energy Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HNSN',
        name : "Hansen Medical, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HOFT',
        name : "Hooker Furniture Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HOLI',
        name : "Hollysys Automation Technologies, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HOLX',
        name : "Hologic, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HOMB',
        name : "Home BancShares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HOTR',
        name : "Chanticleer Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HOTRW',
        name : "Chanticleer Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HOVNP',
        name : "Hovnanian Enterprises Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HPJ',
        name : "Highpower International Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HPTX',
        name : "Hyperion Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HQY',
        name : "HealthEquity, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HRTX',
        name : "Heron Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HRZN',
        name : "Horizon Technology Finance Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSGX',
        name : "Histogenics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSIC',
        name : "Henry Schein, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSII',
        name : "Heidrick & Struggles International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSKA',
        name : "Heska Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSNI',
        name : "HSN, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSOL',
        name : "Hanwha SolarOne Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSON',
        name : "Hudson Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HSTM',
        name : "HealthStream, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTBI',
        name : "HomeTrust Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTBK',
        name : "Heritage Commerce Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTBX',
        name : "Heat Biologics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTCH',
        name : "Hutchinson Technology Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTHT',
        name : "China Lodging Group, Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTLD',
        name : "Heartland Express, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTLF',
        name : "Heartland Financial USA, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTWO',
        name : "HF2 Financial Management Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HTWR',
        name : "Heartware International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HUBG',
        name : "Hub Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HURC',
        name : "Hurco Companies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HURN',
        name : "Huron Consulting Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HWAY',
        name : "Healthways, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HWBK',
        name : "Hawthorn Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HWCC',
        name : "Houston Wire & Cable Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HWKN',
        name : "Hawkins, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HYGS',
        name : "Hydrogenics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HYLS',
        name : "First Trust High Yield Long/Short ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HYND',
        name : "WisdomTree BofA Merrill Lynch High Yield Bond Negative Duration Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HYZD',
        name : "WisdomTree BofA Merrill Lynch High Yield Bond Zero Duration Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'HZNP',
        name : "Horizon Pharma plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IACI',
        name : "IAC/InterActiveCorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IART',
        name : "Integra LifeSciences Holdings Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IBB',
        name : "iShares Nasdaq Biotechnology Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IBCA',
        name : "Intervest Bancshares Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IBCP',
        name : "Independent Bank Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IBKC',
        name : "IBERIABANK Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IBKR',
        name : "Interactive Brokers Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IBOC',
        name : "International Bancshares Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IBTX',
        name : "Independent Bank Group, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICAD',
        name : "icad inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICCC',
        name : "ImmuCell Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICEL',
        name : "Cellular Dynamics International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICFI',
        name : "ICF International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICLD',
        name : "InterCloud Systems, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICLDW',
        name : "InterCloud Systems, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICLN',
        name : "iShares S&P Global Clean Energy Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICLR',
        name : "ICON plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICON',
        name : "Iconix Brand Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICPT',
        name : "Intercept Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ICUI',
        name : "ICU Medical, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IDCC',
        name : "InterDigital, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IDRA',
        name : "Idera Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IDSA',
        name : "Industrial Services of America, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IDSY',
        name : "I.D. Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IDTI',
        name : "Integrated Device Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IDXX',
        name : "IDEXX Laboratories, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IEP',
        name : "Icahn Enterprises L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IESC',
        name : "Integrated Electrical Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IEUS',
        name : "iShares MSCI Europe Small",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IFAS',
        name : "iShares FTSE EPRA/NAREIT Asia Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IFEU',
        name : "iShares FTSE EPRA/NAREIT Europe Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IFGL',
        name : "iShares FTSE EPRA/NAREIT Global Real Estate ex",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IFNA',
        name : "iShares FTSE EPRA/NAREIT North America Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IFON',
        name : "InfoSonics Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IFV',
        name : "First Trust Dorsey Wright International Focus 5 ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IGLD',
        name : "Internet Gold Golden Lines Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IGOV',
        name : "iShares S&P/Citigroup International Treasury Bond Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IGTE',
        name : "iGATE Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'III',
        name : "Information Services Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IIIN',
        name : "Insteel Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IIJI',
        name : "Internet Initiative Japan, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IILG',
        name : "Interval Leisure Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IIN',
        name : "IntriCon Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IIVI',
        name : "II",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IKAN',
        name : "Ikanos Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IKGH',
        name : "Iao Kun Group Holding Company Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IKNX',
        name : "Ikonics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ILMN',
        name : "Illumina, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMDZ',
        name : "Immune Design Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMGN',
        name : "ImmunoGen, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMI',
        name : "Intermolecular, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMKTA',
        name : "Ingles Markets, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMMR',
        name : "Immersion Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMMU',
        name : "Immunomedics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMMY',
        name : "Imprimis Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMNP',
        name : "Immune Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMOS',
        name : "ChipMOS TECHNOLOGIES (Bermuda) LTD.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IMRS',
        name : "Imris Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INAP',
        name : "Internap Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INBK',
        name : "First Internet Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INCR',
        name : "INC Research Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INCY',
        name : "Incyte Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INDB',
        name : "Independent Bank Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INDY',
        name : "iShares S&P India Nifty 50 Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INFA',
        name : "Informatica Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INFI',
        name : "Infinity Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INFN',
        name : "Infinera Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INGN',
        name : "Inogen, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ININ',
        name : "Interactive Intelligence Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INNL',
        name : "Innocoll AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INO',
        name : "Inovio Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INOD',
        name : "Innodata Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INPH',
        name : "Interphase Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INSM',
        name : "Insmed, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INSY',
        name : "Insys Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INTC',
        name : "Intel Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INTG',
        name : "The Intergroup Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INTL',
        name : "INTL FCStone Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INTLL',
        name : "INTL FCStone Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INTU',
        name : "Intuit Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INTX',
        name : "Intersections, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INVE',
        name : "Identiv, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INVT',
        name : "Inventergy Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'INWK',
        name : "InnerWorkings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IOSP',
        name : "Innospec Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPAR',
        name : "Inter Parfums, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPAS',
        name : "iPass Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPCC',
        name : "Infinity Property and Casualty Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPCI',
        name : "Intellipharmaceutics International Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPCM',
        name : "IPC Healthcare, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPDN',
        name : "Professional Diversity Network, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPGP',
        name : "IPG Photonics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPHS',
        name : "Innophos Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPKW',
        name : "PowerShares International BuyBack Achievers Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPWR',
        name : "Ideal Power Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IPXL',
        name : "Impax Laboratories, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IQNT',
        name : "Inteliquent, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRBT',
        name : "iRobot Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRDM',
        name : "Iridium Communications Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRDMB',
        name : "Iridium Communications Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRDMZ',
        name : "Iridium Communications Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRG',
        name : "Ignite Restaurant Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRIX',
        name : "IRIDEX Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRMD',
        name : "iRadimed Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IROQ',
        name : "IF Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IRWD',
        name : "Ironwood Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISBC',
        name : "Investors Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISCA',
        name : "International Speedway Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISHG',
        name : "iShares S&P/Citigroup 1",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISIG',
        name : "Insignia Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISIL',
        name : "Intersil Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISIS',
        name : "Isis Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISLE',
        name : "Isle of Capri Casinos, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISM',
        name : "SLM Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISNS',
        name : "Image Sensing Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISRG',
        name : "Intuitive Surgical, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISRL',
        name : "Isramco, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISSC',
        name : "Innovative Solutions and Support, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISSI',
        name : "Integrated Silicon Solution, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ISTR',
        name : "Investar Holding Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ITCI',
        name : "Intra",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ITIC',
        name : "Investors Title Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ITRI',
        name : "Itron, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ITRN',
        name : "Ituran Location and Control Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IVAC',
        name : "Intevac, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IVAN',
        name : "Ivanhoe Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'IXYS',
        name : "IXYS Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JACK',
        name : "Jack In The Box Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JACQ',
        name : "Collabrium Japan Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JACQU',
        name : "Collabrium Japan Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JACQW',
        name : "Collabrium Japan Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JAKK',
        name : "JAKKS Pacific, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JASN',
        name : "Jason Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JASNW',
        name : "Jason Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JASO',
        name : "JA Solar Holdings, Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JAXB',
        name : "Jacksonville Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JAZZ',
        name : "Jazz Pharmaceuticals plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JBHT',
        name : "J.B. Hunt Transport Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JBLU',
        name : "JetBlue Airways Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JBSS',
        name : "John B. Sanfilippo & Son, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JCOM',
        name : "j2 Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JCS',
        name : "Communications Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JCTCF',
        name : "Jewett",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JD',
        name : "JD.com, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JDSU',
        name : "JDS Uniphase Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JGBB',
        name : "WisdomTree Japan Interest Rate Strategy Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JIVE',
        name : "Jive Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JJSF',
        name : "J & J Snack Foods Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JKHY',
        name : "Jack Henry & Associates, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JMBA',
        name : "Jamba, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JOBS',
        name : "51job, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JOEZ',
        name : "Joe's Jeans Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JOUT',
        name : "Johnson Outdoors Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JRJC',
        name : "China Finance Online Co. Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JRVR',
        name : "James River Group Holdings, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JSM',
        name : "SLM Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JST',
        name : "Jinpan International Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JTPY',
        name : "JetPay Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JUNO',
        name : "Juno Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JVA',
        name : "Coffee Holding Co., Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JXSB',
        name : "Jacksonville Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'JYNT',
        name : "The Joint Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KALU',
        name : "Kaiser Aluminum Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KANG',
        name : "iKang Healthcare Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KBAL',
        name : "Kimball International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KBIO',
        name : "KaloBios Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KBSF',
        name : "KBS Fashion Group Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KCAP',
        name : "KCAP Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KCLI',
        name : "Kansas City Life Insurance Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KE',
        name : "Kimball Electronics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KELYA',
        name : "Kelly Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KELYB',
        name : "Kelly Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KEQU',
        name : "Kewaunee Scientific Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KERX',
        name : "Keryx Biopharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KEYW',
        name : "The KEYW Holding Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KFFB',
        name : "Kentucky First Federal Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KFRC',
        name : "Kforce, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KFX',
        name : "Kofax Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KGJI',
        name : "Kingold Jewelry Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KIN',
        name : "Kindred Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KINS',
        name : "Kingstone Companies, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KIRK',
        name : "Kirkland's, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KITE',
        name : "Kite Pharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KLAC',
        name : "KLA",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KLIC',
        name : "Kulicke and Soffa Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KLXI',
        name : "KLX Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KMDA',
        name : "Kamada Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KNDI',
        name : "Kandi Technologies Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KONA',
        name : "Kona Grill, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KONE',
        name : "Kingtone Wirelessinfo Solution Holding Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KOOL',
        name : "Cesca Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KOPN',
        name : "Kopin Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KOSS',
        name : "Koss Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KPTI',
        name : "Karyopharm Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KRFT',
        name : "Kraft Foods Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KRNY',
        name : "Kearny Financial",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KTCC',
        name : "Key Tronic Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KTEC',
        name : "Key Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KTOS',
        name : "Kratos Defense & Security Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KTWO',
        name : "K2M Group Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KUTV',
        name : "Ku6 Media Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KVHI',
        name : "KVH Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KWEB',
        name : "KraneShares CSI China Internet ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KYTH',
        name : "Kythera Biopharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'KZ',
        name : "KongZhong Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LABC',
        name : "Louisiana Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LABL',
        name : "Multi",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LACO',
        name : "Lakes Entertainment, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LAKE',
        name : "Lakeland Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LALT',
        name : "PowerShares Actively Managed Exchange",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LAMR',
        name : "Lamar Advertising Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LANC',
        name : "Lancaster Colony Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LAND',
        name : "Gladstone Land Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LARK',
        name : "Landmark Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LAWS',
        name : "Lawson Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LAYN',
        name : "Layne Christensen Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBAI',
        name : "Lakeland Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBIX',
        name : "Leading Brands Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBRDA',
        name : "Liberty Broadband Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBRDK',
        name : "Liberty Broadband Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBRKR',
        name : "Liberty Broadband Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBTYA',
        name : "Liberty Global plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBTYB',
        name : "Liberty Global plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LBTYK',
        name : "Liberty Global plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LCNB',
        name : "LCNB Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LCUT',
        name : "Lifetime Brands, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LDRH',
        name : "LDR Holding Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LDRI',
        name : "PowerShares LadderRite 0",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LE',
        name : "Lands' End, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LECO',
        name : "Lincoln Electric Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LEDS',
        name : "SemiLEDS Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LEVY',
        name : "Levy Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LEVYU',
        name : "Levy Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LEVYW',
        name : "Levy Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LFUS',
        name : "Littelfuse, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LFVN',
        name : "Lifevantage Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LGCY',
        name : "Legacy Reserves LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LGCYO',
        name : "Legacy Reserves LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LGCYP',
        name : "Legacy Reserves LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LGIH',
        name : "LGI Homes, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LGND',
        name : "Ligand Pharmaceuticals Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LHCG',
        name : "LHC Group",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LIME',
        name : "Lime Energy Co.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LINC',
        name : "Lincoln Educational Services Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LINE',
        name : "Linn Energy, LLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LION',
        name : "Fidelity Southern Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LIOX',
        name : "Lionbridge Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LIQD',
        name : "Liquid Holdings Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LIVE',
        name : "LiveDeal, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LJPC',
        name : "La Jolla Pharmaceutical Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LKFN',
        name : "Lakeland Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LKQ',
        name : "LKQ Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LLEX',
        name : "Lilis Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LLNW',
        name : "Limelight Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LLTC',
        name : "Linear Technology Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMAT',
        name : "LeMaitre Vascular, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMBS',
        name : "First Trust Low Duration Mortgage Opportunities ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMCA',
        name : "Liberty Media Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMCB',
        name : "Liberty Media Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMCK',
        name : "Liberty Media Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMIA',
        name : "LMI Aerospace, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMNR',
        name : "Limoneira Co",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMNS',
        name : "Lumenis Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMNX',
        name : "Luminex Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMOS',
        name : "Lumos Networks Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LMRK',
        name : "Landmark Infrastructure Partners LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LNBB',
        name : "LNB Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LNCE',
        name : "Snyder's",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LNCO',
        name : "Linn Co, LLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LNDC',
        name : "Landec Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOAN',
        name : "Manhattan Bridge Capital, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOCM',
        name : "Local Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOCO',
        name : "El Pollo Loco Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOGI',
        name : "Logitech International S.A.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOGM',
        name : "LogMein, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOJN',
        name : "LoJack Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LONG',
        name : "eLong, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOOK',
        name : "LookSmart, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOPE',
        name : "Grand Canyon Education, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LORL',
        name : "Loral Space and Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LOXO',
        name : "Loxo Oncology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPCN',
        name : "Lipocine Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPHI',
        name : "Life Partners Holdings Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPLA',
        name : "LPL Financial Holdings Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPNT',
        name : "LifePoint Hospitals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPSB',
        name : "LaPorte Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPSN',
        name : "LivePerson, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPTH',
        name : "LightPath Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LPTN',
        name : "Lpath, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LQDT',
        name : "Liquidity Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LRAD',
        name : "LRAD Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LRCX',
        name : "Lam Research Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LSBK',
        name : "Lake Shore Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LSCC',
        name : "Lattice Semiconductor Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LSTR',
        name : "Landstar System, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LTBR',
        name : "Lightbridge Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LTRE',
        name : "Learning Tree International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LTRPA',
        name : "Liberty TripAdvisor Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LTRPB',
        name : "Liberty TripAdvisor Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LTRX',
        name : "Lantronix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LTXB',
        name : "LegacyTexas Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LULU',
        name : "lululemon athletica inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LUNA',
        name : "Luna Innovations Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LVNTA',
        name : "Liberty Interactive Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LVNTB',
        name : "Liberty Interactive Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LWAY',
        name : "Lifeway Foods, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LXRX',
        name : "Lexicon Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'LYTS',
        name : "LSI Industries Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MACK',
        name : "Merrimack Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MAG',
        name : "Magnetek, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MAGS',
        name : "Magal Security Systems Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MAMS',
        name : "MAM Software Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MANH',
        name : "Manhattan Associates, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MANT',
        name : "ManTech International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MAR',
        name : "Marriott International",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MARA',
        name : "Marathon Patent Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MARK',
        name : "Remark Media, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MARPS',
        name : "Marine Petroleum Trust",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MASI',
        name : "Masimo Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MAT',
        name : "Mattel, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MATR',
        name : "Mattersight Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MATW',
        name : "Matthews International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MAYS',
        name : "J. W. Mays, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBCN',
        name : "Middlefield Banc Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBFI',
        name : "MB Financial Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBFIP',
        name : "MB Financial Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBII',
        name : "Marrone Bio Innovations, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBLX',
        name : "Metabolix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBRG',
        name : "Middleburg Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBSD',
        name : "FlexShares Disciplined Duration MBS Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBTF',
        name : "M B T Financial Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBUU',
        name : "Malibu Boats, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBVT',
        name : "Merchants Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MBWM',
        name : "Mercantile Bank Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCBC',
        name : "Macatawa Bank Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCBK',
        name : "Madison County Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCEP',
        name : "Mid",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCGC',
        name : "MCG Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCHP',
        name : "Microchip Technology Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCHX',
        name : "Marchex, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCOX',
        name : "Mecox Lane Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCRI',
        name : "Monarch Casino & Resort, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCRL',
        name : "Micrel, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MCUR',
        name : "Macrocure Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDAS',
        name : "MedAssets, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDCA',
        name : "MDC Partners Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDCO',
        name : "The Medicines Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDIV',
        name : "First Trust Exchange",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDLZ',
        name : "Mondelez International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDM',
        name : "Mountain Province Diamonds Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDRX',
        name : "Allscripts Healthcare Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDSO',
        name : "Medidata Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDSY',
        name : "BluePhoenix Solutions, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDVN',
        name : "Medivation, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDVXU',
        name : "Medovex Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDWD',
        name : "MediWound Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MDXG',
        name : "MiMedx Group, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MEET',
        name : "MeetMe, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MEIL',
        name : "Methes Energies International Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MEILW',
        name : "Methes Energies International Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MEILZ',
        name : "Methes Energies International Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MEIP',
        name : "MEI Pharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MELA',
        name : "MELA Sciences, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MELI',
        name : "MercadoLibre, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MELR',
        name : "Melrose Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MEMP',
        name : "Memorial Production Partners LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MENT',
        name : "Mentor Graphics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MEOH',
        name : "Methanex Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MERC',
        name : "Mercer International Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MERU',
        name : "Meru Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'METR',
        name : "Metro Bancorp, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MFI',
        name : "MicroFinancial Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MFLX',
        name : "Multi",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MFNC',
        name : "Mackinac Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MFRI',
        name : "MFRI, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MFRM',
        name : "Mattress Firm Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MFSF',
        name : "MutualFirst Financial Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGCD',
        name : "MGC Diagnostics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGEE',
        name : "MGE Energy Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGI',
        name : "Moneygram International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGIC',
        name : "Magic Software Enterprises Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGLN',
        name : "Magellan Health, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGNX',
        name : "MacroGenics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGPI',
        name : "MGP Ingredients, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGRC',
        name : "McGrath RentCorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MGYR',
        name : "Magyar Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MHGC',
        name : "Morgans Hotel Group Co.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MHLD',
        name : "Maiden Holdings, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MHLDO',
        name : "Maiden Holdings, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MICT',
        name : "Micronet Enertec Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MICTW',
        name : "Micronet Enertec Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MIDD',
        name : "The Middleby Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MIFI',
        name : "Novatel Wireless, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MIK',
        name : "The Michaels Companies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MIND',
        name : "Mitcham Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MINI',
        name : "Mobile Mini, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MITK',
        name : "Mitek Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MITL',
        name : "Mitel Networks Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MKSI',
        name : "MKS Instruments, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MKTO',
        name : "Marketo, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MKTX',
        name : "MarketAxess Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MLAB',
        name : "Mesa Laboratories, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MLHR',
        name : "Herman Miller, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MLNK',
        name : "ModusLink Global Solutions, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MLNX',
        name : "Mellanox Technologies, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MLVF',
        name : "Malvern Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MMAC',
        name : "MMA Capital Management, LLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MMLP',
        name : "Martin Midstream Partners L.P.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MMSI',
        name : "Merit Medical Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MMYT',
        name : "MakeMyTrip Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNDL',
        name : "Mandalay Digital Group, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNDO',
        name : "MIND C.T.I. Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNGA',
        name : "MagneGas Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNKD',
        name : "MannKind Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNOV',
        name : "MediciNova, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNRK',
        name : "Monarch Financial Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNRO',
        name : "Monro Muffler Brake, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNST',
        name : "Monster Beverage Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNTA',
        name : "Momenta Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MNTX',
        name : "Manitex International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOBI',
        name : "Sky",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOBL',
        name : "MobileIron, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOCO',
        name : "MOCON, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOFG',
        name : "MidWestOne Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOKO',
        name : "MOKO Social Media Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOLG',
        name : "MOL Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOMO',
        name : "Momo Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MORN',
        name : "Morningstar, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MOSY',
        name : "MoSys, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MPAA',
        name : "Motorcar Parts of America, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MPB',
        name : "Mid Penn Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MPEL',
        name : "Melco Crown Entertainment Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MPET',
        name : "Magellan Petroleum Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MPWR',
        name : "Monolithic Power Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRCC',
        name : "Monroe Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRCY',
        name : "Mercury Systems Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRD',
        name : "Memorial Resource Development Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRGE',
        name : "Merge Healthcare Incorporated.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRKT',
        name : "Markit Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRLN',
        name : "Marlin Business Services Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRNS',
        name : "Marinus Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRTN',
        name : "Marten Transport, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRTX',
        name : "Mirati Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRVC',
        name : "MRV Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MRVL',
        name : "Marvell Technology Group Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSBF',
        name : "MSB Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSCC',
        name : "Microsemi Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSEX',
        name : "Middlesex Water Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSFG',
        name : "MainSource Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSFT',
        name : "Microsoft Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSG',
        name : "The Madison Square Garden Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSLI',
        name : "Merus Labs International Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSON',
        name : "MISONIX, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MSTR',
        name : "MicroStrategy Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTBC',
        name : "Medical Transcription Billing, Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTEX',
        name : "Mannatech, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTGE',
        name : "American Capital Mortgage Investment Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTGEP',
        name : "American Capital Mortgage Investment Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTLS',
        name : "Materialise NV",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTRX',
        name : "Matrix Service Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTSC',
        name : "MTS Systems Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTSI',
        name : "M/A",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTSL',
        name : "MER Telemanagement Solutions Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MTSN',
        name : "Mattson Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MU',
        name : "Micron Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MULT',
        name : "AdvisorShares Sunrise Global Multi",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MVIS',
        name : "Microvision, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MWIV',
        name : "MWI Veterinary Supply, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MXIM',
        name : "Maxim Integrated Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MXWL',
        name : "Maxwell Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MYGN',
        name : "Myriad Genetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MYL',
        name : "Mylan Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MYOS',
        name : "MYOS Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MYRG',
        name : "MYR Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'MZOR',
        name : "Mazor Robotics Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NAII',
        name : "Natural Alternatives International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NAME',
        name : "Rightside Group, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NANO',
        name : "Nanometrics Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NATH',
        name : "Nathan's Famous, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NATI',
        name : "National Instruments Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NATL',
        name : "National Interstate Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NATR',
        name : "Nature's Sunshine Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NAUH',
        name : "National American University Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NAVG',
        name : "The Navigators Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NAVI',
        name : "Navient Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NBBC',
        name : "NewBridge Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NBIX',
        name : "Neurocrine Biosciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NBN',
        name : "Northeast Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NBS',
        name : "Neostem, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NBTB',
        name : "NBT Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NBTF',
        name : "NB&T FINANCIAL GROUP INC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NCIT',
        name : "NCI, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NCLH',
        name : "Norwegian Cruise Line Holdings Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NCMI',
        name : "National CineMedia, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NCTY',
        name : "The9 Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NDAQ',
        name : "The NASDAQ OMX Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NDLS',
        name : "Noodles & Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NDRM',
        name : "NeuroDerm Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NDSN',
        name : "Nordson Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NECB',
        name : "Northeast Community Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEO',
        name : "NeoGenomics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEOG',
        name : "Neogen Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEON',
        name : "Neonode Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEOT',
        name : "Neothetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEPT',
        name : "Neptune Technologies & Bioresources Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NERV',
        name : "Minerva Neurosciences, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NETE',
        name : "Net Element, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEWP',
        name : "Newport Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEWS',
        name : "NewStar Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NEWT',
        name : "Newtek Business Services Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NFBK',
        name : "Northfield Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NFEC',
        name : "NF Energy Saving Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NFLX',
        name : "Netflix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NGHC',
        name : "National General Holdings Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NGHCP',
        name : "National General Holdings Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NHTB',
        name : "New Hampshire Thrift Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NICE',
        name : "NICE",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NICK',
        name : "Nicholas Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NILE',
        name : "Blue Nile, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NKSH',
        name : "National Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NKTR',
        name : "Nektar Therapeutics",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NLNK',
        name : "NewLink Genetics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NLST',
        name : "Netlist, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NMIH',
        name : "NMI Holdings Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NMRX',
        name : "Numerex Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NNBR',
        name : "NN, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NPBC',
        name : "National Penn Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NPSP',
        name : "NPS Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NRCIA',
        name : "National Research Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NRCIB',
        name : "National Research Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NRIM',
        name : "Northrim BanCorp Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NRX',
        name : "NephroGenex, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NSEC',
        name : "National Security Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NSIT',
        name : "Insight Enterprises, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NSPH',
        name : "Nanosphere, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NSSC',
        name : "NAPCO Security Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NSTG',
        name : "NanoString Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NSYS',
        name : "Nortech Systems Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTAP',
        name : "NetApp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTCT',
        name : "NetScout Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTES',
        name : "NetEase, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTGR',
        name : "NETGEAR, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTIC',
        name : "Northern Technologies International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTK',
        name : "Nortek Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTLS',
        name : "NTELOS Holdings Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTRI',
        name : "NutriSystem Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTRS',
        name : "Northern Trust Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTRSP',
        name : "Northern Trust Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NTWK',
        name : "NetSol Technologies Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NUAN',
        name : "Nuance Communications, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NURO',
        name : "NeuroMetrix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NUTR',
        name : "Nutraceutical International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NUVA',
        name : "NuVasive, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVAX',
        name : "Novavax, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVCN',
        name : "Neovasc Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVDA',
        name : "NVIDIA Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVDQ',
        name : "Novadaq Technologies Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVEC',
        name : "NVE Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVEE',
        name : "NV5 Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVEEW',
        name : "NV5 Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVFY',
        name : "Nova Lifestyle, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVGN',
        name : "Novogen Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVMI',
        name : "Nova Measuring Instruments Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NVSL',
        name : "Naugatuck Valley Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWBI',
        name : "Northwest Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWBO',
        name : "Northwest Biotherapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWBOW',
        name : "Northwest Biotherapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWFL',
        name : "Norwood Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWLI',
        name : "National Western Life Insurance Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWPX',
        name : "Northwest Pipe Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWS',
        name : "News Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NWSA',
        name : "News Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NXPI',
        name : "NXP Semiconductors N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NXST',
        name : "Nexstar Broadcasting Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NXTD',
        name : "NXT",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NXTDW',
        name : "NXT",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NXTM',
        name : "NxStage Medical, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NYMT',
        name : "New York Mortgage Trust, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NYMTP',
        name : "New York Mortgage Trust, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NYMX',
        name : "Nymox Pharmaceutical Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'NYNY',
        name : "Empire Resorts, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OBAS',
        name : "Optibase Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OBCI',
        name : "Ocean Bio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OCC',
        name : "Optical Cable Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OCFC',
        name : "OceanFirst Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OCLR',
        name : "Oclaro, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OCLS',
        name : "Oculus Innovative Sciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OCRX',
        name : "Ocera Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OCUL',
        name : "Ocular Therapeutix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ODFL',
        name : "Old Dominion Freight Line, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ODP',
        name : "Office Depot, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OFED',
        name : "Oconee Federal Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OFIX',
        name : "Orthofix International N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OFLX',
        name : "Omega Flex, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OFS',
        name : "OFS Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OGXI',
        name : "OncoGenex Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OHAI',
        name : "OHA Investment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OHGI',
        name : "One Horizon Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OHRP',
        name : "Ohr Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OIIM',
        name : "O2Micro International Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OKSB',
        name : "Southwest Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OLBK',
        name : "Old Line Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OLED',
        name : "Universal Display Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OMAB',
        name : "Grupo Aeroportuario del Centro Norte S.A.B. de C.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OMCL',
        name : "Omnicell, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OMED',
        name : "OncoMed Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OMER',
        name : "Omeros Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OMEX',
        name : "Odyssey Marine Exploration, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONB',
        name : "Old National Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONCY',
        name : "Oncolytics Biotech, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONEQ',
        name : "Fidelity Nasdaq Composite Index Tracking Stock",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONFC',
        name : "Oneida Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONNN',
        name : "ON Semiconductor Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONTX',
        name : "Onconova Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONTY',
        name : "Oncothyreon Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ONVI',
        name : "Onvia, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OPB',
        name : "Opus Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OPHC',
        name : "OptimumBank Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OPHT',
        name : "Ophthotech Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OPOF',
        name : "Old Point Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OPTT',
        name : "Ocean Power Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OPXA',
        name : "Opexa Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORBC',
        name : "ORBCOMM Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORBK',
        name : "Orbotech Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OREX',
        name : "Orexigen Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORIG',
        name : "Ocean Rig UDW Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORIT',
        name : "Oritani Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORLY',
        name : "O'Reilly Automotive, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORMP',
        name : "Oramed Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORPN',
        name : "Bio Blast Pharma Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ORRF',
        name : "Orrstown Financial Services Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSBC',
        name : "Old Second Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSBCP',
        name : "Old Second Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSHC',
        name : "Ocean Shore Holding Co.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSIR',
        name : "Osiris Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSIS',
        name : "OSI Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSM',
        name : "SLM Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSN',
        name : "Ossen Innovation Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSTK',
        name : "Overstock.com, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OSUR',
        name : "OraSure Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OTEL',
        name : "Otelco Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OTEX',
        name : "Open Text Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OTIC',
        name : "Otonomy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OTIV',
        name : "On Track Innovations Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OTTR',
        name : "Otter Tail Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OUTR',
        name : "Outerwall Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OVAS',
        name : "OvaScience Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OVBC',
        name : "Ohio Valley Banc Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OVLY',
        name : "Oak Valley Bancorp (CA)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OVTI',
        name : "OmniVision Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXBR',
        name : "Oxbridge Re Holdings Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXBRW',
        name : "Oxbridge Re Holdings Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXFD',
        name : "Oxford Immunotec Global PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXGN',
        name : "OXiGENE, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXLC',
        name : "Oxford Lane Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXLCN',
        name : "Oxford Lane Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXLCO',
        name : "Oxford Lane Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OXLCP',
        name : "Oxford Lane Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'OZRK',
        name : "Bank of the Ozarks",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PAAS',
        name : "Pan American Silver Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PACB',
        name : "Pacific Biosciences of California, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PACW',
        name : "PacWest Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PAGG',
        name : "PowerShares Global Agriculture Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PAHC',
        name : "Phibro Animal Health Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PANL',
        name : "Pangaea Logistics Solutions Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PARN',
        name : "Parnell Pharmaceuticals Holdings Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PATIV',
        name : "New Patriot Transportation Holding, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PATK',
        name : "Patrick Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PAYX',
        name : "Paychex, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBCP',
        name : "Polonia Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBCT',
        name : "People's United Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBHC',
        name : "Pathfinder Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBIB',
        name : "Porter Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBIP',
        name : "Prudential Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBMD',
        name : "Prima BioMed Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBPB',
        name : "Potbelly Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PBSK',
        name : "Poage Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCAR',
        name : "PACCAR Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCBK',
        name : "Pacific Continental Corporation (Ore)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCCC',
        name : "PC Connection, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCH',
        name : "Potlatch Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCLN',
        name : "The Priceline Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCMI',
        name : "PCM, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCO',
        name : "Pendrell Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCOM',
        name : "Points International, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCRX',
        name : "Pacira Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCTI',
        name : "PC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCTY',
        name : "Paylocity Holding Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCYC',
        name : "Pharmacyclics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCYG',
        name : "Park City Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PCYO',
        name : "Pure Cycle Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PDBC',
        name : "PowerShares DB Optimum Yield Diversified Commodity Strategy Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PDCE',
        name : "PDC Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PDCO',
        name : "Patterson Companies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PDEX',
        name : "Pro",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PDFS',
        name : "PDF Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PDII',
        name : "PDI, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PDLI',
        name : "PDL BioPharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PEBK',
        name : "Peoples Bancorp of North Carolina, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PEBO',
        name : "Peoples Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PEGA',
        name : "Pegasystems Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PEGI',
        name : "Pattern Energy Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PEIX',
        name : "Pacific Ethanol, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PENN',
        name : "Penn National Gaming, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PENX',
        name : "Penford Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PEOP',
        name : "Peoples Federal Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PERF',
        name : "Perfumania Holdings, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PERI',
        name : "Perion Network Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PERY',
        name : "Perry Ellis International Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PESI',
        name : "Perma",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PETM',
        name : "PetSmart, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PETS',
        name : "PetMed Express, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PETX',
        name : "Aratana Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFBC',
        name : "Preferred Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFBI',
        name : "Premier Financial Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFBX',
        name : "Peoples Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFIE',
        name : "Profire Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFIN',
        name : "P & F Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFIS',
        name : "Peoples Financial Services Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFLT',
        name : "PennantPark Floating Rate Capital Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFMT',
        name : "Performant Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFPT',
        name : "Proofpoint, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PFSW',
        name : "PFSweb, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PGC',
        name : "Peapack",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PGNX',
        name : "Progenics Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PGTI',
        name : "PGT, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PHII',
        name : "PHI, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PHIIK',
        name : "PHI, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PHMD',
        name : "PhotoMedex, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PICO',
        name : "PICO Holdings Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PIH',
        name : "1347 Property Insurance Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PINC',
        name : "Premier, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PKBK',
        name : "Parke Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PKOH',
        name : "Park",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PKT',
        name : "Procera Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLAB',
        name : "Photronics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLAY',
        name : "Dave & Buster's Entertainment, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLBC',
        name : "Plumas Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLCE',
        name : "Children's Place, Inc. (The)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLCM',
        name : "Polycom, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLKI',
        name : "Popeyes Louisiana Kitchen, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLMT',
        name : "Palmetto Bancshares, Inc. (SC)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLNR',
        name : "Planar Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLPC',
        name : "Preformed Line Products Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLPM',
        name : "Planet Payment, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLTM',
        name : "First Trust ISE Global Platinum Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLUG',
        name : "Plug Power, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLUS',
        name : "ePlus inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PLXS',
        name : "Plexus Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PMBC',
        name : "Pacific Mercantile Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PMCS',
        name : "PMC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PMD',
        name : "Psychemedics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PME',
        name : "Pingtan Marine Enterprise Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PMFG',
        name : "PMFG, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PNBK',
        name : "Patriot National Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PNFP',
        name : "Pinnacle Financial Partners, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PNNT',
        name : "PennantPark Investment Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PNQI',
        name : "PowerShares Nasdaq Internet Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PNRA',
        name : "Panera Bread Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PNRG',
        name : "PrimeEnergy Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PNTR',
        name : "Pointer Telocation Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PODD',
        name : "Insulet Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'POOL',
        name : "Pool Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'POPE',
        name : "Pope Resources",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'POWI',
        name : "Power Integrations, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'POWL',
        name : "Powell Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'POZN',
        name : "Pozen, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PPBI',
        name : "Pacific Premier Bancorp Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PPC',
        name : "Pilgrim's Pride Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PPHM',
        name : "Peregrine Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PPHMP',
        name : "Peregrine Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PPSI',
        name : "Pioneer Power Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRAA',
        name : "PRA Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRAH',
        name : "PRA Health Sciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRAN',
        name : "Prana Biotechnology Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRCP',
        name : "Perceptron, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRFT',
        name : "Perficient, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRFZ',
        name : "PowerShares FTSE RAFI US 1500 Small",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRGN',
        name : "Paragon Shipping Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRGNL',
        name : "Paragon Shipping Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRGS',
        name : "Progress Software Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRGX',
        name : "PRGX Global, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRIM',
        name : "Primoris Services Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRKR',
        name : "ParkerVision, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRLS',
        name : "Peerless Systems Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRMW',
        name : "Primo Water Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PROV',
        name : "Provident Financial Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRPH',
        name : "ProPhase Labs, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRQR',
        name : "ProQR Therapeutics N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRSC',
        name : "The Providence Service Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRSS',
        name : "CafePress Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRTA',
        name : "Prothena Corporation plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRTK',
        name : "Paratek Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRTO',
        name : "Proteon Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRTS',
        name : "U.S. Auto Parts Network, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRXI',
        name : "Premier Exhibitions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PRXL',
        name : "PAREXEL International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSAU',
        name : "PowerShares Global Gold & Precious Metals Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSBH',
        name : "PSB Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCC',
        name : "PowerShares S&P SmallCap Consumer Staples Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCD',
        name : "PowerShares S&P SmallCap Consumer Discretionary Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCE',
        name : "PowerShares S&P SmallCap Energy Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCF',
        name : "PowerShares S&P SmallCap Financials Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCH',
        name : "PowerShares S&P SmallCap Health Care Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCI',
        name : "PowerShares S&P SmallCap Industrials Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCM',
        name : "PowerShares S&P SmallCap Materials Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCT',
        name : "PowerShares S&P SmallCap Information Technology Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSCU',
        name : "PowerShares S&P SmallCap Utilities Portfolio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSDV',
        name : "pSivida Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSEC',
        name : "Prospect Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSEM',
        name : "Pericom Semiconductor Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSIX',
        name : "Power Solutions International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSMT',
        name : "PriceSmart, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSTB',
        name : "Park Sterling Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSTI',
        name : "Pluristem Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSTR',
        name : "PostRock Energy Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PSUN',
        name : "Pacific Sunwear of California, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTBI',
        name : "PlasmaTech Biopharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTBIW',
        name : "PlasmaTech Biopharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTC',
        name : "PTC Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTCT',
        name : "PTC Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTEN',
        name : "Patterson",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTIE',
        name : "Pain Therapeutics",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTLA',
        name : "Portola Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTNR',
        name : "Partner Communications Company Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTNT',
        name : "Internet Patents Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTRY',
        name : "The Pantry, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTSI',
        name : "P.A.M. Transportation Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PTX',
        name : "Pernix Therapeutics Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PULB',
        name : "Pulaski Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PVTB',
        name : "PrivateBancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PVTBP',
        name : "PrivateBancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PWOD',
        name : "Penns Woods Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PWRD',
        name : "Perfect World Co., Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PWX',
        name : "Providence and Worcester Railroad Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PXLW',
        name : "Pixelworks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'PZZA',
        name : "Papa John'S International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QABA',
        name : "First Trust NASDAQ ABA Community Bank Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QADA',
        name : "QAD Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QADB',
        name : "QAD Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QAT',
        name : "iShares MSCI Qatar Capped ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QBAK',
        name : "Qualstar Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QCCO',
        name : "QC Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QCLN',
        name : "First Trust NASDAQ Clean Edge Green Energy Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QCOM',
        name : "QUALCOMM Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QCRH',
        name : "QCR Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QDEL',
        name : "Quidel Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QGEN',
        name : "Qiagen N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QINC',
        name : "First Trust RBA Quality Income ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QIWI',
        name : "QIWI plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QKLS',
        name : "QKL Stores, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QLGC',
        name : "QLogic Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QLIK',
        name : "Qlik Technologies Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QLTI',
        name : "QLT Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QLTY',
        name : "Quality Distribution, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QLYS',
        name : "Qualys, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QNST',
        name : "QuinStreet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QQEW',
        name : "First Trust NASDAQ",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QQQ',
        name : "PowerShares QQQ Trust, Series 1",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QQQC',
        name : "Global X NASDAQ China Technology ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QQQX',
        name : "Nuveen NASDAQ 100 Dynamic Overwrite Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QQXT',
        name : "First Trust NASDAQ",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QRHC',
        name : "Quest Resource Holding Corporation.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QRVO',
        name : "Qorvo, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QSII',
        name : "Quality Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QTEC',
        name : "First Trust NASDAQ",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QTNT',
        name : "Quotient Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QTNTW',
        name : "Quotient Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QTWW',
        name : "Quantum Fuel Systems Technologies Worldwide, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QUIK',
        name : "QuickLogic Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QUMU',
        name : "Qumu Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QUNR',
        name : "Qunar Cayman Islands Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QURE',
        name : "uniQure N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QVCA',
        name : "Liberty Interactive Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QVCB',
        name : "Liberty Interactive Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'QYLD',
        name : "Recon Capital NASDAQ",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RADA',
        name : "Rada Electronics Industries Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RAIL',
        name : "Freightcar America, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RAND',
        name : "Rand Capital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RARE',
        name : "Ultragenyx Pharmaceutical Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RAVE',
        name : "Rave Restaurant Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RAVN',
        name : "Raven Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RBCAA',
        name : "Republic Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RBCN',
        name : "Rubicon Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RBPAA',
        name : "Royal Bancshares of Pennsylvania, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RCII',
        name : "Rent",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RCKY',
        name : "Rocky Brands, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RCMT',
        name : "RCM Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RCON',
        name : "Recon Technology, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RCPI',
        name : "Rock Creek Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RCPT',
        name : "Receptos, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDCM',
        name : "Radcom Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDEN',
        name : "Elizabeth Arden, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDHL',
        name : "Redhill Biopharma Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDI',
        name : "Reading International Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDIB',
        name : "Reading International Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDNT',
        name : "RadNet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDUS',
        name : "Radius Health, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDVY',
        name : "First Trust NASDAQ Rising Dividend Achievers ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RDWR',
        name : "Radware Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RECN',
        name : "Resources Connection, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REDF',
        name : "Rediff.com India Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REFR',
        name : "Research Frontiers Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REGI',
        name : "Renewable Energy Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REGN',
        name : "Regeneron Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REIS',
        name : "Reis, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RELL',
        name : "Richardson Electronics, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RELV',
        name : "Reliv' International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REMY',
        name : "Remy International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RENT',
        name : "Rentrak Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REPH',
        name : "Recro Pharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RESN',
        name : "Resonant Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REXI',
        name : "Resource America, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'REXX',
        name : "Rex Energy Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RFIL',
        name : "RF Industries, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RGCO',
        name : "RGC Resources Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RGDO',
        name : "Regado BioSciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RGDX',
        name : "Response Genetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RGEN',
        name : "Repligen Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RGLD',
        name : "Royal Gold, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RGLS',
        name : "Regulus Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RGSE',
        name : "Real Goods Solar, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RIBT',
        name : "RiceBran Technologies",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RIBTW',
        name : "RiceBran Technologies",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RICK',
        name : "RCI Hospitality Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RIGL',
        name : "Rigel Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RITT',
        name : "RIT Technologies Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RITTW',
        name : "RIT Technologies Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RIVR',
        name : "River Valley Bancorp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RJET',
        name : "Republic Airways Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RLJE',
        name : "RLJ Entertainment, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RLOC',
        name : "ReachLocal, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RLOG',
        name : "Rand Logistics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RLYP',
        name : "Relypsa, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RMBS',
        name : "Rambus, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RMCF',
        name : "Rocky Mountain Chocolate Factory, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RMGN',
        name : "RMG Networks Holding Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RMTI',
        name : "Rockwell Medical, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RNA',
        name : "Prosensa Holding N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RNET',
        name : "RigNet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RNST',
        name : "Renasant Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RNWK',
        name : "RealNetworks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROBO',
        name : "Robo",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROCK',
        name : "Gibraltar Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROIA',
        name : "Radio One, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROIAK',
        name : "Radio One, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROIC',
        name : "Retail Opportunity Investments Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROIQ',
        name : "ROI Acquisition Corp. II",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROIQU',
        name : "ROI Acquisition Corp. II",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROIQW',
        name : "ROI Acquisition Corp. II",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROKA',
        name : "Roka Bioscience, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROLL',
        name : "RBC Bearings Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROSE',
        name : "Rosetta Resources Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROSG',
        name : "Rosetta Genomics Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROST',
        name : "Ross Stores, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROVI',
        name : "Rovi Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ROYL',
        name : "Royale Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RP',
        name : "RealPage, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RPRX',
        name : "Repros Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RPRXW',
        name : "Repros Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RPRXZ',
        name : "Repros Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RPTP',
        name : "Raptor Pharmaceutical Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RPXC',
        name : "RPX Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RRD',
        name : "R.R. Donnelley & Sons Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RRGB',
        name : "Red Robin Gourmet Burgers, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RRST',
        name : "RRSat Global Communications Network Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RSTI',
        name : "Rofin",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RSYS',
        name : "RadiSys Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RTGN',
        name : "Ruthigen, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RTIX',
        name : "RTI Surgical, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RTK',
        name : "Rentech, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RTRX',
        name : "Retrophin, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RUSHA',
        name : "Rush Enterprises, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RUSHB',
        name : "Rush Enterprises, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RUTH',
        name : "Ruth's Hospitality Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RVBD',
        name : "Riverbed Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RVLT',
        name : "Revolution Lighting Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RVNC',
        name : "Revance Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RVSB',
        name : "Riverview Bancorp Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RWLK',
        name : "ReWalk Robotics Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RXDX',
        name : "Ignyta, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RXII',
        name : "RXi Pharmaceuticals Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'RYAAY',
        name : "Ryanair Holdings plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAAS',
        name : "inContact, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SABR',
        name : "Sabre Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAEX',
        name : "SAExploration Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAFM',
        name : "Sanderson Farms, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAFT',
        name : "Safety Insurance Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAGE',
        name : "Sage Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAIA',
        name : "Saia, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAJA',
        name : "Sajan, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAL',
        name : "Salisbury Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SALE',
        name : "RetailMeNot, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SALM',
        name : "Salem Communications Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAMG',
        name : "Silvercrest Asset Management Group Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SANM',
        name : "Sanmina Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SANW',
        name : "S&W Seed Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SANWZ',
        name : "S&W Seed Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAPE',
        name : "Sapient Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SASR',
        name : "Sandy Spring Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SATS',
        name : "EchoStar Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SAVE',
        name : "Spirit Airlines, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBAC',
        name : "SBA Communications Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBBX',
        name : "Sussex Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBCF',
        name : "Seacoast Banking Corporation of Florida",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBCP',
        name : "Sunshine Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBFG',
        name : "SB Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBGI',
        name : "Sinclair Broadcast Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBLK',
        name : "Star Bulk Carriers Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBLKL',
        name : "Star Bulk Carriers Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBNY',
        name : "Signature Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBNYW',
        name : "Signature Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBRA',
        name : "Sabra Healthcare REIT, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBRAP',
        name : "Sabra Healthcare REIT, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBSA',
        name : "Spanish Broadcasting System, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBSI',
        name : "Southside Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SBUX',
        name : "Starbucks Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCAI',
        name : "Surgical Care Affiliates, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCHL',
        name : "Scholastic Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCHN',
        name : "Schnitzer Steel Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCLN',
        name : "SciClone Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCMP',
        name : "Sucampo Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCOK',
        name : "SinoCoking Coal and Coke Chemical Industries, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCON',
        name : "Superconductor Technologies Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCOR',
        name : "comScore, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCSC',
        name : "ScanSource, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCSS',
        name : "Select Comfort Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCTY',
        name : "SolarCity Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCVL',
        name : "Shoe Carnival, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SCYX',
        name : "SCYNEXIS, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SEAC',
        name : "SeaChange International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SEED',
        name : "Origin Agritech Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SEIC',
        name : "SEI Investments Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SEMI',
        name : "SunEdison Semiconductor Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SENEA',
        name : "Seneca Foods Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SENEB',
        name : "Seneca Foods Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SEV',
        name : "Sevcon, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SFBC',
        name : "Sound Financial Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SFBS',
        name : "ServisFirst Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SFLY',
        name : "Shutterfly, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SFM',
        name : "Sprouts Farmers Market, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SFNC',
        name : "Simmons First National Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SFST',
        name : "Southern First Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SFXE',
        name : "SFX Entertainment, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGBK',
        name : "Stonegate Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGC',
        name : "Superior Uniform Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGEN',
        name : "Seattle Genetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGI',
        name : "Silicon Graphics International Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGMA',
        name : "SigmaTron International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGMO',
        name : "Sangamo BioSciences, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGMS',
        name : "Scientific Games Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGNL',
        name : "Signal Genetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGNT',
        name : "Sagent Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGOC',
        name : "SGOCO Group, Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGRP',
        name : "SPAR Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGYP',
        name : "Synergy Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGYPU',
        name : "Synergy Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SGYPW',
        name : "Synergy Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHBI',
        name : "Shore Bancshares Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHEN',
        name : "Shenandoah Telecommunications Co",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHIP',
        name : "Seanergy Maritime Holdings Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHLD',
        name : "Sears Holdings Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHLDW',
        name : "Sears Holdings Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHLM',
        name : "A. Schulman, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHLO',
        name : "Shiloh Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHOO',
        name : "Steven Madden, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHOR',
        name : "ShoreTel, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHOS',
        name : "Sears Hometown and Outlet Stores, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SHPG',
        name : "Shire plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIAL',
        name : "Sigma",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIBC',
        name : "State Investors Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIEB',
        name : "Siebert Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIEN',
        name : "Sientra, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIFI',
        name : "SI Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIFY',
        name : "Sify Technologies Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIGA',
        name : "SIGA Technologies Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIGI',
        name : "Selective Insurance Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIGM',
        name : "Sigma Designs, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SILC',
        name : "Silicom Ltd",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIMG',
        name : "Silicon Image, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIMO',
        name : "Silicon Motion Technology Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SINA',
        name : "Sina Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SINO',
        name : "Sino",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIRI',
        name : "Sirius XM Holdings Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIRO',
        name : "Sirona Dental Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIVB',
        name : "SVB Financial Group",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIVBO',
        name : "SVB Financial Group",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SIXD',
        name : "6D Global Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SKBI',
        name : "Skystar Bio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SKIS',
        name : "Peak Resorts, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SKOR',
        name : "FlexShares Credit",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SKUL',
        name : "Skullcandy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SKYS',
        name : "Sky Solar Holdings, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SKYW',
        name : "SkyWest, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SKYY',
        name : "First Trust ISE Cloud Computing Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLAB',
        name : "Silicon Laboratories, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLCT',
        name : "Select Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLGN',
        name : "Silgan Holdings Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLM',
        name : "SLM Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLMAP',
        name : "SLM Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLMBP',
        name : "SLM Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLP',
        name : "Simulations Plus, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLRC',
        name : "Solar Capital Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLTC',
        name : "Selectica, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLVO',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SLXP',
        name : "Salix Pharmaceuticals, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMAC',
        name : "Sino Mercury Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMACR',
        name : "Sino Mercury Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMACU',
        name : "Sino Mercury Acquisition Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMBC',
        name : "Southern Missouri Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMCI',
        name : "Super Micro Computer, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMED',
        name : "Sharps Compliance Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMIT',
        name : "Schmitt Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMLR',
        name : "Semler Scientific, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMMF',
        name : "Summit Financial Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMPL',
        name : "Simplicity Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMRT',
        name : "Stein Mart, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMSI',
        name : "Smith Micro Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMT',
        name : "SMART Technologies Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMTC',
        name : "Semtech Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMTP',
        name : "SMTP, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SMTX',
        name : "SMTC Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNAK',
        name : "Inventure Foods, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNBC',
        name : "Sun Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNC',
        name : "State National Companies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNCR',
        name : "Synchronoss Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNDK',
        name : "SanDisk Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNFCA',
        name : "Security National Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNHY',
        name : "Sun Hydraulics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNMX',
        name : "Senomyx, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNPS',
        name : "Synopsys, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNSS',
        name : "Sunesis Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SNTA',
        name : "Synta Pharmaceuticals Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOCB',
        name : "Southcoast Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOCL',
        name : "Global X Social Media Index ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SODA',
        name : "SodaStream International Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOFO',
        name : "Sonic Foundry, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOHO',
        name : "Sotherly Hotels Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOHOL',
        name : "Sotherly Hotels LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOHOM',
        name : "Sotherly Hotels LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOHU',
        name : "Sohu.com Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SONA',
        name : "Southern National Bancorp of Virginia, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SONC',
        name : "Sonic Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SONS',
        name : "Sonus Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SORL',
        name : "SORL Auto Parts, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SOXX',
        name : "iShares PHLX SOX Semiconductor Sector Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SP',
        name : "SP Plus Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPAN',
        name : "Span",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPAR',
        name : "Spartan Motors, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPCB',
        name : "SuperCom, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPDC',
        name : "Speed Commerce, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPEX',
        name : "Spherix Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPHS',
        name : "Sophiris Bio, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPIL',
        name : "Siliconware Precision Industries Company, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPKE',
        name : "Spark Energy, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPLK',
        name : "Splunk Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPLS',
        name : "Staples, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPNC',
        name : "The Spectranetics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPNS',
        name : "Sapiens International Corporation N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPOK',
        name : "Spok Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPPI',
        name : "Spectrum Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPPR',
        name : "Supertel Hospitality, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPPRO',
        name : "Supertel Hospitality, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPPRP',
        name : "Supertel Hospitality, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPRO',
        name : "SmartPros Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPRT',
        name : "support.com, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPSC',
        name : "SPS Commerce, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPTN',
        name : "SpartanNash Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPU',
        name : "SkyPeople Fruit Juice, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPWH',
        name : "Sportsman's Warehouse Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SPWR',
        name : "SunPower Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SQBG',
        name : "Sequential Brands Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SQBK',
        name : "Square 1 Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SQI',
        name : "SciQuest, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SQNM',
        name : "Sequenom, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SQQQ',
        name : "ProShares UltraPro Short QQQ",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SRCE',
        name : "1st Source Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SRCL',
        name : "Stericycle, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SRDX',
        name : "SurModics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SREV',
        name : "ServiceSource International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SRNE',
        name : "Sorrento Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SRPT',
        name : "Sarepta Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SRSC',
        name : "Sears Canada Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSB',
        name : "South State Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSBI',
        name : "Summit State Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSFN',
        name : "Stewardship Financial Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSH',
        name : "Sunshine Heart Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSNC',
        name : "SS&C Technologies Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSRG',
        name : "Symmetry Surgical Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSRI',
        name : "Silver Standard Resources Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SSYS',
        name : "Stratasys, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STAA',
        name : "STAAR Surgical Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STB',
        name : "Student Transportation Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STBA',
        name : "S&T Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STBZ',
        name : "State Bank Financial Corporation.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STCK',
        name : "Stock Building Supply Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STEM',
        name : "StemCells, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STFC',
        name : "State Auto Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STKL',
        name : "SunOpta, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STLD',
        name : "Steel Dynamics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STLY',
        name : "Stanley Furniture Company, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STML',
        name : "Stemline Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STMP',
        name : "Stamps.com Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STNR',
        name : "Steiner Leisure Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STPP',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRA',
        name : "Strayer Education, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRL',
        name : "Sterling Construction Company Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRM',
        name : "Streamline Health Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRN',
        name : "Sutron Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRS',
        name : "Stratus Properties, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRT',
        name : "Strattec Security Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRZA',
        name : "Starz",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STRZB',
        name : "Starz",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STX',
        name : "Seagate Technology.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'STXS',
        name : "Stereotaxis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SUBK',
        name : "Suffolk Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SUMR',
        name : "Summer Infant, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SUNS',
        name : "Solar Senior Capital Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SUPN',
        name : "Supernus Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SURG',
        name : "Synergetics USA, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SUSQ',
        name : "Susquehanna Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SUTR',
        name : "Sutor Technology Group Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SVA',
        name : "Sinovac Biotech, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SVBI',
        name : "Severn Bancorp Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SVVC',
        name : "Firsthand Technology Value Fund, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SWHC',
        name : "Smith & Wesson Holding Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SWIR',
        name : "Sierra Wireless, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SWKS',
        name : "Skyworks Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SWSH',
        name : "Swisher Hygiene, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYBT',
        name : "Stock Yards Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYKE',
        name : "Sykes Enterprises, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYMC',
        name : "Symantec Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYMX',
        name : "Synthesis Energy Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYNA',
        name : "Synaptics Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYNC',
        name : "Synacor, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYNL',
        name : "Synalloy Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYNT',
        name : "Syntel, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYPR',
        name : "Sypris Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYRX',
        name : "Sysorex Global Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SYUT',
        name : "Synutra International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SZMK',
        name : "Sizmek Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'SZYM',
        name : "Solazyme, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TACT',
        name : "TransAct Technologies Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TAIT',
        name : "Taitron Components Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TAPR',
        name : "Barclays PLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TASR',
        name : "TASER International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TAST',
        name : "Carrols Restaurant Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TATT',
        name : "TAT Technologies Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TAX',
        name : "Liberty Tax, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TAXI',
        name : "Medallion Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TAYD',
        name : "Taylor Devices, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TBBK',
        name : "The Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TBIO',
        name : "Transgenomic, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TBK',
        name : "Triumph Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TBNK',
        name : "Territorial Bancorp Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TBPH',
        name : "Theravance Biopharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCBI',
        name : "Texas Capital Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCBIL',
        name : "Texas Capital Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCBIP',
        name : "Texas Capital Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCBIW',
        name : "Texas Capital Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCBK',
        name : "TriCo Bancshares",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCCO',
        name : "Technical Communications Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCFC',
        name : "The Community Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCPC',
        name : "TCP Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCRD',
        name : "THL Credit, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TCX',
        name : "Tucows Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TDIV',
        name : "First Trust Exchange",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TEAR',
        name : "TearLab Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TECD',
        name : "Tech Data Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TECH',
        name : "Bio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TECU',
        name : "Tecumseh Products Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TEDU',
        name : "Tarena International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TENX',
        name : "Tenax Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TERP',
        name : "TerraForm Power, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TESO',
        name : "Tesco Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TESS',
        name : "TESSCO Technologies Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TFM',
        name : "The Fresh Market, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TFSC',
        name : "1347 Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TFSCR',
        name : "1347 Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TFSCU',
        name : "1347 Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TFSCW',
        name : "1347 Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TFSL',
        name : "TFS Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TGA',
        name : "Transglobe Energy Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TGE',
        name : "TGC Industries, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TGEN',
        name : "Tecogen Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TGLS',
        name : "Tecnoglass Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TGTX',
        name : "TG Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'THFF',
        name : "First Financial Corporation Indiana",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'THLD',
        name : "Threshold Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'THOR',
        name : "Thoratec Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'THRM',
        name : "Gentherm Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'THRX',
        name : "Theravance, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'THST',
        name : "Truett",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'THTI',
        name : "THT Heat Transfer Technology, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TICC',
        name : "TICC Capital Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TIGR',
        name : "TigerLogic Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TILE',
        name : "Interface, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TINY',
        name : "Harris & Harris Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TIPT',
        name : "Tiptree Financial Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TISA',
        name : "Top Image Systems, Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TITN',
        name : "Titan Machinery Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TIVO',
        name : "TiVo Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TKAI',
        name : "Tokai Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TKMR',
        name : "Tekmira Pharmaceuticals Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TLF',
        name : "Tandy Leather Factory, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TLMR',
        name : "Talmer Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TLOG',
        name : "TetraLogic Pharmaceuticals Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TNAV',
        name : "Telenav, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TNDM',
        name : "Tandem Diabetes Care, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TNGO',
        name : "Tangoe, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TNXP',
        name : "Tonix Pharmaceuticals Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TOPS',
        name : "TOP Ships Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TORM',
        name : "TOR Minerals International Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TOUR',
        name : "Tuniu Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TOWN',
        name : "Towne Bank",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TQQQ',
        name : "ProShares UltraPro QQQ",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRAK',
        name : "Dealertrack Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRCB',
        name : "Two River Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRCH',
        name : "Torchlight Energy Resources, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TREE',
        name : "LendingTree, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRGT',
        name : "Targacept, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRIB',
        name : "Trinity Biotech plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRIL',
        name : "Trillium Therapeutics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRIP',
        name : "TripAdvisor, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRIV',
        name : "TriVascular Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRMB',
        name : "Trimble Navigation Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRMK',
        name : "Trustmark Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRNS',
        name : "Transcat, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRNX',
        name : "Tornier N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TROV',
        name : "TrovaGene, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TROVU',
        name : "TrovaGene, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TROVW',
        name : "TrovaGene, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TROW',
        name : "T. Rowe Price Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRS',
        name : "TriMas Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRST',
        name : "TrustCo Bank Corp NY",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRTL',
        name : "Terrapin 3 Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRTLU',
        name : "Terrapin 3 Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRTLW',
        name : "Terrapin 3 Acquisition Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRUE',
        name : "TrueCar, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TRVN',
        name : "Trevena, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSBK',
        name : "Timberland Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSC',
        name : "TriState Capital Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSCO',
        name : "Tractor Supply Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSEM',
        name : "Tower Semiconductor Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSLA',
        name : "Tesla Motors, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSRA',
        name : "Tessera Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSRE',
        name : "Trade Street Residential, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSRI',
        name : "TSR, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSRO',
        name : "TESARO, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TST',
        name : "TheStreet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TSYS',
        name : "TeleCommunication Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTEC',
        name : "TeleTech Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTEK',
        name : "Tetra Tech, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTGT',
        name : "TechTarget, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTHI',
        name : "Transition Therapeutics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTMI',
        name : "TTM Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTOO',
        name : "T2 Biosystems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTPH',
        name : "Tetraphase Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTS',
        name : "Tile Shop Hldgs, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TTWO',
        name : "Take",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TUBE',
        name : "TubeMogul, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TUES',
        name : "Tuesday Morning Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TUSA',
        name : "First Trust Total US Market AlphaDEX ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TVIX',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TVIZ',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TWER',
        name : "Towerstream Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TWIN',
        name : "Twin Disc, Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TWMC',
        name : "Trans World Entertainment Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TWOU',
        name : "2U, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TXN',
        name : "Texas Instruments Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TXRH',
        name : "Texas Roadhouse, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TYPE',
        name : "Monotype Imaging Holdings Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'TZOO',
        name : "Travelzoo Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UACL',
        name : "Universal Truckload Services, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UAE',
        name : "iShares MSCI UAE Capped ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBCP',
        name : "United Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBFO',
        name : "United Security Bancshares",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBIC',
        name : "UBIC, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBNK',
        name : "United Financial Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBNT',
        name : "Ubiquiti Networks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBOH',
        name : "United Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBSH',
        name : "Union Bankshares Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UBSI',
        name : "United Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UCBA',
        name : "United Community Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UCBI',
        name : "United Community Banks, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UCFC',
        name : "United Community Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UCTT',
        name : "Ultra Clean Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UDF',
        name : "United Development Funding IV",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UEIC',
        name : "Universal Electronics Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UEPS',
        name : "Net 1 UEPS Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UFCS',
        name : "United Fire Group, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UFPI',
        name : "Universal Forest Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UFPT',
        name : "UFP Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UG',
        name : "United",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UGLD',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UHAL',
        name : "Amerco",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UIHC',
        name : "United Insurance Holdings Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ULBI',
        name : "Ultralife Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ULTA',
        name : "Ulta Salon, Cosmetics & Fragrance, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ULTI',
        name : "The Ultimate Software Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ULTR',
        name : "Ultrapetrol (Bahamas) Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UMBF',
        name : "UMB Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UMPQ',
        name : "Umpqua Holdings Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UNAM',
        name : "Unico American Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UNB',
        name : "Union Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UNFI',
        name : "United Natural Foods, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UNIS',
        name : "Unilife Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UNTD',
        name : "United Online, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UNTY',
        name : "Unity Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UNXL',
        name : "Uni",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UPI',
        name : "Uroplasty, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UPIP',
        name : "Unwired Planet, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UPLD',
        name : "Upland Software, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'URBN',
        name : "Urban Outfitters, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'URRE',
        name : "Uranium Resources, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USAK',
        name : "USA Truck, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USAP',
        name : "Universal Stainless & Alloy Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USAT',
        name : "USA Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USATP',
        name : "USA Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USBI',
        name : "United Security Bancshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USCR',
        name : "U S Concrete, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USEG',
        name : "U.S. Energy Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USLM',
        name : "United States Lime & Minerals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USLV',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USMD',
        name : "USMD Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'USTR',
        name : "United Stationers Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UTEK',
        name : "Ultratech, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UTHR',
        name : "United Therapeutics Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UTIW',
        name : "UTi Worldwide Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UTMD',
        name : "Utah Medical Products, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UTSI',
        name : "UTStarcom Holdings Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'UVSP',
        name : "Univest Corporation of Pennsylvania",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VA',
        name : "Virgin America Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VALU',
        name : "Value Line, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VALX',
        name : "Validea Market Legends ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VASC',
        name : "Vascular Solutions, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VBFC',
        name : "Village Bank and Trust Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VBIV',
        name : "VBI Vaccines Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VBLT',
        name : "Vascular Biogenics Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VBND',
        name : "Vident Core U.S. Bond Strategy Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VBTX',
        name : "Veritex Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VCEL',
        name : "Vericel Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VCIT',
        name : "Vanguard Intermediate",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VCLT',
        name : "Vanguard Long",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VCSH',
        name : "Vanguard Short",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VCYT',
        name : "Veracyte, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VDSI',
        name : "VASCO Data Security International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VECO',
        name : "Veeco Instruments Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VGGL',
        name : "Viggle Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VGIT',
        name : "Vanguard Intermediate",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VGLT',
        name : "Vanguard Long",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VGSH',
        name : "Vanguard Short",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIA',
        name : "Viacom Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIAB',
        name : "Viacom Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIAS',
        name : "Viasystems Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VICL',
        name : "Vical Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VICR',
        name : "Vicor Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIDE',
        name : "Video Display Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIDI',
        name : "Vident International Equity Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIEW',
        name : "Viewtran Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIIX',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIIZ',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIMC',
        name : "Vimicro International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIP',
        name : "VimpelCom Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIRC',
        name : "Virco Manufacturing Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VISN',
        name : "VisionChina Media, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VIVO',
        name : "Meridian Bioscience Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VLCCF',
        name : "Knightsbridge Shipping Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VLGEA',
        name : "Village Super Market, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VLTC',
        name : "Voltari Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VLYWW',
        name : "Valley National Bancorp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VMBS',
        name : "Vanguard Mortgage",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNDA',
        name : "Vanda Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNET',
        name : "21Vianet Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNOM',
        name : "Viper Energy Partners LP",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNQI',
        name : "Vanguard Global ex",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNR',
        name : "Vanguard Natural Resources LLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNRAP',
        name : "Vanguard Natural Resources LLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNRBP',
        name : "Vanguard Natural Resources LLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VNRCP',
        name : "Vanguard Natural Resources LLC",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VOD',
        name : "Vodafone Group Plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VOLC',
        name : "Volcano Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VONE',
        name : "Vanguard Russell 1000 ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VONG',
        name : "Vanguard Russell 1000 Growth ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VONV',
        name : "Vanguard Russell 1000 Value ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VOXX',
        name : "VOXX International Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VPCO',
        name : "Vapor Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRA',
        name : "Vera Bradley, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRML',
        name : "Vermillion, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRNG',
        name : "Vringo, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRNGW',
        name : "Vringo, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRNS',
        name : "Varonis Systems, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRNT',
        name : "Verint Systems Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRSK',
        name : "Verisk Analytics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRSN',
        name : "VeriSign, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRTA',
        name : "Vestin Realty Mortgage I, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRTB',
        name : "Vestin Realty Mortgage II, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRTS',
        name : "Virtus Investment Partners, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRTU',
        name : "Virtusa Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VRTX',
        name : "Vertex Pharmaceuticals Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VSAR',
        name : "Versartis, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VSAT',
        name : "ViaSat, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VSCI',
        name : "Vision",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VSCP',
        name : "VirtualScopics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VSEC',
        name : "VSE Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VSTM',
        name : "Verastem, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTAE',
        name : "Vitae Pharmaceuticals, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTHR',
        name : "Vanguard Russell 3000 ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTIP',
        name : "Vanguard Short",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTL',
        name : "Vital Therapies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTNR',
        name : "Vertex Energy, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTSS',
        name : "Vitesse Semiconductor Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTWG',
        name : "Vanguard Russell 2000 Growth ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTWO',
        name : "Vanguard Russell 2000 ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VTWV',
        name : "Vanguard Russell 2000 Value ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VUSE',
        name : "Vident Core US Equity ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VVUS',
        name : "VIVUS, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VWOB',
        name : "Vanguard Emerging Markets Government Bond ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VWR',
        name : "VWR Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VXUS',
        name : "Vanguard Total International Stock ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'VYFC',
        name : "Valley Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WABC',
        name : "Westamerica Bancorporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WAFD',
        name : "Washington Federal, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WAFDW',
        name : "Washington Federal, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WASH',
        name : "Washington Trust Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WATT',
        name : "Energous Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WAVX',
        name : "Wave Systems Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WAYN',
        name : "Wayne Savings Bancshares Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WB',
        name : "Weibo Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WBA',
        name : "Walgreens Boots Alliance, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WBB',
        name : "Westbury Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WBKC',
        name : "Wolverine Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WBMD',
        name : "WebMD Health Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WDC',
        name : "Western Digital Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WDFC',
        name : "WD",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WEBK',
        name : "Wellesley Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WEN',
        name : "Wendy's Company (The)",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WERN',
        name : "Werner Enterprises, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WETF',
        name : "WisdomTree Investments, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WEYS',
        name : "Weyco Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WFBI',
        name : "WashingtonFirst Bankshares Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WFD',
        name : "Westfield Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WFM',
        name : "Whole Foods Market, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WGBS',
        name : "WaferGen Bio",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WHF',
        name : "WhiteHorse Finance, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WHFBL',
        name : "WhiteHorse Finance, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WHLM',
        name : "Wilhelmina International, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WHLR',
        name : "Wheeler Real Estate Investment Trust, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WHLRP',
        name : "Wheeler Real Estate Investment Trust, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WHLRW',
        name : "Wheeler Real Estate Investment Trust, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WIBC',
        name : "Wilshire Bancorp, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WIFI',
        name : "Boingo Wireless, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WILC',
        name : "G. Willi",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WILN',
        name : "Wi",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WIN',
        name : "Windstream Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WINA',
        name : "Winmark Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WIRE',
        name : "Encore Wire Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WIX',
        name : "Wix.com Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WLB',
        name : "Westmoreland Coal Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WLBPZ',
        name : "Westmoreland Coal Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WLDN',
        name : "Willdan Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WLFC',
        name : "Willis Lease Finance Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WLRH',
        name : "WL Ross Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WLRHU',
        name : "WL Ross Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WLRHW',
        name : "WL Ross Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WMAR',
        name : "West Marine, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WMGI',
        name : "Wright Medical Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WMGIZ',
        name : "Wright Medical Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WOOD',
        name : "iShares S&P Global Timber & Forestry Index Fund",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WOOF',
        name : "VCA Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WPCS',
        name : "WPCS International Incorporated",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WPPGY',
        name : "WPP plc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WPRT',
        name : "Westport Innovations Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WRES',
        name : "Warren Resources, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WRLD',
        name : "World Acceptance Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSBC',
        name : "WesBanco, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSBF',
        name : "Waterstone Financial, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSCI',
        name : "WSI Industries Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSFS',
        name : "WSFS Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSFSL',
        name : "WSFS Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSTC',
        name : "West Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSTG',
        name : "Wayside Technology Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WSTL',
        name : "Westell Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WTBA',
        name : "West Bancorporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WTFC',
        name : "Wintrust Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WTFCW',
        name : "Wintrust Financial Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WTSL',
        name : "The Wet Seal, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WVFC',
        name : "WVS Financial Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WVVI',
        name : "Willamette Valley Vineyards, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WWD',
        name : "Woodward, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WWWW',
        name : "Web.com Group, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'WYNN',
        name : "Wynn Resorts, Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XBKS',
        name : "Xenith Bankshares, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XCRA',
        name : "Xcerra Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XENE',
        name : "Xenon Pharmaceuticals Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XENT',
        name : "Intersect ENT, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XGTI',
        name : "XG Technology, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XGTIW',
        name : "XG Technology, Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XIV',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XLNX',
        name : "Xilinx, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XLRN',
        name : "Acceleron Pharma Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XNCR',
        name : "Xencor, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XNET',
        name : "Xunlei Limited",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XNPT',
        name : "XenoPort, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XOMA',
        name : "XOMA Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XONE',
        name : "The ExOne Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XOOM',
        name : "Xoom Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XPLR',
        name : "Xplore Technologies Corp",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XRAY',
        name : "DENTSPLY International Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XTLB',
        name : "XTL Biopharmaceuticals Ltd.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'XXIA',
        name : "Ixia",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YDIV',
        name : "First Trust International Multi",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YDLE',
        name : "Yodlee, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YHOO',
        name : "Yahoo! Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YNDX',
        name : "Yandex N.V.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YOD',
        name : "You On Demand Holdings, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YORW',
        name : "The York Water Company",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YPRO',
        name : "AdvisorShares YieldPro ETF",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YRCW',
        name : "YRC Worldwide, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'YY',
        name : "YY Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'Z',
        name : "Zillow, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZAGG',
        name : "ZAGG Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZAZA',
        name : "ZaZa Energy Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZBRA',
        name : "Zebra Technologies Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZEUS',
        name : "Olympic Steel, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZFGN',
        name : "Zafgen, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZGNX',
        name : "Zogenix, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZHNE',
        name : "Zhone Technologies, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZINC',
        name : "Horsehead Holding Corp.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZION',
        name : "Zions Bancorporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZIONW',
        name : "Zions Bancorporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZIONZ',
        name : "Zions Bancorporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZIOP',
        name : "ZIOPHARM Oncology Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZIV',
        name : "Credit Suisse AG",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZIXI',
        name : "Zix Corporation",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZLTQ',
        name : "ZELTIQ Aesthetics, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZN',
        name : "Zion Oil & Gas Inc",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZNGA',
        name : "Zynga Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZSPH',
        name : "ZS Pharma, Inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZU',
        name : "zulily, inc.",
        exchange : 'NASDAQ'
      },
      {
        symbol : 'ZUMZ',
        name : "Zumiez Inc.",
        exchange : 'NASDAQ'
      },

      /* NYSE Stocks */
      {
        symbol : 'A',
        name : "Agilent Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AA',
        name : "Alcoa Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AA$B',
        name : "Alcoa Inc. Depository Shares Representing 1/10th Preferred Convertilble Class B Series 1",
        exchange : 'NYSE'
      },
      {
        symbol : 'AAC',
        name : "AAC Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AAN',
        name : "Aaron's, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AAP',
        name : "Advance Auto Parts Inc Advance Auto Parts Inc W/I",
        exchange : 'NYSE'
      },
      {
        symbol : 'AAT',
        name : "American Assets Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AAV',
        name : "Advantage Oil & Gas Ltd  Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AB',
        name : "Allianceberstein Holding L.P.  Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABB',
        name : "ABB Ltd Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABBV',
        name : "AbbVie Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABC',
        name : "AmerisourceBergen Corporation (Holding Co) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABEV',
        name : "Ambev S.A. American Depositary Shares (Each representing 1 Common Share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABG',
        name : "Asbury Automotive Group Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABM',
        name : "ABM Industries Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABR',
        name : "Arbor Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABR$A',
        name : "Arbor Realty Trust Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABR$B',
        name : "Arbor Realty Trust Cumulative Redeemable Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABR$C',
        name : "Arbor Realty Trust Cumulative Redeemable Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABRN',
        name : "Arbor Realty Trust 7.375% Senior Notes due 2021",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABT',
        name : "Abbott Laboratories Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ABX',
        name : "Barrick Gold Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACC',
        name : "American Campus Communities Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACCO',
        name : "Acco Brands Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACE',
        name : "Ace Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACG',
        name : "Alliancebernstein Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACH',
        name : "Aluminum Corporation of China Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACI',
        name : "Arch Coal, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACM',
        name : "AECOM Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACMP',
        name : "Access Midstream Partners, L.P. Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACN',
        name : "Accenture plc. Class A Ordinary Shares (Ireland)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACP',
        name : "Avenue Income Credit Strategies Fund Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACRE',
        name : "Ares Commercial Real Estate Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACT',
        name : "Actavis plc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ACW',
        name : "Accuride Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ADC',
        name : "Agree Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ADM',
        name : "Archer",
        exchange : 'NYSE'
      },
      {
        symbol : 'ADPT',
        name : "Adeptus Health Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ADS',
        name : "Alliance Data Systems Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ADT',
        name : "ADT Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ADX',
        name : "Adams Express Company (The)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEB',
        name : "AEGON N.V. Perp. Cap. Secs. Floating Rate (Netherlands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEC',
        name : "Associated Estates Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AED',
        name : "AEGON N.V. Perp. Cap. Securities (Netherlands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEE',
        name : "Ameren Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEG',
        name : "AEGON N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEH',
        name : "AEGON N.V. Perp. Cap Secs.",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEK',
        name : "Aegon NV 8.00% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEL',
        name : "American Equity Investment Life Holding Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEM',
        name : "Agnico Eagle Mines Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEO',
        name : "American Eagle Outfitters, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AEP',
        name : "American Electric Power Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AER',
        name : "Aercap Holdings N.V. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AES',
        name : "The AES Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AES$C',
        name : "AES Corporation (The) Class C Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AET',
        name : "Aetna Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AF',
        name : "Astoria Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AF$C',
        name : "Astoria Financial Corporation Depositary Shs Repstg 1/40th Int Perp Pfd Ser C 6.5%",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFA',
        name : "American Financial Group, Inc. 5.75% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFB',
        name : "AllianceBernstein National Municipal Income Fund Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFC',
        name : "Allied Capital Corporation Allied Capital Corporation 6.875% Notes due April 15, 2047",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFG',
        name : "American Financial Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFGE',
        name : "American Financial Group, Inc. 6.25% Subordinated Debentures due 2054",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFL',
        name : "AFLAC Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFM',
        name : "Affiliated Managers Group, Inc. 5.250% Senior Notes due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFQ',
        name : "American Financial Group, Inc. 7% Senior Notes due 2050",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFSD',
        name : "Aflac Incorporated 5.50% Subordinated Debentures due September 15, 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFSI$A',
        name : "AmTrust Financial Services, Inc. Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFSI$B',
        name : "AmTrust Financial Services, Inc. Depository Shares Representing 1/40th Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFSI$C',
        name : "AmTrust Financial Services, Inc. Depository Shares Representing 1/40th Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFT',
        name : "Apollo Senior Floating Rate Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AFW',
        name : "American Financial Group, Inc. 6 3/8% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'AG',
        name : "First Majestic Silver Corp. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGC',
        name : "Advent Claymore Convertible Securities and Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGCO',
        name : "AGCO Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGD',
        name : "Alpine Global Dynamic Dividend Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGI',
        name : "Alamos Gold Inc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGM',
        name : "Federal Agricultural Mortgage Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGM$A',
        name : "Federal Agricultural Mortgage Corporation 5.875% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGM$B',
        name : "Federal Agricultural Mortgage Corporation Non Cumulative Preferred Stock Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGM$C',
        name : "Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGM.A',
        name : "Federal Agricultural Mortgage Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGN',
        name : "Allergan, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGO',
        name : "Assured Guaranty Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGO$B',
        name : "Assured Guaranty Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGO$E',
        name : "Assured Guaranty Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGO$F',
        name : "Assured Guaranty Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGRO',
        name : "Adecoagro S.A. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGU',
        name : "Agrium Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AGX',
        name : "Argan, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHC',
        name : "A.H. Belo Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHH',
        name : "Armada Hoffler Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHL',
        name : "Aspen Insurance Holdings Limited Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHL$A',
        name : "Aspen Insurance Holdings Limited Perp Pfd Shares (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHL$B',
        name : "Aspen Insurance Holdings Limited Perp Pref Shs (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHL$C',
        name : "Aspen Insurance Holdings Limited 5.95% Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHP',
        name : "Ashford Hospitality Prime, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHS',
        name : "AMN Healthcare Services Inc AMN Healthcare Services Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHT',
        name : "Ashford Hospitality Trust Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHT$A',
        name : "Ashford Hospitality Trust Inc 8.55% Cum Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHT$D',
        name : "Ashford Hospitality Trust Inc 8.45% Series D Cumulative Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AHT$E',
        name : "Ashford Hospitality Trust Inc 9.00% Series E Cumulative Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AI',
        name : "Arlington Asset Investment Corp Class A (new)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIB',
        name : "Apollo Investment Corporation 6.625% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIF',
        name : "Apollo Tactical Income Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIG',
        name : "American International Group, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIG.W',
        name : "American International Group, Inc. Warrant expiring January 19, 2021",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIN',
        name : "Albany International Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIR',
        name : "AAR Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIT',
        name : "Applied Industrial Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIV',
        name : "Apartment Investment and Management Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIV$A',
        name : "Apartment Investment and Management Company Preferred Series Class A",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIV$Z',
        name : "Apartment Investment and Management Company Class Z Cumulative Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIW',
        name : "Arlington Asset Investment Corp 6.625% Notes due 2023",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIY',
        name : "Apollo Investment Corporation 6.875% Senior Notes due 2043",
        exchange : 'NYSE'
      },
      {
        symbol : 'AIZ',
        name : "Assurant, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AJG',
        name : "Arthur J. Gallagher & Co. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AKO.A',
        name : "Embotelladora Andina S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AKO.B',
        name : "Embotelladora Andina S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AKP',
        name : "Alliance California Municipal Income Fund Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'AKR',
        name : "Acadia Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AKS',
        name : "AK Steel Holding Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AL',
        name : "Air Lease Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALB',
        name : "Albemarle Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALDW',
        name : "Alon USA Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALE',
        name : "Allete, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALEX',
        name : "Alexander & Baldwin, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALG',
        name : "Alamo Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALJ',
        name : "Alon USA Energy, Inc. common stick",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALK',
        name : "Alaska Air Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALL',
        name : "Allstate Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALL$A',
        name : "Allstate Corporation (The) Dep Shs Repstg 1/1000th Perp Pfd Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALL$B',
        name : "Allstate Corporation (The) 5.100% Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALL$C',
        name : "Allstate Corporation (The) Dep Shs Repstg 1/1000th Int Shs Pfd Stk Ser C",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALL$D',
        name : "The Allstate Corporation Leopards Each Representing A 1/1000th Interest In A Share Of Fixed Rate Noncumulative Perpetual Preferred Stock Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALL$E',
        name : "Allstate Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series E",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALL$F',
        name : "Allstate Corporation (The) Leopards Dep Shares Representing 1/1000th Perp Pfd",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALLE',
        name : "Allegion plc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALLY',
        name : "Ally Financial Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALLY$A',
        name : "GMAC Capital Trust I Fixed Rate Floating Rate Trust Preferred Securities, Series 2",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALLY$B',
        name : "Ally Financial Inc Fixed Rate Floating Rate Perpetual Preferred Stock, Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALP$N',
        name : "Alabama Power Company Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALP$O',
        name : "Alabama Power Company Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALP$P',
        name : "Alabama Power Company 5.30% Cl A Pfd Stk",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALR',
        name : "Alere Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALR$B',
        name : "Alere Inc. Inverness Medical Innovations, Inc. Series B Convertible Perpetual Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALSN',
        name : "Allison Transmission Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALU',
        name : "Alcatel",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALV',
        name : "Autoliv, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ALX',
        name : "Alexander's, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AM',
        name : "Antero Midstream Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMBR',
        name : "Amber Road, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMC',
        name : "AMC Entertainment Holdings, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AME',
        name : "AMETEK, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMFW',
        name : "AMEC Foster Wheeler plc American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMG',
        name : "Affiliated Managers Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMH',
        name : "American Homes 4 Rent Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMH$A',
        name : "American Homes 4 Rent Participating Preferred Shares Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMH$B',
        name : "American Homes 4 Rent 5% Series B Participating Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMH$C',
        name : "American Homes 4 Rent Participating Pfd Ser C",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMID',
        name : "American Midstream Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMP',
        name : "Ameriprise Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMRC',
        name : "Ameresco, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMRE',
        name : "AmREIT, Inc. Common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMT',
        name : "American Tower Corporation (REIT) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMT$A',
        name : "American Tower Corporation (REIT) Pfd Conv Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMTD',
        name : "TD Ameritrade Holding Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMTG',
        name : "Apollo Residential Mortgage, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMTG$A',
        name : "Apollo Residential Mortgage, Inc. Pfd Shs Series A  (US)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AMX',
        name : "America Movil, S.A.B. de C.V. American Depository Receipt Series L",
        exchange : 'NYSE'
      },
      {
        symbol : 'AN',
        name : "AutoNation, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANET',
        name : "Arista Networks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANF',
        name : "Abercrombie & Fitch Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANFI',
        name : "Amira Nature Foods Ltd Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANH',
        name : "Anworth Mortgage Asset Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANH$A',
        name : "Anworth Mortgage Asset Corporation Series A Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANH$B',
        name : "Anworth Mortgage Asset  Corporation Preferred Stock Series B 6.25%",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANN',
        name : "ANN INC. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANR',
        name : "Alpha Natural Resources, inc. comm stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANTM',
        name : "Anthem, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ANW',
        name : "Aegean Marine Petroleum Network Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AOD',
        name : "Alpine Total Dynamic Dividend Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AOI',
        name : "Alliance One International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AOL',
        name : "AOL Inc. AOL Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AON',
        name : "Aon plc Class A Ordinary Shares (UK)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AOS',
        name : "A.O. Smith Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AP',
        name : "Ampco",
        exchange : 'NYSE'
      },
      {
        symbol : 'APA',
        name : "Apache Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'APAM',
        name : "Artisan Partners Asset Management Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'APB',
        name : "Asia Pacific Fund, Inc. (The)",
        exchange : 'NYSE'
      },
      {
        symbol : 'APC',
        name : "Anadarko Petroleum Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'APD',
        name : "Air Products and Chemicals, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'APF',
        name : "Morgan Stanley Asia",
        exchange : 'NYSE'
      },
      {
        symbol : 'APH',
        name : "Amphenol Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'APL',
        name : "Atlas Pipeline Partners, L.P. Common Units, No Par Value",
        exchange : 'NYSE'
      },
      {
        symbol : 'APL$E',
        name : "Atlas Pipeline Partners, L.P. Cumulative Redeemable Perpetual Preferred Units Class E",
        exchange : 'NYSE'
      },
      {
        symbol : 'APO',
        name : "Apollo Global Management, LLC Class A Common Shares Representing Class A Limitied Liability Company Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'APU',
        name : "AmeriGas Partners, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AR',
        name : "Antero Resources Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARC',
        name : "ARC Document Solutions, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARCO',
        name : "Arcos Dorados Holdings Inc. Class A Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARCX',
        name : "Arc Logistic Partners LP Common Units representing limited partner interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARDC',
        name : "Ares Dynamic Credit Allocation Fund, Inc. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARE',
        name : "Alexandria Real Estate Equities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARE$E',
        name : "Alexandria Real Estate Equities, Inc. Pfd Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARES',
        name : "Ares Management L.P. Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARG',
        name : "Airgas, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARH$C',
        name : "Arch Capital Group Ltd. 6.75% PFD sh S C",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARI',
        name : "Apollo Commercial Real Estate Finance, Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARI$A',
        name : "Apollo Commercial Real Estate Finance Cumulative Redeemable Perpetual Preferred Stock Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARL',
        name : "American Realty Investors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARMF',
        name : "Ares Multi",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARMK',
        name : "Aramark Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARN',
        name : "Ares Capital Corporation 7.00% Senior Notes due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARO',
        name : "Aeropostale Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARP',
        name : "Atlas Resource Partners, L.P. Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARP$D',
        name : "Atlas Resource Partners, L.P. CUM RED PERP PDF UNIT CL D %",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARPI',
        name : "American Residential Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARR',
        name : "ARMOUR Residential REIT, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARR$A',
        name : "Armour Residential REIT INC Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARR$B',
        name : "ARMOUR Residential REIT, Inc. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARU',
        name : "Ares Capital Corporation 5.875% Senior Notes due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARW',
        name : "Arrow Electronics, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ARY',
        name : "Ares Capital Corporation 7.75% Senior Notes due 2040",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASA',
        name : "ASA  Gold and Precious Metals Limited",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASB',
        name : "Associated Banc",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASB$B',
        name : "Associated Banc",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASC',
        name : "Ardmore Shipping Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASG',
        name : "Liberty All",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASGN',
        name : "On Assignment, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASH',
        name : "Ashland Inc. (NEW) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASPN',
        name : "Aspen Aerogels, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASR',
        name : "Grupo Aeroportuario del Sureste, S.A. de C.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ASX',
        name : "Advanced Semiconductor Engineering, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AT',
        name : "Atlantic Power Corporation Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATE',
        name : "Advantest Corporation (Kabushiki Kaisha Advantest) ADS American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATEN',
        name : "A10 Networks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATHM',
        name : "Autohome Inc. American Depositary Shares, each representing one class A ordinary share.",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATI',
        name : "Allegheny Technologies Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATK',
        name : "Alliant Techsystems Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATLS',
        name : "Atlas Energy, L.P. Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATO',
        name : "Atmos Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATR',
        name : "AptarGroup, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATTO',
        name : "Atento S.A. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATU',
        name : "Actuant Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATV',
        name : "Acorn International, Inc. ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'ATW',
        name : "Atwood Oceanics, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AU',
        name : "AngloGold Ashanti Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AUO',
        name : "AU Optronics Corp American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AUQ',
        name : "AuRico Gold Inc. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AUY',
        name : "Yamana Gold Inc. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AV',
        name : "Aviva plc Unsponsored ADR (UK)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVA',
        name : "Avista Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVAL',
        name : "Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVB',
        name : "AvalonBay Communities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVD',
        name : "American Vanguard Corporation Common Stock ($0.10 Par Value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVG',
        name : "AVG Technologies N.V. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVH',
        name : "Avianca Holdings S.A. American Depositary Shares (Each representing 8 preferred Shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVIV',
        name : "Aviv REIT, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVK',
        name : "Advent Claymore Convertible Securities and Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVOL',
        name : "Avolon Holdings Limited Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVP',
        name : "Avon Products, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVT',
        name : "Avnet, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVV',
        name : "Aviva plc Subordinated Capital Securities due 2041",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVX',
        name : "AVX Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AVY',
        name : "Avery Dennison Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AWF',
        name : "Alliancebernstein Global High Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'AWH',
        name : "Allied World Assurance Company Holdings, AG (Switzerland)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AWI',
        name : "Armstrong World Industries Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AWK',
        name : "American Water Works Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AWP',
        name : "Alpine Global Premier Properties Fund Alpine Global Premier Properties Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'AWR',
        name : "American States Water Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXE',
        name : "Anixter International Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXL',
        name : "American Axle & Manufacturing Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXLL',
        name : "Axiall Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXP',
        name : "American Express Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXR',
        name : "AMREP Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXS',
        name : "Axis Capital Holdings Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXS$C',
        name : "Axis Capital Holdings Limited Preferred Series C (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXS$D',
        name : "Axis Capital Holdings Limited Preferred Series D (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AXTA',
        name : "Axalta Coating Systems Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'AYI',
        name : "Acuity Brands Inc (Holding Company)",
        exchange : 'NYSE'
      },
      {
        symbol : 'AYN',
        name : "Alliance New York Municipal Income Fund Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'AYR',
        name : "Aircastle Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AZN',
        name : "Astrazeneca PLC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AZO',
        name : "AutoZone, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'AZZ',
        name : "AZZ Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'B',
        name : "Barnes Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BA',
        name : "Boeing Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BABA',
        name : "Alibaba Group Holding Limited American Depositary Shares each representing one Ordinary share",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC',
        name : "Bank of America Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC$D',
        name : "Bank of America Corporation Depositary Shares Rpstg 1/1000th Interest in Sh of Non Cum Pfd Stk Ser D",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC$E',
        name : "Bank of America Corporation Depositary Sh repstg 1/1000th Perp Pfd Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC$I',
        name : "Bank Amer Corp Dep Sh Repstg 1/1000th Pfd Ser I",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC$L',
        name : "Bank of America Corporation Non Cumulative Perpetual Conv Pfd Ser L",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC$W',
        name : "Bank of America Corporation Depository Shares Representing 1/1000th Preferred Series W",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC$Z',
        name : "Bank of America Corporation BAC Capital Trust VIII 6% Capital Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC.A',
        name : "Bank of America Corporation Class A Warrant expiring January 16, 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAC.B',
        name : "Bank of America Corporation Class B Warrants expiring 10/28/2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAF',
        name : "BlackRock Municipal Income Investment Quality Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAH',
        name : "Booz Allen Hamilton Holding Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAK',
        name : "Braskem SA ADR",
        exchange : 'NYSE'
      },
      {
        symbol : 'BALT',
        name : "Baltic Trading Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAM',
        name : "Brookfield Asset Management Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BANC',
        name : "Banc of California, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BANC$C',
        name : "Banc of California, Inc. Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAP',
        name : "Credicorp Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAS',
        name : "Basic Energy Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BAX',
        name : "Baxter International Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBD',
        name : "Banco Bradesco Sa American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBDO',
        name : "Banco Bradesco Sa American Depositary Shares (each representing one Common Share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBF',
        name : "BlackRock Municipal Income Investment Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBG',
        name : "Bill Barrett Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBK',
        name : "Blackrock Municipal Bond Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBL',
        name : "BHP Billiton plc Sponsored ADR",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBN',
        name : "BlackRock Build America Bond Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBT',
        name : "BB&T Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBT$D',
        name : "BB&T Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBT$E',
        name : "BB&T Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series E",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBT$F',
        name : "BB&T Corporation Depositary Shares Representing 1/1000th Interest Series F Perpetual Preferred",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBT$G',
        name : "BB&T Corporation Depositary Shares Representing 1/1000th Perpetual Preferred Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBVA',
        name : "Banco Bilbao Vizcaya Argentaria S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBW',
        name : "Build",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBX',
        name : "BBX Capital Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BBY',
        name : "Best Buy Co., Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BC',
        name : "Brunswick Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCA',
        name : "Corpbanca Sponsored Reg S GDR representing Common (Chile)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCC',
        name : "Boise Cascade, L.L.C. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCE',
        name : "BCE, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCEI',
        name : "Bonanza Creek Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCH',
        name : "Banco De Chile Banco De Chile ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCO',
        name : "Brinks Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCR',
        name : "C.R. Bard, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCRH',
        name : "Blue Capital Reinsurance Holdings Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCS',
        name : "Barclays PLC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCS$',
        name : "Barclays Bank PLC ADR Ser 2 repstg Pref Shs Ser 2 (United Kingdom)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCS$A',
        name : "Barclays PLC ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCS$C',
        name : "Barclays PLC American Depositary Shares Series 4",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCS$D',
        name : "Barclays PLC American Depositary Shares (Each representing Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'BCX',
        name : "BlackRock Resources Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BDC',
        name : "Belden Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BDJ',
        name : "Blackrock Enhanced Equity Dividend Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BDN',
        name : "Brandywine Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BDN$E',
        name : "Brandywine Realty Tr Pfd Shs Ben Int Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'BDX',
        name : "Becton, Dickinson and Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BEE',
        name : "Strategic Hotels & Resorts  Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BEL',
        name : "Belmond Ltd. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BEN',
        name : "Franklin Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BEP',
        name : "Brookfield Renewable Energy Partners LP Partnership Units (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BERY',
        name : "Berry Plastics Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BF.A',
        name : "Brown Forman Inc Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BF.B',
        name : "Brown Forman Inc Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BFAM',
        name : "Bright Horizons Family Solutions Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BFK',
        name : "BlackRock Municipal Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BFO',
        name : "Blackrock Florida Municipal 2020 Term Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BFR',
        name : "BBVA Banco Frances S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BFS',
        name : "Saul Centers, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BFS$C',
        name : "Saul Centers, Inc. Depositary Shares, each representing 1/100th of a share of 6.875% Series C Cumulative Redeemable Preferred Stock, $0.01 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'BFZ',
        name : "BlackRock California Municipal Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BG',
        name : "Bunge Limited Bunge Limited",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGB',
        name : "Blackstone / GSO Strategic Credit Fund Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGC',
        name : "General Cable Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGCA',
        name : "BGC Partners, Inc. 8.125% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGE$B',
        name : "Bge Cap Trust II 6.20% Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGG',
        name : "Briggs & Stratton Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGH',
        name : "Babson Capital Global Short Duration High Yield Fund Common Shares of Beneficial Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGR',
        name : "BlackRock Energy and Resources Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGS',
        name : "B&G Foods, Inc. B&G Foods, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGT',
        name : "BlackRock Floating Rate Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGX',
        name : "Blackstone GSO Long Short Credit Income Fund Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BGY',
        name : "BLACKROCK INTERNATIONAL, LTD. Blackrock International Real Estate Fund, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BH',
        name : "Biglari Holdings Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BHE',
        name : "Benchmark Electronics, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BHI',
        name : "Baker Hughes Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BHK',
        name : "Blackrock Core Bond Trust Blackrock Core Bond Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BHL',
        name : "Blackrock Defined Opportunity Credit Trust Blackrock Defined Opportunity Credit Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BHLB',
        name : "Berkshire Hills Bancorp, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BHP',
        name : "BHP Billiton Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BID',
        name : "Sotheby's Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIE',
        name : "BlackRock Municipal Bond Investment Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIF',
        name : "Boulder Growth & Income Fund, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIG',
        name : "Big Lots, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIN',
        name : "Progressive Waste Solutions Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIO',
        name : "Bio",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIO.B',
        name : "Bio",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIOA',
        name : "BioAmber Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIOA.W',
        name : "BioAmber Inc. Warrant, expiring May 9, 2017",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIP',
        name : "Brookfield Infrastructure Partners LP Limited Partnership Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'BIT',
        name : "BlackRock Multi",
        exchange : 'NYSE'
      },
      {
        symbol : 'BITA',
        name : "Bitauto Holdings Limited American Depositary Shares (each representing one ordinary share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BJZ',
        name : "Blackrock California Municipal 2018 Term Trust Blackrock California Municipal 2018 Term Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BK',
        name : "Bank of New York Mellon Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BK$C',
        name : "Bank Of New York Mellon Corporation (The) Dep Shs Repstg 1/4000th Perp Pfd Ser C",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKD',
        name : "Brookdale Senior Living Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKE',
        name : "Buckle, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKH',
        name : "Black Hills Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKK',
        name : "Blackrock Municipal 2020 Term Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKN',
        name : "BlackRock Investment Quality Municipal Trust Inc. (The)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKS',
        name : "Barnes & Noble, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKT',
        name : "BlackRock Income Trust Inc. (The)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BKU',
        name : "BankUnited, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BLH',
        name : "Blackrock New York Municipal 2018 Term Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BLK',
        name : "BlackRock, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BLL',
        name : "Ball Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BLOX',
        name : "Infoblox Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BLT',
        name : "Blount International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BLW',
        name : "Blackrock Limited Duration Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BLX',
        name : "Banco Latinoamericano de Comercio Exterior, S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BMA',
        name : "Banco Macro S.A.  ADR (representing Ten Class B Common Shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BME',
        name : "Blackrock Health Sciences Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BMI',
        name : "Badger Meter, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BML$G',
        name : "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a share of Floating Rate Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'BML$H',
        name : "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'BML$I',
        name : "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of 6.375% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'BML$J',
        name : "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'BML$L',
        name : "Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th Interest in a Share of Floating Rate Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'BMO',
        name : "Bank Of Montreal Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BMR',
        name : "Biomed Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BMS',
        name : "Bemis Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BMY',
        name : "Bristol",
        exchange : 'NYSE'
      },
      {
        symbol : 'BNJ',
        name : "BlackRock New Jersey Municipal Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BNK',
        name : "C1 Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BNS',
        name : "Bank Nova Scotia Halifax Pfd 3 Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BNY',
        name : "BlackRock New York Municipal Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BOCA',
        name : "Banc of California, Inc. Senior Note due 4/15/2020",
        exchange : 'NYSE'
      },
      {
        symbol : 'BOE',
        name : "Blackrock Global Blackrock Global Opportunities Equity Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BOH',
        name : "Bank of Hawaii Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BOI',
        name : "Brookfield Mortgage Opportunity Income Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BOOT',
        name : "Boot Barn Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BORN',
        name : "China New Borun Corporation American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BOXC',
        name : "Brookfield Canada Office Properties",
        exchange : 'NYSE'
      },
      {
        symbol : 'BP',
        name : "BP p.l.c. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BPI',
        name : "Bridgepoint Education, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BPK',
        name : "Blackrock Municipal 2018 Term Trust Blackrock Municipal 2018 Term Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BPL',
        name : "Buckeye Partners L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BPT',
        name : "BP Prudhoe Bay Royalty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BPY',
        name : "Brookfield Property Partners L.P. Limited Partnership Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'BPZ',
        name : "BPZ Resources, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BQH',
        name : "Blackrock New York Municipal Bond Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BR',
        name : "Broadridge Financial Solutions, Inc.Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRC',
        name : "Brady Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRFS',
        name : "BRF S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRK.A',
        name : "Berkshire Hathaway Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRK.B',
        name : "Berkshire Hathaway Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRO',
        name : "Brown & Brown, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRP',
        name : "Brookfield Residential Properties Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRS',
        name : "Bristow Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRSS',
        name : "Global Brass and Copper Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRT',
        name : "BRT Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BRX',
        name : "Brixmor Property Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSAC',
        name : "Banco Santander",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSBR',
        name : "Banco Santander Brasil SA American Depositary Shares, each representing one unit",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSD',
        name : "BlackRock Strategic Municipal Trust Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSE',
        name : "Blackrock New York Municipal Income Quality Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSI',
        name : "Alon Blue Square Israel Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSL',
        name : "Blackstone GSO Senior Floating Rate Term Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSMX',
        name : "Grupo Financiero Santander Mexico S.A. B. de C.V. American Depositary Shares, each representing five Series B shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'BST',
        name : "BlackRock Science and Technology Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BSX',
        name : "Boston Scientific Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BT',
        name : "BT Group plc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTA',
        name : "BlackRock Long",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTE',
        name : "Baytex Energy Corp",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTF',
        name : "Boulder Total Return Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTH',
        name : "Blyth, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTO',
        name : "John Hancock Financial Opportunities Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTT',
        name : "BlackRock Municipal Target Term Trust Inc. (The) Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTU',
        name : "Peabody Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BTZ',
        name : "BlackRock Credit Allocation Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'BUD',
        name : "Anheuser",
        exchange : 'NYSE'
      },
      {
        symbol : 'BUI',
        name : "BlackRock Utility and Infrastructure Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BURL',
        name : "Burlington Stores, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BVN',
        name : "Buenaventura Mining Company Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'BWA',
        name : "BorgWarner Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BWC',
        name : "Babcock Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BWG',
        name : "Legg Mason BW Global Income Opportunities Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BWP',
        name : "Boardwalk Pipeline Partners LP Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'BWS',
        name : "Brown Shoe Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BX',
        name : "The Blackstone Group L.P. Common Units Representing Limited Partnership Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'BXC',
        name : "Bluelinx Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BXE',
        name : "Bellatrix Exploration Ltd Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'BXMT',
        name : "Blackstone Mortgage Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BXMX',
        name : "Nuveen S&P 500 Buy",
        exchange : 'NYSE'
      },
      {
        symbol : 'BXP',
        name : "Boston Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BXP$B',
        name : "Boston Properties, Inc. Depositary Shares, each representing 1/100th of a share of the Issuer's 5.25% Sockeries B Cumulative Redeemable Preferred St",
        exchange : 'NYSE'
      },
      {
        symbol : 'BXS',
        name : "BancorpSouth, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BYD',
        name : "Boyd Gaming Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BYM',
        name : "Blackrock Municipal Income Quality Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'BZH',
        name : "Beazer Homes USA, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'BZT',
        name : "Beazer Homes USA, Inc. Tangible Equity Unit",
        exchange : 'NYSE'
      },
      {
        symbol : 'C',
        name : "Citigroup, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'C$C',
        name : "Citigroup Inc. Depositary Shares representing 1/1000 Series C Noncumulative Preferred Stock (United States)",
        exchange : 'NYSE'
      },
      {
        symbol : 'C$J',
        name : "Citigroup Inc. Dep Shs Repstg 1/1000 Pfd Ser J Fixed/Fltg",
        exchange : 'NYSE'
      },
      {
        symbol : 'C$K',
        name : "Citigroup Inc. Dep Shs Repstg 1/1000th Pfd Ser K",
        exchange : 'NYSE'
      },
      {
        symbol : 'C$L',
        name : "Citigroup Inc. Depositary Share representing 1/1000 interest in a share of noncumulative series L",
        exchange : 'NYSE'
      },
      {
        symbol : 'C$N',
        name : "Citigroup Capital VIII 7.875% Fixed rate Floating Rate trust Preferred Securities (TruPS)",
        exchange : 'NYSE'
      },
      {
        symbol : 'C$P',
        name : "Citigroup Inc. Dep Shs Repstg 1/1000th Pfd Ser AA",
        exchange : 'NYSE'
      },
      {
        symbol : 'C.A',
        name : "Citigroup Inc. Warrants Class A expiring January 4, 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'C.B',
        name : "Citigroup Inc. Class B Warant expiring October 28, 2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAB',
        name : "Cabela's Inc Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CACI',
        name : "CACI International, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAE',
        name : "CAE Inc. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAF',
        name : "Morgan Stanley China A Share Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAG',
        name : "ConAgra Foods, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAH',
        name : "Cardinal Health, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAJ',
        name : "Canon, Inc. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CALX',
        name : "Calix, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAM',
        name : "Cameron International Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAP',
        name : "Cai International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAPL',
        name : "CrossAmerica Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAS',
        name : "Castle (A.M.) & Co. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CAT',
        name : "Caterpillar, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CATO',
        name : "Cato Corporation (The) Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CB',
        name : "Chubb Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBA',
        name : "ClearBridge American Energy MLP Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBB',
        name : "Cincinnati Bell Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBB$B',
        name : "Cincinnati Bell Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBD',
        name : "Companhia Brasileira de Distribuicao ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBG',
        name : "CBRE Group Inc Common Stock Class A",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBI',
        name : "Chicago Bridge & Iron Company N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBK',
        name : "Christopher & Banks Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBL',
        name : "CBL & Associates Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBL$D',
        name : "CBL & Associates Properties, Inc. Dep Shares Repstg 1/10th Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBL$E',
        name : "CBL & Associates Properties, Inc. Depositary Shs Repstg 1/10 6.625% Ser E Cum Redeemable (Pfd Stk)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBM',
        name : "Cambrex Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBPX',
        name : "Continental Building Products, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBR',
        name : "Ciber, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBS',
        name : "CBS Corporation Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBS.A',
        name : "CBS Corporation CBS Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBT',
        name : "Cabot Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBU',
        name : "Community Bank System, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CBZ',
        name : "CBIZ, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCC',
        name : "Calgon Carbon Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCE',
        name : "Coca",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCG',
        name : "Campus Crest Communities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCG$A',
        name : "Campus Crest Communities, Inc. 8.00% Series A Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCI',
        name : "Crown Castle International Corp. (REIT) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCI$A',
        name : "Crown Castle International Corp. (REIT) Mandatory Conv Pfd Stk Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCJ',
        name : "Cameco Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCK',
        name : "Crown Holdings, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCL',
        name : "Carnival Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCM',
        name : "Concord Medical Services Holdings Limited ADS (Each represents three ordinary shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCO',
        name : "Clear Channel Outdoor Holdings, Inc. Clear Channel Outdoor Holdings, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCS',
        name : "Century Communities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCSC',
        name : "Country Style Cooking Restaurant Chain Co., Ltd American Depositary Shares, each representing four ordinary shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCU',
        name : "Compania Cervecerias Unidas, S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCV',
        name : "Comcast Corporation 5.00% Notes due 2061",
        exchange : 'NYSE'
      },
      {
        symbol : 'CCZ',
        name : "Comcast Holdings ZONES",
        exchange : 'NYSE'
      },
      {
        symbol : 'CDE',
        name : "Coeur Mining, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CDE.W',
        name : "Coeur Mining, Inc. Warrant expiring April 16, 2017",
        exchange : 'NYSE'
      },
      {
        symbol : 'CDI',
        name : "CDI Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CDR',
        name : "Cedar Realty Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CDR$B',
        name : "Cedar Realty Trust, Inc. 7.25% Series B Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CE',
        name : "Celanese Corporation Celanese Corporation Series A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEA',
        name : "China Eastern Airlines Corporation Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEB',
        name : "Corporate Executive Board Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEE',
        name : "Central Europe, Russia and Turkey Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEL',
        name : "Cellcom Israel, Ltd. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CELP',
        name : "Cypress Energy Partners, L.P. Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEM',
        name : "ClearBridge Energy MLP Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEN',
        name : "Center Coast MLP & Infrastructure Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEO',
        name : "CNOOC Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CEQP',
        name : "Crestwood Equity Partners LP",
        exchange : 'NYSE'
      },
      {
        symbol : 'CF',
        name : "CF Industries Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFC$A',
        name : "Countrywide Capital IV (New) 6.75% Trust Pfd Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFC$B',
        name : "Countrywide Capital V (New) 7.00% Capital Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFG',
        name : "Citizens Financial Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFI',
        name : "Culp, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFN',
        name : "CareFusion Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFR',
        name : "Cullen/Frost Bankers, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFR$A',
        name : "Cullen/Frost Bankers, Inc. Perpetual Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'CFX',
        name : "Colfax Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CGA',
        name : "China Green Agriculture, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CGG',
        name : "CGG",
        exchange : 'NYSE'
      },
      {
        symbol : 'CGI',
        name : "Celadon Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHA',
        name : "China Telecom Corp Ltd ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHD',
        name : "Church & Dwight Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHE',
        name : "Chemed Corp",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHGG',
        name : "Chegg, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHH',
        name : "Choice Hotels International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHK',
        name : "Chesapeake Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHK$D',
        name : "Chesapeake Energy Corporation Convertible Preferred",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHKR',
        name : "Chesapeake Granite Wash Trust Common Units representing beneficial interests in the Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHL',
        name : "China Mobile Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHMI',
        name : "Cherry Hill Mortgage Investment Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHMT',
        name : "Chemtura Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHN',
        name : "China Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHS',
        name : "Chico's FAS, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHSP',
        name : "Chesapeake Lodging Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHSP$A',
        name : "Chesapeake Lodging Trust 7.75% Series A Cumulative Redeemable Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHT',
        name : "Chunghwa Telecom Co., Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'CHU',
        name : "China Unicom (Hong Kong) Ltd Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CI',
        name : "Cigna Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIA',
        name : "Citizens, Inc. Class A Common Stock ($1.00 Par)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIB',
        name : "BanColombia S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIE',
        name : "Cobalt International Energy, Inc. COBALT INTERNATIONAL ENERGY, INC.",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIEN',
        name : "Ciena Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIF',
        name : "MFS Intermediate High Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIG',
        name : "Comp En De Mn Cemig ADS American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIG.C',
        name : "Comp En De Mn Cemig ADS American Depositary Receipts",
        exchange : 'NYSE'
      },
      {
        symbol : 'CII',
        name : "Blackrock Capital and Income Fund, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIM',
        name : "Chimera Investment Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIO',
        name : "City Office REIT, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIR',
        name : "CIRCOR International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIT',
        name : "CIT Group Inc (DEL) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CIVI',
        name : "Civitas Solutions, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CJES',
        name : "C&J Energy Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CKH',
        name : "SEACOR Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CKP',
        name : "Checkpoint Systms, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CL',
        name : "Colgate",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLA',
        name : "Capitala Finance Corp. 7.125% Notes due 2021",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLB',
        name : "Core Laboratories N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLC',
        name : "CLARCOR Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLD',
        name : "Cloud Peak Energy Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLDT',
        name : "Chatham Lodging Trust (REIT) Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLF',
        name : "Cliffs Natural Resources Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLGX',
        name : "CoreLogic, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLH',
        name : "Clean Harbors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLI',
        name : "Mack",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLNY',
        name : "Colony Financial, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLNY$A',
        name : "Colony Finl Inc Cum Red Perp Pfd Ser A %",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLNY$B',
        name : "Colony Financial, Inc Perp Pfd Ser B %",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLR',
        name : "Continental Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLS',
        name : "Celestica, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLV',
        name : "Cliffs Natural Resources Inc. Depositary Shares Representing 1/40th Preferred Convertible Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLW',
        name : "Clearwater Paper Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CLX',
        name : "Clorox Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CM',
        name : "Canadian Imperial Bank of Commerce Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMA',
        name : "Comerica Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMA.W',
        name : "Comerica Incorporated Warrant expiring November 14, 2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMC',
        name : "Commercial Metals Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMCM',
        name : "Cheetah Mobile Inc. American Depositary Shares, each representing 10 Class Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMG',
        name : "Chipotle Mexican Grill, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMI',
        name : "Cummins Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMK',
        name : "MFS Intermarket Income Trust I Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMLP',
        name : "Crestwood Midstream Partners LP",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMN',
        name : "Cantel Medical Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMO',
        name : "Capstead Mortgage Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMO$E',
        name : "Capstead Mortgage Corporation Pfd Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMP',
        name : "Compass Minerals Intl Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMRE',
        name : "Costamare Inc. Common Stock $0.0001 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMRE$B',
        name : "Costamare Inc. Perpetual Preferred Stock Series B (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMRE$C',
        name : "Costamare Inc. Perpetual Preferred Series C (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMS',
        name : "CMS Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMS$B',
        name : "CMS Energy Corporation Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CMU',
        name : "MFS Municipal Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNA',
        name : "CNA Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNC',
        name : "Centene Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNCO',
        name : "Cencosud S.A. American Depositary Shares (Each representing three Common Shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNHI',
        name : "CNH Industrial N.V. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNI',
        name : "Canadian National Railway Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNK',
        name : "Cinemark Holdings Inc Cinemark Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNL',
        name : "Cleco Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNNX',
        name : "Cone Midstream Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNO',
        name : "CNO Financial Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNP',
        name : "CenterPoint Energy, Inc (Holding Co) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNQ',
        name : "Canadian Natural Resources Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNS',
        name : "Cohn & Steers Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNW',
        name : "Con",
        exchange : 'NYSE'
      },
      {
        symbol : 'CNX',
        name : "CONSOL Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CO',
        name : "China Cord Blood Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CODE',
        name : "Spansion Inc Common Stock Class A New",
        exchange : 'NYSE'
      },
      {
        symbol : 'CODI',
        name : "Compass Diversified Holdings Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'COF',
        name : "Capital One Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COF$C',
        name : "Capital One Financial Corp Depository Shares Representing 1/40th Int Perp Pfd Ser C%",
        exchange : 'NYSE'
      },
      {
        symbol : 'COF$D',
        name : "Capital One Financial Corp Depository Shares Representing 1/40th Interest Perpetual Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'COF$P',
        name : "Capital One Financial Corp Pfd Ser B",
        exchange : 'NYSE'
      },
      {
        symbol : 'COF.W',
        name : "Capital One Financial Corporation Warrants expiring November 14, 2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'COG',
        name : "Cabot Oil & Gas Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COH',
        name : "Coach, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COL',
        name : "Rockwell Collins, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COO',
        name : "Cooper Companies, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COP',
        name : "ConocoPhillips Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COR',
        name : "CoreSite Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COR$A',
        name : "CoreSite Realty Corporation Pfd Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'CORR',
        name : "CorEnergy Infrastructure Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COT',
        name : "Cott Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COTY',
        name : "Coty Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COUP',
        name : "Coupons.com Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'COV',
        name : "Covidien plc. Ordinary Shares (Ireland)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CP',
        name : "Canadian Pacific Railway Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPA',
        name : "Copa Holdings, S.A. Copa Holdings, S.A. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPAC',
        name : "Cementos Pacasmayo S.A.A. American Depositary Shares, each representing five Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPB',
        name : "Campbell Soup Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPE',
        name : "Callon Petroleum Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPE$A',
        name : "Callon Petroleum Company Preferred Shares Series A 10%",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPF',
        name : "Central Pacific Financial Corp New",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPG',
        name : "Crescent Point Energy Corporation Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPK',
        name : "Chesapeake Utilities Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPL',
        name : "CPFL Energia S.A. CPFL Energia S.A. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPN',
        name : "Calpine Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPS',
        name : "Cooper",
        exchange : 'NYSE'
      },
      {
        symbol : 'CPT',
        name : "Camden Property Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CR',
        name : "Crane Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRC',
        name : "California Resources Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRCM',
        name : "Care.com, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRD.A',
        name : "Crawford & Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRD.B',
        name : "Crawford & Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRH',
        name : "CRH PLC American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRI',
        name : "Carter's, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRK',
        name : "Comstock Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRL',
        name : "Charles River Laboratories International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRM',
        name : "Salesforce.com Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRR',
        name : "Carbo Ceramics, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRS',
        name : "Carpenter Technology Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRT',
        name : "Cross Timbers Royalty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CRY',
        name : "CryoLife, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CS',
        name : "Credit Suisse Group American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSC',
        name : "Computer Sciences Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSG',
        name : "Chambers Street Properties Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSH',
        name : "Cash America International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSI',
        name : "Cutwater Select Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSL',
        name : "Carlisle Companies Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSLT',
        name : "Castlight Health, Inc. Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSS',
        name : "CSS Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CST',
        name : "CST Brands, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSTM',
        name : "Constellium N.V. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSU',
        name : "Capital Senior Living Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSV',
        name : "Carriage Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CSX',
        name : "CSX Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTB',
        name : "Cooper Tire & Rubber Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTL',
        name : "CenturyLink, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTLT',
        name : "Catalent, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTQ',
        name : "Qwest Corporation 7.375% Notes due 2051",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTR',
        name : "ClearBridge Energy MLP Total Return Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTS',
        name : "CTS Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTT',
        name : "CatchMark Timber Trust, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTU',
        name : "Qwest Corporation 7.00% Notes due 2025",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTV',
        name : "Qwest Corporation 6.875% Notes due 2054",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTW',
        name : "Qwest Corporation 7.50% Notes due 2051",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTX',
        name : "Qwest Corporation 7.00% Notes due 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'CTY',
        name : "Qwest Corporation 6.125% Notes due 2053",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUB',
        name : "Cubic Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUBE',
        name : "CubeSmart Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUBE$A',
        name : "CubeSmart 7.75% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUBI',
        name : "Customers Bancorp, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUBS',
        name : "Customers Bancorp, Inc 6.375% Senior Notes due 2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUDA',
        name : "Barracuda Networks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUK',
        name : "Carnival Plc ADS ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'CUZ',
        name : "Cousins Properties Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVA',
        name : "Covanta Holding Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVB',
        name : "Lehman ABS Corporation 7.75% Corp Backed Tr Ctfs, Kinder Morgan Debenture",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVC',
        name : "Cablevision Systems Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVD',
        name : "Covance Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVE',
        name : "Cenovus Energy Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVEO',
        name : "Civeo Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVG',
        name : "Convergys Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVI',
        name : "CVR Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVO',
        name : "Cenveo Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVRR',
        name : "CVR Refining, LP Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVS',
        name : "CVS Health Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVT',
        name : "CVENT, INC. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CVX',
        name : "Chevron Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CW',
        name : "Curtiss",
        exchange : 'NYSE'
      },
      {
        symbol : 'CWEI',
        name : "Clayton Williams Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CWT',
        name : "California Water Service Group Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CX',
        name : "Cemex, S.A.B. de C.V. Sponsored ADR",
        exchange : 'NYSE'
      },
      {
        symbol : 'CXE',
        name : "MFS High Income Municipal Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CXH',
        name : "MFS Investment Grade Municipal Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CXO',
        name : "Concho Resources Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CXP',
        name : "Columbia Property Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CXW',
        name : "Corrections Corporation of America Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYD',
        name : "China Yuchai International Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYH',
        name : "Community Health Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYN',
        name : "City National Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYN$C',
        name : "City National Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYN$D',
        name : "City National Corporation Depositary Shares Representing 1/40th Preferred Series D Fixed/Floating",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYNI',
        name : "Cyan, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYS',
        name : "CYS Investments, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYS$A',
        name : "CYS Investments Inc Cumulative Redeemable Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYS$B',
        name : "CYS Investments, Inc. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'CYT',
        name : "Cytec Industries Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'CZZ',
        name : "Cosan Limited Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'D',
        name : "Dominion Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DAC',
        name : "Danaos Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DAL',
        name : "Delta Air Lines, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DAN',
        name : "Dana Holding Corporation Common Stock When",
        exchange : 'NYSE'
      },
      {
        symbol : 'DANG',
        name : "E",
        exchange : 'NYSE'
      },
      {
        symbol : 'DAR',
        name : "Darling Ingredients Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DATA',
        name : "Tableau Software, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DB',
        name : "Deutsche Bank AG Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DBD',
        name : "Diebold, Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DBL',
        name : "DoubleLine Opportunistic Credit Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCA',
        name : "Virtus Total Return Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCI',
        name : "Donaldson Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCM',
        name : "NTT DOCOMO, Inc American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCO',
        name : "Ducommun Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCT',
        name : "DCT Industrial Trust Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCUA',
        name : "Dominion Resources, Inc. Corporate Unit 2013 Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCUB',
        name : "Dominion Resources, Inc. Corporate Unit 2013 Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'DCUC',
        name : "Dominion Resources, Inc. VA New 2014 Series A Corp Unit",
        exchange : 'NYSE'
      },
      {
        symbol : 'DD',
        name : "E.I. du Pont de Nemours and Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DD$A',
        name : "E.I. du Pont de Nemours and Company Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DD$B',
        name : "E.I. du Pont de Nemours and Company Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDC',
        name : "Dominion Diamond Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDD',
        name : "3D Systems Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDE',
        name : "Dover Downs Gaming & Entertainment Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDF',
        name : "Delaware Investments Dividend & Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDR',
        name : "DDR Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDR$J',
        name : "DDR Corporation Dep Shs Repstg 1/20th Pfd Cl J",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDR$K',
        name : "DDR Corp. DEPOSITARY SH REPSTG 1/20TH PDF CL K % (United States)",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDS',
        name : "Dillard's, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DDT',
        name : "Dillard's Capital Trust I",
        exchange : 'NYSE'
      },
      {
        symbol : 'DE',
        name : "Deere & Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DECK',
        name : "Deckers Outdoor Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DEG',
        name : "Etablissements Delhaize Freres et Cie \"Le Lion\" S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DEI',
        name : "Douglas Emmett, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DEL',
        name : "Deltic Timber Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DEO',
        name : "Diageo plc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DEX',
        name : "Delaware Enhanced Global Dividend Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'DF',
        name : "Dean Foods Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DFP',
        name : "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DFS',
        name : "Discover Financial Services Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DFS$B',
        name : "Discover Financial Services Dep Shs",
        exchange : 'NYSE'
      },
      {
        symbol : 'DFT',
        name : "Dupont Fabros Technology, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DFT$A',
        name : "DuPont Fabros Technology Inc CUMULATIVE RED PERP PFD SER A",
        exchange : 'NYSE'
      },
      {
        symbol : 'DFT$B',
        name : "Dupont Fabros Technology, Inc. 7.625% Series B Cumulative Redeemable Perpetual Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DG',
        name : "Dollar General Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DGI',
        name : "DigitalGlobe, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DGX',
        name : "Quest Diagnostics Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DHF',
        name : "Dreyfus High Yield Strategies Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DHG',
        name : "Deutsche High Income Opportunities Fund, Inc  New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DHI',
        name : "D.R. Horton, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DHR',
        name : "Danaher Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DHT',
        name : "DHT Holdings, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'DHX',
        name : "Dice Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DIAX',
        name : "Nuveen Dow 30SM Dynamic Overwrite Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'DIN',
        name : "DineEquity, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DIS',
        name : "Walt Disney Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DK',
        name : "Delek US Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DKL',
        name : "Delek Logistics Partners, L.P. Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'DKS',
        name : "Dick's Sporting Goods Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DKT',
        name : "Deutsch Bk Contingent Cap Tr V Tr Pfd Secs",
        exchange : 'NYSE'
      },
      {
        symbol : 'DL',
        name : "China Distance Education Holdings Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLB',
        name : "Dolby Laboratories Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLNG',
        name : "Dynagas LNG Partners LP Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLPH',
        name : "Delphi Automotive plc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLR',
        name : "Digital Realty Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLR$E',
        name : "Digital Realty Trust, Inc. Redeemable Pfd Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLR$F',
        name : "Digital Realty Trust, Inc. Preferred Series F",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLR$G',
        name : "Digital Realty Trust, Inc. Preferred Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLR$H',
        name : "Digital Realty Trust, Inc. Redeemable Preferred Stock Series H",
        exchange : 'NYSE'
      },
      {
        symbol : 'DLX',
        name : "Deluxe Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DM',
        name : "Dominion Midstream Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'DMB',
        name : "Dreyfus Municipal Bond Infrastructure Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DMD',
        name : "Demand Media Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DMO',
        name : "Western Asset Mortgage Defined Opportunity Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DNB',
        name : "Dun & Bradstreet Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DNI',
        name : "Dividend and Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DNOW',
        name : "NOW Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DNP',
        name : "DNP Select Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DNR',
        name : "Denbury Resources Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DNY',
        name : "The Denali Fund Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'DO',
        name : "Diamond Offshore Drilling, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DOC',
        name : "Physicians Realty Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'DOM',
        name : "Dominion Resources Black Warrior Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DOOR',
        name : "Masonite International Corporation Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'DOV',
        name : "Dover Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DOW',
        name : "Dow Chemical Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DPG',
        name : "Duff & Phelps Global Utility Income Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DPLO',
        name : "Diplomat Pharmacy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DPM',
        name : "DCP Midstream Partners, LP DCP Midstream Partnership, LP Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'DPS',
        name : "Dr Pepper Snapple Group, Inc Dr Pepper Snapple Group, Inc  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DPZ',
        name : "Domino's Pizza Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DQ',
        name : "DAQO New Energy Corp. American Depositary Shares, each representing five ordinary shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRA',
        name : "Diversified Real Asset Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRC',
        name : "Dresser",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRD',
        name : "DRDGOLD Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRE',
        name : "Duke Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRH',
        name : "Diamondrock Hospitality Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRI',
        name : "Darden Restaurants, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRII',
        name : "Diamond Resorts International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRL',
        name : "Doral Financial Corporation NEW Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DRQ',
        name : "Dril",
        exchange : 'NYSE'
      },
      {
        symbol : 'DSE',
        name : "Duff & Phelps Select Energy MLP Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DSL',
        name : "DoubleLine Income Solutions Fund Common Shares of Beneficial Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'DSM',
        name : "Dreyfus Strategic Municipal Bond Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DST',
        name : "DST Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DSU',
        name : "Blackrock Debt Strategies Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DSW',
        name : "DSW Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DSX',
        name : "Diana Shipping inc. common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DSX$B',
        name : "Diana Shipping Inc. Perpetual Preferred Shares Series B (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'DTE',
        name : "DTE Energy Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DTF',
        name : "DTF Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'DTK',
        name : "Deutsche Bk Contingent Cap Tr III Tr Pfd Secs",
        exchange : 'NYSE'
      },
      {
        symbol : 'DTLA$',
        name : "Brookfield DTLA Inc. 7.625% Series A Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DTQ',
        name : "DTE Energy Company 2012 Series C 5.25% Junior Subordinate Debentures due December 1, 2062",
        exchange : 'NYSE'
      },
      {
        symbol : 'DTT',
        name : "Deutsche Bank Cap Fdg Tr IX Guaranteed Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'DTZ',
        name : "DTE Energy Company 2011 Series I 6.50% Junior Subordinate Debentures due 2061",
        exchange : 'NYSE'
      },
      {
        symbol : 'DUA',
        name : "Deutsche Bank Cap Fdg Tr VIII 6.375% Tr Pfd Secs",
        exchange : 'NYSE'
      },
      {
        symbol : 'DUC',
        name : "Duff & Phelps Utility & Corporate Bond Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DUK',
        name : "Duke Energy Corporation (Holding Company) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DUKH',
        name : "Duke Energy Corporation 5.125% Junior Subordinated Debentures due 2073",
        exchange : 'NYSE'
      },
      {
        symbol : 'DV',
        name : "DeVry Education Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DVA',
        name : "DaVita HealthCare Partners Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DVD',
        name : "Dover Motorsports, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DVN',
        name : "Devon Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DW',
        name : "Drew Industries Incorporated Common Stock ($0.01 Par Value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'DWRE',
        name : "DEMANDWARE, INC. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DX',
        name : "Dynex Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DX$A',
        name : "Dynex Capital, Inc. Preferred Stock Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'DX$B',
        name : "Dynex Capital, Inc. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'DXB',
        name : "Deutsche Bk Contingent Cap TR II Tr Pfd Sec",
        exchange : 'NYSE'
      },
      {
        symbol : 'DY',
        name : "Dycom Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DYN',
        name : "Dynegy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'DYN$A',
        name : "Dynegy Inc. Mandatory Preferred Convertible Series A%",
        exchange : 'NYSE'
      },
      {
        symbol : 'DYN.W',
        name : "Dynegy Inc. Warrant expiring October 2, 2017",
        exchange : 'NYSE'
      },
      {
        symbol : 'E',
        name : "ENI S.p.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EAA',
        name : "Entergy Arkansas, Inc. First Mortgage Bonds, 5.75% Series Due November 1, 2040",
        exchange : 'NYSE'
      },
      {
        symbol : 'EAB',
        name : "Entergy Arkansas, Inc. First Mortgage Bonds, 4.90% Series Due December 1, 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'EAE',
        name : "Entergy Arkansas, Inc. First Mortgage Bonds, 4.75% Series due June 1, 2063",
        exchange : 'NYSE'
      },
      {
        symbol : 'EARN',
        name : "Ellington Residential Mortgage REIT Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EAT',
        name : "Brinker International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EBF',
        name : "Ennis, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EBR',
        name : "Centrais Elc Braz Pfb B Elbras American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'EBR.B',
        name : "Centrais Elc Braz Pfb B Elbras American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'EBS',
        name : "Emergent Biosolutions, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EC',
        name : "Ecopetrol S.A. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ECA',
        name : "Encana Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'ECC',
        name : "Eagle Point Credit Company Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ECL',
        name : "Ecolab Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ECOM',
        name : "ChannelAdvisor Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ECR',
        name : "Eclipse Resources Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ECT',
        name : "ECA Marcellus Trust I Common Units of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'ED',
        name : "Consolidated Edison, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EDD',
        name : "Morgan Stanley Emerging Markets Domestic Debt Fund, Inc. Morgan Stanley Emerging Markets Domestic Debt Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EDE',
        name : "Empire District Electric Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EDF',
        name : "Stone Harbor Emerging Markets Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EDI',
        name : "Stone Harbor Emerging Markets Total Income Fund Common Shares of Beneficial Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'EDN',
        name : "Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'EDR',
        name : "Education Realty Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EDU',
        name : "New Oriental Education & Technology Group, Inc. Sponsored ADR representing 1 Ordinary Share (Cayman Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'EE',
        name : "El Paso Electric Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EEA',
        name : "The European Equity Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EEP',
        name : "Enbridge Energy, L.P. Class A Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'EEQ',
        name : "Enbridge Energy Management LLC Shares repstg limited liability company interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'EFC',
        name : "Ellington Financial LLC Common Shares representing Limitied Liability Company Interests, no par valu",
        exchange : 'NYSE'
      },
      {
        symbol : 'EFF',
        name : "Eaton vance Floating",
        exchange : 'NYSE'
      },
      {
        symbol : 'EFM',
        name : "Entergy Mississippi, Inc. First Mortgage Bonds, 6.20% Series due April 15, 2040",
        exchange : 'NYSE'
      },
      {
        symbol : 'EFR',
        name : "Eaton Vance Senior Floating",
        exchange : 'NYSE'
      },
      {
        symbol : 'EFT',
        name : "Eaton Vance Floating Rate Income Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EFX',
        name : "Equifax, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EGF',
        name : "Blackrock Enhanced Government Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EGL',
        name : "Engility Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EGN',
        name : "Energen Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EGO',
        name : "Eldorado Gold Corporation Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'EGP',
        name : "EastGroup Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EGY',
        name : "Vaalco Energy Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EHI',
        name : "Western Asset Global High Income Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EHIC',
        name : "eHi Car Services Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'EIG',
        name : "Employers Holdings Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EIX',
        name : "Edison International Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EJ',
        name : "E",
        exchange : 'NYSE'
      },
      {
        symbol : 'EL',
        name : "Estee Lauder Companies, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELA',
        name : "Entergy Louisiana, LLC First Mortgage Bonds, 5.875% Series due June 15, 2041",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELB',
        name : "Entergy Louisiana, Inc. 6.0% Series Due March 15, 2040",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELJ',
        name : "Entergy Louisiana, Inc. First Mortgage Bonds, 5.25% Series due July 1, 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELLI',
        name : "Ellie Mae, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELP',
        name : "Companhia Paranaense de Energia (COPEL) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELS',
        name : "Equity Lifestyle Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELS$C',
        name : "Equity Lifestyle Properties, Inc. Depositary Shares each representing 1/100th of a share of 6.75% Series C Cumulative Redeemable Perpetual Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELU',
        name : "Entergy Louisiana, Inc. First Mortgage Bonds, 4.70% Series due June 1, 2063",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELX',
        name : "Emulex Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ELY',
        name : "Callaway Golf Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMC',
        name : "EMC Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMD',
        name : "Western Asset Emerging Markets Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EME',
        name : "EMCOR Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMES',
        name : "Emerge Energy Services LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMF',
        name : "Templeton Emerging Markets Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMN',
        name : "Eastman Chemical Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMO',
        name : "ClearBridge Energy MLP Opportunity Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMQ',
        name : "Entergy Mississippi, Inc. 1st Mtg Bds",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMR',
        name : "Emerson Electric Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EMZ',
        name : "Entergy Mississippi, Inc. First Mortgage Bonds, 6.0% Series due May 1, 2051",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENB',
        name : "Enbridge Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENBL',
        name : "Enable Midstream Partners, LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENH',
        name : "Endurance Specialty Holdings Ltd Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENH$A',
        name : "Endurance Specialty Holdings Ltd Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENH$B',
        name : "Endurance Specialty Holdings Ltd PFD SER B (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENI',
        name : "Enersis S A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENJ',
        name : "Entergy New Orleans, Inc. First Mortgage Bonds, 5.0% Series due December 1, 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENL',
        name : "Reed Elsevier NV American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENLC',
        name : "EnLink Midstream, LLC Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENLK',
        name : "EnLink Midstream Partners, LP Common Units Representing Limited Partnership Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENR',
        name : "Energizer Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENS',
        name : "Enersys Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENV',
        name : "Envestnet, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENVA',
        name : "Enova International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ENZ',
        name : "Enzo Biochem, Inc. Common Stock ($0.01 Par Value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'EOC',
        name : "Empresa Nacional de Electricidad S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EOD',
        name : "Wells Fargo Advantage Global Dividend Opportunity Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'EOG',
        name : "EOG Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EOI',
        name : "Eaton Vance Enhance Equity Income Fund Eaton Vance Enhanced Equity Income Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EOS',
        name : "Eaton Vance Enhance Equity Income Fund II Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EOT',
        name : "Eaton Vance Municipal Income Trust EATON VANCE NATIONAL MUNICIPAL OPPORTUNITIES TRUST",
        exchange : 'NYSE'
      },
      {
        symbol : 'EP$C',
        name : "El Paso Corporation Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EPAM',
        name : "EPAM Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EPD',
        name : "Enterprise Products Partners L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EPE',
        name : "EP Energy Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EPR',
        name : "EPR Properties Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EPR$C',
        name : "EPR Properties 5.75% Series C Cumulative Convertible Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'EPR$E',
        name : "EPR Properties Series E Cumulative Conv Pfd Shs Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'EPR$F',
        name : "EPR Properties Pfd Ser F",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQC',
        name : "Equity Commonwealth Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQC$D',
        name : "Equity Commonwealth 6.50% Pfd Conv Shs Ser D",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQC$E',
        name : "Equity Commonwealth 7.25% Series E Cumulative Redeemable Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQCO',
        name : "Equity Commonwealth 5.75% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQM',
        name : "EQT Midstream Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQR',
        name : "Equity Residential Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQS',
        name : "Equus Total Return, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQT',
        name : "EQT Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EQY',
        name : "Equity One, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ERA',
        name : "Era Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ERF',
        name : "Enerplus Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ERJ',
        name : "Embraer S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EROS',
        name : "Eros International PLC A Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESD',
        name : "Western Asset Emerging Markets Debt Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESE',
        name : "ESCO Technologies Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESI',
        name : "ITT Educational Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESL',
        name : "Esterline Technologies Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESNT',
        name : "Essent Group Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESRT',
        name : "Empire State Realty Trust, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESS',
        name : "Essex Property Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESS$H',
        name : "Essex Property Trust, Inc. 7.125% Series H Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ESV',
        name : "Ensco plc Class A Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETB',
        name : "Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETE',
        name : "Energy Transfer Equity, L.P. Energy Transfer Equity, L.P. Common Units representing Limited Partnership interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETG',
        name : "Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETH',
        name : "Ethan Allen Interiors Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETJ',
        name : "Eaton Vance Risk",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETM',
        name : "Entercom Communications Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETN',
        name : "Eaton Corporation, PLC Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETO',
        name : "Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETP',
        name : "Energy Transfer Partners, L.P. ENERGY TRANSFER PARNTERS",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETR',
        name : "Entergy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETV',
        name : "Eaton Vance Corporation Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETW',
        name : "Eaton Vance Corporation Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETX',
        name : "Eaton Vance Municipal Income Term Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'ETY',
        name : "Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'EV',
        name : "Eaton Vance Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVC',
        name : "Entravision Communications Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVDY',
        name : "Everyday Health, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVER',
        name : "EverBank Financial Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVER$A',
        name : "EverBank Financial Corp. Depositary Shares Representing 1/1000th Perpetual Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVF',
        name : "Eaton Vance Senior Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVG',
        name : "Eaton Vance Short Diversified Income Fund Eaton Vance Short Duration Diversified Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVGN',
        name : "Evogene Ltd Ordinary shares (Israel)",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVHC',
        name : "Envision Healthcare Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVN',
        name : "Eaton Vance Municipal Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVR',
        name : "Evercore Partners Inc Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVT',
        name : "Eaton Vance Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'EVTC',
        name : "Evertec, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EW',
        name : "Edwards Lifesciences Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXAM',
        name : "ExamWorks Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXAR',
        name : "Exar Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXC',
        name : "Exelon Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXCU',
        name : "Exelon Corp. Conv Unit",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXD',
        name : "Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXG',
        name : "Eaton Vance Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXH',
        name : "Exterran Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXK',
        name : "Endeavour Silver Corporation Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXL',
        name : "Excel Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXL$B',
        name : "Excel Trust, Inc. 8.125% Series B Cumulative Redeemable Preferred Stock, $0.01 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXP',
        name : "Eagle Materials Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXPR',
        name : "Express, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EXR',
        name : "Extra Space Storage Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'EZT',
        name : "Entergy Texas Inc First Mortgage Bonds 5.625% Series due June 1, 2064",
        exchange : 'NYSE'
      },
      {
        symbol : 'F',
        name : "Ford Motor Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FAC',
        name : "First Acceptance Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'FAF',
        name : "First American Corporation (New) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FAM',
        name : "First Trust/Aberdeen Global Opportunity Income Fund First Trust/Aberdeen Global Opportunity Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FAV',
        name : "First Trust Dividend and Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FBC',
        name : "Flagstar Bancorp, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FBHS',
        name : "Fortune Brands Home & Security, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FBP',
        name : "First BanCorp. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FBR',
        name : "Fibria Celulose S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'FBS$A',
        name : "First Preferred Cap Tr Iv First Preferred Capital Trust IV 8.15% Cum Trust Pfd Sec",
        exchange : 'NYSE'
      },
      {
        symbol : 'FC',
        name : "Franklin Covey Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCAM',
        name : "Fiat Chrysler Automobiles N.V. Mandatory Convertible Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCAU',
        name : "Fiat Chrysler Automobiles N.V. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCB',
        name : "FCB Financial Holdings, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCE.A',
        name : "Forest City Enterprises, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCE.B',
        name : "Forest City Enterprises, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCF',
        name : "First Commonwealth Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCH',
        name : "FelCor Lodging Trust Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCH$A',
        name : "FelCor Lodging Trust Incorporated Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCH$C',
        name : "FelCor Lodging Trust Incorporated Dep Shares Representing 1/100 Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCN',
        name : "FTI Consulting, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCT',
        name : "First Trust Senior Floating Rate Income Fund II Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FCX',
        name : "Freeport",
        exchange : 'NYSE'
      },
      {
        symbol : 'FDI',
        name : "Fort Dearborn Income Securities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FDO',
        name : "Family Dollar Stores, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FDP',
        name : "Fresh Del Monte Produce, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FDS',
        name : "FactSet Research Systems Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FDX',
        name : "FedEx Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FE',
        name : "FirstEnergy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FEI',
        name : "First Trust MLP and Energy Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FELP',
        name : "Foresight Energy LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'FENG',
        name : "Phoenix New Media Limited American Depositary Shares, each representing 8 Class A ordinary shares.",
        exchange : 'NYSE'
      },
      {
        symbol : 'FEO',
        name : "First Trust/Aberdeen Emerging Opportunity Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FET',
        name : "Forum Energy Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FF',
        name : "FutureFuel Corp.  Common shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FFA',
        name : "First Trust Enhanced Equity Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'FFC',
        name : "Flaherty & Crumrine Preferred Securities Income Fund Incorporated",
        exchange : 'NYSE'
      },
      {
        symbol : 'FFG',
        name : "FBL Financial Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FGB',
        name : "First Trust Specialty Finance and Financial Opportunities Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'FGL',
        name : "Fidelity & Guaranty Life Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FGP',
        name : "Ferrellgas Partners, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FHN',
        name : "First Horizon National Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FHN$A',
        name : "First Horizon National Corporation Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FHY',
        name : "First Trust Strategic High Income Fund II First Trust Strategic High Income Fund II Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FI',
        name : "Frank's International N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FICO',
        name : "Fair Isaac Corproation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FIF',
        name : "First Trust Energy Infrastructure Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FIG',
        name : "Fortress Investment Group LLC Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FII',
        name : "Federated Investors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FIS',
        name : "Fidelity National Information Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FIX',
        name : "Comfort Systems USA, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FL',
        name : "Foot Locker, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'FLC',
        name : "Flaherty & Crumrine Total Return Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FLO',
        name : "Flowers Foods, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FLR',
        name : "Fluor Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FLS',
        name : "Flowserve Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FLT',
        name : "FleetCor Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FLTX',
        name : "Fleetmatics Group PLC Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FLY',
        name : "Fly Leasing Limited",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMC',
        name : "FMC Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMD',
        name : "First Marblehead Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMER$A',
        name : "FirstMerit Corporation Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMN',
        name : "Federated Premier Municipal Income Fund Federated Premier Municipal Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMO',
        name : "Fiduciary/Claymore MLP Opportunity Fund Fiduciary/Claymore MLP Opportunity Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMS',
        name : "Fresenius Medical Care AG Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMSA',
        name : "FMSA Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMX',
        name : "Fomento Economico Mexicano S.A.B. de C.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FMY',
        name : "First Trust Motgage Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FN',
        name : "Fabrinet Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FNB',
        name : "F.N.B. Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FNB$E',
        name : "F.N.B. Corporation Depositary Shares, each representing a 1/40th interest in a share of Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'FNF',
        name : "FNF Group of Fidelity National Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FNFG$B',
        name : "First Niagara Financial Group Inc. PFD NON CUM SER B FXD/FLTG",
        exchange : 'NYSE'
      },
      {
        symbol : 'FNFV',
        name : "FNFV Group of Fidelity National Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FNV',
        name : "Franco",
        exchange : 'NYSE'
      },
      {
        symbol : 'FOE',
        name : "Ferro Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FOF',
        name : "Cohen & Steers Closed",
        exchange : 'NYSE'
      },
      {
        symbol : 'FOR',
        name : "Forestar Group Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FPF',
        name : "First Trust Intermediate Duration Preferred & Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FPL',
        name : "First Trust New Opportunities MLP & Energy Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FPO',
        name : "First Potomac Realty Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FPO$A',
        name : "First Potomac Realty Trust CUMULATIVE REDEEMABLE PFD PERPETUAL SER A",
        exchange : 'NYSE'
      },
      {
        symbol : 'FPT',
        name : "Federated Premier Intermediate Municipal Income Fund Federated Premier Intermediate Municipal Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'FR',
        name : "First Industrial Realty Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRA',
        name : "Blackrock Floating Rate Income Strategies Fund Inc  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRC',
        name : "FIRST REPUBLIC BANK Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRC$A',
        name : "First Republicbank Corp DEP SHS REPSTG 1/40TH PERP PFD SER A",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRC$B',
        name : "First Republic Bank Depositary Shares Representing 1/40th Perpetual Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRC$C',
        name : "FIRST REPUBLIC BANK Dep Shs Repstg 1/40th Perp Pfd Ser C",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRC$D',
        name : "First Republic Bank San Francisco California Depositary Shares Representing 1/40th Perpetual Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRC$E',
        name : "FIRST REPUBLIC BANK Depositary Shs Repstg 1/40th Perp Pfd Ser E Fixed To Fltg (RATE)",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRM',
        name : "Furmanite Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRO',
        name : "Frontline Ltd. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FRT',
        name : "Federal Realty Investment Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FSCE',
        name : "Fifth Street Finance Corp. 5.875% Senior Notes due 2024",
        exchange : 'NYSE'
      },
      {
        symbol : 'FSD',
        name : "First Trust High Income Long Short Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FSIC',
        name : "FS Investment Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FSL',
        name : "Freescale Semiconductor, Ltd Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'FSM',
        name : "Fortuna Silver Mines Inc Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'FSS',
        name : "Federal Signal Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FT',
        name : "Franklin Universal Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FTI',
        name : "FMC Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FTK',
        name : "Flotek Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FTT',
        name : "Federated Enhanced Treasury Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'FUL',
        name : "H. B. Fuller Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FUN',
        name : "Cedar Fair, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FUR',
        name : "Winthrop Realty Trust New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FVE',
        name : "Five Star Quality Care, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'FXCM',
        name : "FXCM Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'G',
        name : "Genpact Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GAB',
        name : "Gabelli Equity Trust, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GAB$D',
        name : "Gabelli Equity Trust, Inc. (The) Preferred Stock Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'GAB$G',
        name : "Gabelli Equity Trust, Inc. (The) Series G Cumulative Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GAB$H',
        name : "Gabelli Equity Trust, Inc. (The) Pfd Ser H",
        exchange : 'NYSE'
      },
      {
        symbol : 'GAM',
        name : "General American Investors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GAM$B',
        name : "General American Investors Company, Inc. Cumulative Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GAS',
        name : "AGL Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GB',
        name : "Greatbatch, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GBAB',
        name : "Guggenheim Build America Bonds Managed Duration Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GBL',
        name : "Gamco Investors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GBX',
        name : "Greenbrier Companies, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GCA',
        name : "Global Cash Access Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GCAP',
        name : "GAIN Capital Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GCH',
        name : "Aberdeen Greater China Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GCI',
        name : "Gannett Co., Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GCO',
        name : "Genesco Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GCV',
        name : "Gabelli Convertible and Income Securities Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GCV$B',
        name : "Gabelli Convertible and Income Securities Fund, Inc. (The) Series B 6.00% Cumulative Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GD',
        name : "General Dynamics Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDF',
        name : "Western Asset Global Partners Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDL',
        name : "GDL Fund, The Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDL$B',
        name : "The GDL Fund Series B Cumulative Puttable and Callable Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDO',
        name : "Western Asset Global Corporate Defined Opportunity Fund Inc. Western Asset Global Corporate Defined Opportunity Fund Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDOT',
        name : "Green Dot Corporation Class A Common Stock, $0.001 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDP',
        name : "Goodrich Petroleum Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDP$C',
        name : "Goodrich Petroleum Corporation Depositary Shares Representing 1/1000th Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDP$D',
        name : "Goodrich Petroleum Corporation Depositary Shares Representing 1/1000th Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDV',
        name : "Gabelli Dividend & Income Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDV$A',
        name : "Gabelli Dividend & Income Tr Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'GDV$D',
        name : "Gabelli Dividend Pfd Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'GE',
        name : "General Electric Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEB',
        name : "General Electric Company 4.875% Notes due October 15, 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEF',
        name : "Greif Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEF.B',
        name : "Greif, Inc. Corporation Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEH',
        name : "General Electric Capital Corporation 4.876% Notes due January 29, 2053",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEK',
        name : "General Electric Capital Corporation 4.70% Notes due May 16, 2053",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEL',
        name : "Genesis Energy, L.P. Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEO',
        name : "Geo Group Inc (The) REIT",
        exchange : 'NYSE'
      },
      {
        symbol : 'GEQ',
        name : "Guggenheim Equal Weight Enhanced Equity Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GER',
        name : "Goldman Sachs MLP Energy Renaissance Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'GES',
        name : "Guess?, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GF',
        name : "New Germany Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GFA',
        name : "Gafisa SA Gafisa S.A. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GFF',
        name : "Griffon Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GFI',
        name : "Gold Fields Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GFIG',
        name : "GFI Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GFY',
        name : "Western Asset Variable Rate Strategic Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GG',
        name : "Goldcorp Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGB',
        name : "Gerdau S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGE',
        name : "Guggenheim Enhanced Equity Strategy Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGG',
        name : "Graco Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGM',
        name : "Guggenheim Credit Allocation Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGP',
        name : "General Growth Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGP$A',
        name : "General Growth Properties, Inc. Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGT',
        name : "Gabelli Multi",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGT$B',
        name : "Gabelli Multi",
        exchange : 'NYSE'
      },
      {
        symbol : 'GGZ',
        name : "Gabelli Global Small and Mid Cap Value Trust (The) Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GHC',
        name : "Graham Holdings Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GHI',
        name : "Global High Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GHL',
        name : "Greenhill & Co., Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GHM',
        name : "Graham Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GHY',
        name : "Prudential Global Short Duration High Yield Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GIB',
        name : "CGI Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GIL',
        name : "Gildan Activewear, Inc. Class A Sub. Vot. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GIM',
        name : "Templeton Global Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GIMO',
        name : "Gigamon Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GIS',
        name : "General Mills, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GJH',
        name : "Synthetic Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'GJO',
        name : "Synthetic Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'GJP',
        name : "Synthetic Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'GJR',
        name : "Synthetic Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'GJS',
        name : "Goldman Sachs Group Securities STRATS Trust for Goldman Sachs Group Securities, Series 2006",
        exchange : 'NYSE'
      },
      {
        symbol : 'GJT',
        name : "Synthetic Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'GJV',
        name : "Synthetic Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLF',
        name : "GulfMark Offshore, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLOB',
        name : "Globant S.A. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLOG',
        name : "GasLog Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLOP',
        name : "GasLog Partners LP Common Units representing limited partnership interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLP',
        name : "Global Partners LP Global Partners LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLPW',
        name : "Global Power Equipment Group Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLT',
        name : "Glatfelter Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GLW',
        name : "Corning Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GM',
        name : "General Motors Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GM.A',
        name : "General Motors Company Warrant (Expires 07/10/2016)",
        exchange : 'NYSE'
      },
      {
        symbol : 'GM.B',
        name : "General Motors Company Warrant (Expires 07/10/2019)",
        exchange : 'NYSE'
      },
      {
        symbol : 'GM.C',
        name : "General Motors Company Warrants (expiring December 31, 2015)",
        exchange : 'NYSE'
      },
      {
        symbol : 'GME',
        name : "Gamestop Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GMED',
        name : "Globus Medical, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GMK',
        name : "GRUMA, S.A.B de C.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GMT',
        name : "GATX Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GMZ',
        name : "Goldman Sachs MLP Income Opportunities Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'GNC',
        name : "GNC Holdings, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GNE',
        name : "Genie Energy Ltd. Class B Common Stock Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GNE$A',
        name : "Genie Energy Ltd. Series 2012",
        exchange : 'NYSE'
      },
      {
        symbol : 'GNI',
        name : "Great Northern Iron Ore Properties Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GNRC',
        name : "Generac Holdlings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GNT',
        name : "GAMCO Natural Resources, Gold & Income Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'GNW',
        name : "Genworth Financial Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GOF',
        name : "Guggenheim Strategic Opportunities Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GOL',
        name : "Gol Linhas Aereas Inteligentes S.A. Sponsored ADR representing Pfd Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GOV',
        name : "Government Properties Income Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPC',
        name : "Genuine Parts Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPE$A',
        name : "Georgia Power Company Georgia Power Company 6 1/8% Series Class A Preferred Stock, Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPI',
        name : "Group 1 Automotive, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPK',
        name : "Graphic Packaging Holding Company",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPM',
        name : "Guggenheim Enhanced Equity Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPN',
        name : "Global Payments Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPRK',
        name : "Geopark Ltd Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPS',
        name : "Gap, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPT',
        name : "Gramercy Property Trust Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPT$B',
        name : "Gramercy Property Trust Inc. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'GPX',
        name : "GP Strategies Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRA',
        name : "W.R. Grace & Co. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRAM',
        name : "Grana y Montero S.A.A. American Depositary Shares, each representing five Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRO',
        name : "Agria Corporation American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRP.U',
        name : "Granite Real Estate Inc. Stapled Units, each consisting of one unit of Granite Real Estate Trust and one common share of Granite REIT Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRR',
        name : "Asia Tigers Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRT',
        name : "Glimcher Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRT$G',
        name : "Glimcher Realty Trust Preferred Shares of Beneficial Interest Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRT$H',
        name : "Glimcher Reatly Tr Pfd Sh Ben Int Ser H %",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRT$I',
        name : "Glimcher Realty Trust 6.875% Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRUB',
        name : "GrubHub Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRX',
        name : "The Gabelli Healthcare & Wellness Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRX$A',
        name : "Gabelli Healthcare PFD SER A",
        exchange : 'NYSE'
      },
      {
        symbol : 'GRX$B',
        name : "Gabelli Healthcare Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS',
        name : "Goldman Sachs Group, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS$A',
        name : "Goldman Sachs Group, Inc. (The) Depositary Shares each representing 1/1000th Interest in a Share of Floating Rate Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS$B',
        name : "Goldman Sachs Group, Inc. (The) Depositary Share repstg 1/1000th Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS$C',
        name : "Goldman Sachs Group, Inc. (The) Depositary Share repstg 1/1000th Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS$D',
        name : "Goldman Sachs Group, Inc. (The) Dep Shs repstg 1/1000 Pfd Ser D Fltg",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS$I',
        name : "Goldman Sachs Group, Inc. (The) Perpetual Preferred Series I",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS$J',
        name : "Goldman Sachs Group Inc Depositary Shs Repstg 1/1000th Pfd Ser J Fixed to Fltg Rate",
        exchange : 'NYSE'
      },
      {
        symbol : 'GS$K',
        name : "Goldman Sachs Group, Inc. (The) Dep Shs Repstg 1/1000 Int Sh Fxd/Fltg Non Cum Pfd Stk Ser K",
        exchange : 'NYSE'
      },
      {
        symbol : 'GSF',
        name : "Goldman Sachs Group, Inc. (The) 6.125% Notes due 2060",
        exchange : 'NYSE'
      },
      {
        symbol : 'GSH',
        name : "Guangshen Railway Company Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GSI',
        name : "General Steel Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GSJ',
        name : "Goldman Sachs Group, Inc. (The) 6.50% Notes due 2061",
        exchange : 'NYSE'
      },
      {
        symbol : 'GSK',
        name : "GlaxoSmithKline PLC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GSL',
        name : "Global Ship Lease Inc New Class A Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GSL$B',
        name : "Global Ship Lease, Inc. Depository Shares Representing 1/100th Perpetual Preferred Series B% (Marshall Island)",
        exchange : 'NYSE'
      },
      {
        symbol : 'GTI',
        name : "GrafTech International Ltd (Holding Co.) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GTN',
        name : "Gray Communications Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GTN.A',
        name : "Gray Television, Inc. CLass A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GTS',
        name : "Triple",
        exchange : 'NYSE'
      },
      {
        symbol : 'GTT',
        name : "GTT Communications, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GTY',
        name : "Getty Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GUA',
        name : "Gulf Power Company Series 2011A 5.75% Senior Notes due June 1, 2051",
        exchange : 'NYSE'
      },
      {
        symbol : 'GUT',
        name : "Gabelli Utility Trust (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GUT$A',
        name : "Gabelli Utility Trust (The) 5.625% Series A Cumulative Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'GVA',
        name : "Granite Construction Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GWB',
        name : "Great Western Bancorp, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GWR',
        name : "Genesee & Wyoming Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GWRE',
        name : "Guidewire Software, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GWRU',
        name : "Genesee & Wyoming, Inc. Tangible Equity Unit",
        exchange : 'NYSE'
      },
      {
        symbol : 'GWW',
        name : "W.W. Grainger, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GXP',
        name : "Great Plains Energy Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GXP$A',
        name : "Great Plains Energy Incorporated Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GXP$D',
        name : "Great Plains Energy Incorporated Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GXP$E',
        name : "Great Plains Energy Incorporated Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GY',
        name : "GenCorp Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'GYB',
        name : "CABCO Series 2004",
        exchange : 'NYSE'
      },
      {
        symbol : 'GYC',
        name : "Corporate Asset Backed Corp CABCO Corporate Asset Backed Corporation CABCO Series 2004",
        exchange : 'NYSE'
      },
      {
        symbol : 'GZT',
        name : "Gazit",
        exchange : 'NYSE'
      },
      {
        symbol : 'H',
        name : "Hyatt Hotels Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HAE',
        name : "Haemonetics Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HAL',
        name : "Halliburton Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HAR',
        name : "Harman International Industries, Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HASI',
        name : "Hannon Armstrong Sustainable Infrastructure Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HBI',
        name : "Hanesbrands Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HBM',
        name : "Hudbay Minerals Inc Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'HBM.W',
        name : "HudBay Minerals Inc Warrants Expiring 07/20/2018 (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCA',
        name : "HCA Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCC',
        name : "HCC Insurance Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCI',
        name : "HCI Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCJ',
        name : "HCI Group, Inc. 8% Senior Notes due 2020",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCLP',
        name : "Hi",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCN',
        name : "Health Care REIT, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCN$I',
        name : "Health Care REIT, Inc. PFD PERPETUAL CONV SER I",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCN$J',
        name : "HEALTH CARE REIT INC Preferred Stock 6.5% PFD SERIES J",
        exchange : 'NYSE'
      },
      {
        symbol : 'HCP',
        name : "HCP, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HD',
        name : "Home Depot, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HDB',
        name : "HDFC Bank Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HDY',
        name : "HyperDynamics Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HE',
        name : "Hawaiian Electric Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HE$U',
        name : "Hawaiian Electric Industries, Inc. 6.5 % Cum QUIPS",
        exchange : 'NYSE'
      },
      {
        symbol : 'HEI',
        name : "Heico Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HEI.A',
        name : "Heico Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HELI',
        name : "CHC Group Ltd. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'HEP',
        name : "Holly Energy Partners, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HEQ',
        name : "John Hancock Hedged Equity & Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'HES',
        name : "Hess Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HF',
        name : "HFF, Inc. Common Stock, Class A",
        exchange : 'NYSE'
      },
      {
        symbol : 'HFC',
        name : "HollyFrontier Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HGG',
        name : "HHGregg, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HGH',
        name : "Hartford Financial Services Group, Inc. (The) 7.875% Fixed to Floating Rate Junior Subordinated Debentures due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'HGR',
        name : "Hanger, Inc. Common Stock ($0.01 Par Value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'HGT',
        name : "Hugoton Royalty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HHC',
        name : "Howard Hughes Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HHS',
        name : "Harte",
        exchange : 'NYSE'
      },
      {
        symbol : 'HHY',
        name : "Brookfield High Income Fund Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'HI',
        name : "Hillenbrand Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIE',
        name : "Miller/Howard High Income Equity Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIG',
        name : "Hartford Financial Services Group, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIG.W',
        name : "Hartford Financial Services Group, Inc. (The) Warrants expiring June 26, 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'HII',
        name : "Huntington Ingalls Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIL',
        name : "Hill International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIO',
        name : "Western Asset High Income Opportunity Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIVE',
        name : "Aerohive Networks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIW',
        name : "Highwoods Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HIX',
        name : "Western Asset High Income Fund II Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HJV',
        name : "MS Structured Asset Corp MS Structured Asset Corp. SATURNS J.C. Penney Company, Inc. Debenture Backed Series 2007",
        exchange : 'NYSE'
      },
      {
        symbol : 'HK',
        name : "Halcon Resources Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HL',
        name : "Hecla Mining Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HL$B',
        name : "Hecla Mining Company Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HLF',
        name : "Herbalife Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HLS',
        name : "HealthSouth Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HLT',
        name : "Hilton Worldwide Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HLX',
        name : "Helix Energy Solutions Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HMC',
        name : "Honda Motor Company, Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HME',
        name : "Home Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HMLP',
        name : "Hoegh LNG Partners LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'HMN',
        name : "Horace Mann Educators Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HMY',
        name : "Harmony Gold Mining Company Limited",
        exchange : 'NYSE'
      },
      {
        symbol : 'HNI',
        name : "HNI Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HNP',
        name : "Huaneng Power Intl Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HNR',
        name : "Harvest Natural Resources Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'HNT',
        name : "Health Net Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HOG',
        name : "Harley",
        exchange : 'NYSE'
      },
      {
        symbol : 'HON',
        name : "Honeywell International Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HOS',
        name : "Hornbeck Offshore Services Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HOT',
        name : "Starwood Hotels & Resorts Worldwide, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HOV',
        name : "Hovnanian Enterprises, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HP',
        name : "Helmerich & Payne, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPF',
        name : "John Hancock Pfd Income Fund II Pfd Income Fund II",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPI',
        name : "John Hancock Preferred Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPP',
        name : "Hudson Pacific Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPP$B',
        name : "Hudson Pacific Properties, Inc. 8.375% Series B Cumulative Redeemable Preferred shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPQ',
        name : "Hewlett",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPS',
        name : "John Hancock Preferred Income Fund III Preferred Income Fund III",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPT',
        name : "Hospitality Properites Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPT$D',
        name : "Hospitality Properties Trust Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HPY',
        name : "Heartland Payment Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HQH',
        name : "Tekla Healthcare Investors Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HQL',
        name : "TeklaLife Sciences Investors Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HR',
        name : "Healthcare Realty Trust Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HRB',
        name : "H&R Block, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HRC',
        name : "Hill",
        exchange : 'NYSE'
      },
      {
        symbol : 'HRG',
        name : "Harbinger Group Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HRL',
        name : "Hormel Foods Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HRS',
        name : "Harris Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HRTG',
        name : "Heritage Insurance Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSBC',
        name : "HSBC Holdings, plc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSBC$A',
        name : "HSBC Holdings, plc. ADR SER A REP 1/40 PFD SER A",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSC',
        name : "Harsco Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSEA',
        name : "HSBC Holdings, plc. Perpetual Sub Cap Secs",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSEB',
        name : "HSBC Holdings plc PERP SUB CAP SECS EXCH PREF SHS SER 2 (United Kingdom)",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSFC$B',
        name : "HSBC Finance Corp Dep. Shares reptsg 1/40 Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSP',
        name : "Hospira Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'HST',
        name : "Host Hotels & Resorts, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HSY',
        name : "The Hershey Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HT',
        name : "Hersha Hospitality Trust Class A Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'HT$B',
        name : "Hersha Hospitality Trust PFD SER B",
        exchange : 'NYSE'
      },
      {
        symbol : 'HT$C',
        name : "Hersha Hospitality Trust 6.875% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTA',
        name : "Healthcare Trust of America, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTD',
        name : "John Hancock Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTF',
        name : "Horizon Technology Finance Corporation 7.375% Senior Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTGC',
        name : "Hercules Technology Growth Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTGX',
        name : "Hercules Technology Growth Capital, Inc. 6.25% Notes due 2024",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTGY',
        name : "Hercules Technology Growth Capital, Inc. 7.00% Senior Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTGZ',
        name : "Hercules Technology Growth Capital, Inc. 7.00% Note due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTH',
        name : "Hilltop Holdings Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTR',
        name : "Brookfield Total Return Fund Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTS',
        name : "Hatteras Financial Corp Hatteras Financial Corp  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTS$A',
        name : "Hatteras Financial Corp Cum Redeemable Pfd Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTY',
        name : "John Hancock Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'HTZ',
        name : "Hertz Global Holdings, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUB.A',
        name : "Hubbell Inc A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUB.B',
        name : "Hubbell Inc Common Stock Class B",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUBS',
        name : "HubSpot, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUM',
        name : "Humana Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUN',
        name : "Huntsman Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUSI$D',
        name : "HSBC USA, Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUSI$F',
        name : "HSBC USA, Inc. Preferred Series F Floating Rate",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUSI$G',
        name : "HSBC USA, Inc. Dep Shs repstg 1/40 Preferred Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUSI$H',
        name : "HSBC USA, Inc. Depositary Sh repstg 1/40th Preferred Series H",
        exchange : 'NYSE'
      },
      {
        symbol : 'HUSI$Z',
        name : "HSBC USA, Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HVB',
        name : "Hudson Valley Holding Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HVT',
        name : "Haverty Furniture Companies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HVT.A',
        name : "Haverty Furniture Companies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HW',
        name : "Headwaters Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HXL',
        name : "Hexcel Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HY',
        name : "Hyster",
        exchange : 'NYSE'
      },
      {
        symbol : 'HYB',
        name : "New America High Income Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HYF',
        name : "Managed High Yield Plus Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HYH',
        name : "Halyard Health, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HYI',
        name : "Western Asset High Yield Defined Opportunity Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HYT',
        name : "Blackrock Corporate High Yield Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'HZO',
        name : "MarineMax, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'I',
        name : "Intelsat S.A. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'I$A',
        name : "Intelsat S.A. Series A mandatory convefrtible junior non",
        exchange : 'NYSE'
      },
      {
        symbol : 'IAE',
        name : "Voya Asia Pacific High Dividend Equity Income Fund ING Asia Pacific High Dividend Equity Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IAG',
        name : "Iamgold Corporation Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'IBA',
        name : "Industrias Bachoco, S.A.B. de C.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IBM',
        name : "International Business Machines Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IBN',
        name : "ICICI Bank Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IBP',
        name : "Installed Building Products, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ICA',
        name : "Empresas Ica Soc Contrladora Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ICB',
        name : "MS Income Securities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ICD',
        name : "Independence Contract Drilling, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ICE',
        name : "Intercontinental Exchange Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ICL',
        name : "Israel Chemicals Limited Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'IDA',
        name : "IDACORP, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IDE',
        name : "Voya Infrastructure, Industrials and Materials Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IDG',
        name : "ING GROEP N V PREF CTF 7.3750% Perp Hybrid Cap Secs (Netherlands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'IDT',
        name : "IDT Corporation Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IEH',
        name : "Integrys Energy Group 6.00% Junior Subordinated Notes Due 2073",
        exchange : 'NYSE'
      },
      {
        symbol : 'IEX',
        name : "IDEX Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IFF',
        name : "Internationa Flavors & Fragrances, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IFN',
        name : "India Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IFT',
        name : "Imperial Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IGA',
        name : "Voya Global Advantage and Premium Opportunity Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IGD',
        name : "Voya Global Equity Dividend and Premium Opportunity Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'IGI',
        name : "Western Asset Investment Grade Defined Opportunity Trust Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IGR',
        name : "CBRE Clarion Global Real Estate Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IGT',
        name : "International Game Technology Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IHC',
        name : "Independence Holding Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IHD',
        name : "Voya Emerging Markets High Income Dividend Equity Fund Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'IHG',
        name : "Intercontinental Hotels Group American Depositary Shares (Each representing one Ordinary Share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'IHS',
        name : "IHS Inc. IHS Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IID',
        name : "Voya International High Dividend Equity Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IIF',
        name : "Morgan Stanley India Investment Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IIM',
        name : "Invesco Value Municipal Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IL',
        name : "IntraLinks Holdings, Inc. Common Stock $0.001 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'IM',
        name : "Ingram Micro Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IMAX',
        name : "Imax Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IMN',
        name : "Imation Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IMPR',
        name : "Imprivata, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IMPV',
        name : "Imperva, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IMS',
        name : "IMS Health Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INB',
        name : "Cohen & Steers Global Income Builder, Inc. Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IND',
        name : "ING Group, N.V. Perpetual Debt Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'INF',
        name : "Brookfield Global Listed Infrastructure Income Fund Closed End Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'INFY',
        name : "Infosys Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ING',
        name : "ING Group, N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INGR',
        name : "Ingredion Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INN',
        name : "Summit Hotel Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INN$A',
        name : "Summit Hotel Properties, Inc. 9.25% Series A Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INN$B',
        name : "Summit Hotel Properties, Inc. Pfd Ser B",
        exchange : 'NYSE'
      },
      {
        symbol : 'INN$C',
        name : "Summit Hotel Properties, Inc. 7.125% Series C Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INT',
        name : "World Fuel Services Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INVN',
        name : "InvenSense, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'INXN',
        name : "InterXion Holding N.V. Ordinary Shares (0.01 nominal value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'INZ',
        name : "Ing Groep NV Perpetual Debt Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'IO',
        name : "Ion Geophysical Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IOC',
        name : "InterOil Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'IP',
        name : "International Paper Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IPG',
        name : "Interpublic Group of Companies, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IPHI',
        name : "Inphi Corporation Common Stock $0.001 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'IPI',
        name : "Intrepid Potash, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IPL$D',
        name : "Interstate Power & Light Company Perp Prd Ser D",
        exchange : 'NYSE'
      },
      {
        symbol : 'IQI',
        name : "Invesco Quality Municipal Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IR',
        name : "Ingersoll",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRC',
        name : "Inland Real Estate Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRC$A',
        name : "Inland Real Estate Corporation 8.125% Series A Cumulative Redeemable Preferred Stock, $0.01 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRC$B',
        name : "Inland Real Estate Corporation Redeemable Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRE',
        name : "Governor and Company of the Bank of Ireland (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRET',
        name : "Investors Real Estate Trust Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRET$',
        name : "Investors Real Estate Trust Series A Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRET$B',
        name : "Investors Real Estate Trust 7.95% Series B Cumulative Redeemable Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRF',
        name : "International Rectifier Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRL',
        name : "New Ireland Fund, Inc (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRM',
        name : "Iron Mountain Incorporated (Delaware)Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRR',
        name : "Voya Natural Resources Equity Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IRS',
        name : "IRSA Inversiones Y Representaciones S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ISD',
        name : "Prudential Short Duration High Yield Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ISF',
        name : "ING Group, N.V. Perp Hybrid Cap Secs (Netherlands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ISG',
        name : "ING Group, N.V. Perpetual Dent Secs 6.125%",
        exchange : 'NYSE'
      },
      {
        symbol : 'ISH',
        name : "International Shipholding Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ISH$A',
        name : "International Shipholding Corporation Cumulative Redeemable Perpetual Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'ISH$B',
        name : "International Shipholding Corporation PERP PFD SER B",
        exchange : 'NYSE'
      },
      {
        symbol : 'ISP',
        name : "ING Groep NV 6.20% Perpetual Debt Securities (Netherlands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'IT',
        name : "Gartner, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ITC',
        name : "ITC Holdings Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ITG',
        name : "Investment Technology Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ITT',
        name : "ITT Corporation Common Stock New",
        exchange : 'NYSE'
      },
      {
        symbol : 'ITUB',
        name : "Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ITW',
        name : "Illinois Tool Works Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IVC',
        name : "Invacare Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IVH',
        name : "Ivy High Income Opportunities Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'IVR',
        name : "INVESCO MORTGAGE CAPITAL INC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IVR$A',
        name : "Invesco Mortgage Capital Inc. Pfd Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'IVR$B',
        name : "Invesco Mortgage Capital Inc. Preferred Series B Cum Fxd to Fltg",
        exchange : 'NYSE'
      },
      {
        symbol : 'IVZ',
        name : "Invesco Plc New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'IX',
        name : "Orix Corp Ads Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JAH',
        name : "Jarden Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JBK',
        name : "Lehman ABS 3.50 3.50% Adjustable Corp Backed Tr Certs GS Cap I",
        exchange : 'NYSE'
      },
      {
        symbol : 'JBL',
        name : "Jabil Circuit, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JBN',
        name : "Select Asset Inc. Select Asset Inc. on behalf of Corporate Backed Callable Trust Certificates, J.C. Penney Debenture Backed Series 2007",
        exchange : 'NYSE'
      },
      {
        symbol : 'JBR',
        name : "Select Asset Inc. Corporate Backed Callable Trust Certificates, J.C. Penney Debenture",
        exchange : 'NYSE'
      },
      {
        symbol : 'JBT',
        name : "John Bean Technologies Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JCE',
        name : "Nuveen Core Equity Alpha Fund Nuveen Core Equity Alpha Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JCI',
        name : "Johnson Controls, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JCP',
        name : "J.C. Penney Company, Inc. Holding Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JDD',
        name : "Nuveen Diversified Dividend and Income Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JE',
        name : "Just Energy Group, Inc. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'JEC',
        name : "Jacobs Engineering Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JEQ',
        name : "Aberdeen Japan Equity Fund, Inc.  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JFC',
        name : "JPMorgan China Region  Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JFR',
        name : "Nuveen Floating Rate Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JGH',
        name : "Nuveen Global High Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JGV',
        name : "Nuveen Global Equity Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'JGW',
        name : "J.G. Wentworth Company (The) Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JHI',
        name : "John Hancock Investors Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JHP',
        name : "Nuveen Quality Preferred Income Fund 3 Preferred Income 3",
        exchange : 'NYSE'
      },
      {
        symbol : 'JHS',
        name : "John Hancock Income Securities Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JHX',
        name : "James Hardie Industries plc American Depositary Shares (Ireland)",
        exchange : 'NYSE'
      },
      {
        symbol : 'JKS',
        name : "JinkoSolar Holding Company Limited American Depositary Shares (each representing 4 Common Shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'JLL',
        name : "Jones Lang LaSalle Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JLS',
        name : "Nuveen Mortgage Opportunity Term Fund Nuveen Mortgage Opportunity Term Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMEI',
        name : "Jumei International Holding Limited American Depositary Shares, each representing one Class A ordinary share",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMF',
        name : "Nuveen Energy MLP Total Return Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMI',
        name : "Javelin Mortgage Investment Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMLP',
        name : "Nuveen All Cap Energy MLP Opportunities Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMM',
        name : "Nuveen Multi",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMP',
        name : "JMP Group LLC Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMPB',
        name : "JMP Group Inc 8.00% Senior Notes due 2023",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMPC',
        name : "JMP Group Inc 7.25% Senior Notes due 2021",
        exchange : 'NYSE'
      },
      {
        symbol : 'JMT',
        name : "Nuveen Mortgage Opportunity Term Fund 2 Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JNJ',
        name : "Johnson & Johnson Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JNPR',
        name : "Juniper Networks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JNS',
        name : "Janus Capital Group, Inc. Cmn Stk",
        exchange : 'NYSE'
      },
      {
        symbol : 'JOE',
        name : "St. Joe Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JOF',
        name : "Japan Smaller Capitalization Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JONE',
        name : "Jones Energy, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JOY',
        name : "Joy Global Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPC',
        name : "Nuveen  Preferred Income Opportunities Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPEP',
        name : "JP Energy Partners LP Common units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPI',
        name : "Nuveen Preferred and Income Term Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPM',
        name : "JP Morgan Chase & Co. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPM$A',
        name : "J P Morgan Chase & Co Depositary Shs Repstg 1/400 Pfd Ser P",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPM$B',
        name : "JP Morgan Chase & Co Depositary Shares Representing 1/400th Preferred Series T",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPM$C',
        name : "JPMorgan Chase Capital XXIX 6.70% Capital Securities, Series CC",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPM$D',
        name : "JPMorgan Chase Bank N A London Branch Depositary Shs Repstg 1/400th Pfd Ser O",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPM$E',
        name : "J P Morgan Chase & Co Depository Shares Representing 1/400th Int Perp Pfd Ser W",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPM.W',
        name : "J P Morgan Chase & Co Warrant expiring October 28, 2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPS',
        name : "Nuveen Quality Preferred Income Fund 2 Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JPW',
        name : "Nuveen Flexible Investment Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JQC',
        name : "Nuveen Credit Strategies Income Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JRI',
        name : "Nuveen Real Asset Income and Growth Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JRN',
        name : "Journal Communications, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JRO',
        name : "Nuveen Floating Rate Income Opportuntiy Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JSD',
        name : "Nuveen Short Duration Credit Opportunities Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JTA',
        name : "Nuveen Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'JTD',
        name : "Nuveen Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'JTP',
        name : "Nuveen Quality Preferred Income Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'JW.A',
        name : "John Wiley & Sons, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JW.B',
        name : "John Wiley & Sons, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'JWN',
        name : "Nordstrom, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'K',
        name : "Kellogg Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KAI',
        name : "Kadant Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KAMN',
        name : "Kaman Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KAP',
        name : "KCAP Financial, Inc. 7.375% Senior Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'KAR',
        name : "KAR Auction Services, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KATE',
        name : "Kate Spade & Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KB',
        name : "KB Financial Group Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'KBH',
        name : "KB Home Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KBR',
        name : "KBR, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KCC',
        name : "Structured Products Corp. 8.20% Corporate Backed Trust Securities (CorTS)Issued by Provident Financial Trust I",
        exchange : 'NYSE'
      },
      {
        symbol : 'KCG',
        name : "KCG Holdings, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KED',
        name : "Kayne Anderson Energy Development Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEF',
        name : "Korea Equity Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEG',
        name : "Key Energy Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEM',
        name : "Kemet Corporation New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEN.V',
        name : "Kenon Holdings Ltd. Ordinary Shares When Issued",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEP',
        name : "Korea Electric Power Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEX',
        name : "Kirby Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEY',
        name : "KeyCorp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEY$G',
        name : "KeyCorp Non Cumulative Perp Conv Pfd Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'KEYS',
        name : "Keysight Technologies Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KF',
        name : "Korea Fund, Inc. (The) New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KFH',
        name : "KKR Financial Holdings LLC 8.375% Senior Notes due 2041",
        exchange : 'NYSE'
      },
      {
        symbol : 'KFI',
        name : "KKR Financial Holdings LLC 7.50% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'KFN$',
        name : "KKR Financial Holdings LLC Pfd Ser A Llc",
        exchange : 'NYSE'
      },
      {
        symbol : 'KFS',
        name : "Kingsway Financial Services, Inc. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'KFY',
        name : "Korn/Ferry International Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KGC',
        name : "Kinross Gold Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KHI',
        name : "Deutsche High Income Trust Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'KIM',
        name : "Kimco Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KIM$H',
        name : "Kimco Realty Corporation Depositary Shares Representing 1/100 Shares of Redeemable Preferred Class H",
        exchange : 'NYSE'
      },
      {
        symbol : 'KIM$I',
        name : "Kimco Realty Corporation DEPOSITARY SH REPSTG 1/1000TH PFD SER I",
        exchange : 'NYSE'
      },
      {
        symbol : 'KIM$J',
        name : "Kimco Realty Corporation Depositary Sh Repstg 1/1000th Pfd CL J %",
        exchange : 'NYSE'
      },
      {
        symbol : 'KIM$K',
        name : "Kimco Realty Corporation Depositary Shares Representing 1/1000th Preferred Series K",
        exchange : 'NYSE'
      },
      {
        symbol : 'KING',
        name : "King Digital Entertainment plc Ordinary Share",
        exchange : 'NYSE'
      },
      {
        symbol : 'KIO',
        name : "KKR Income Opportunities Fund Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'KKD',
        name : "Krispy Kreme Doughnuts, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KKR',
        name : "KKR & Co. L.P. Common Units Representing Limited Partnership Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMB',
        name : "Kimberly",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMF',
        name : "Kayne Anderson Midstream Energy Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMG',
        name : "KMG Chemicals, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMI',
        name : "Kinder Morgan, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMI.W',
        name : "Kinder Morgan, Inc. Warrants Expiring 2017",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMM',
        name : "Deutsche  Multi",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMPA',
        name : "Kemper Corporation 7.375% Subordinated Debentures due 2054",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMPR',
        name : "Kemper Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMT',
        name : "Kennametal Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KMX',
        name : "CarMax Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'KN',
        name : "Knowles Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KND',
        name : "Kindred Healthcare, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KNL',
        name : "Knoll, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KNM',
        name : "Konami Corporation American Depositary Shares (Each repstg one share of Common Stock)",
        exchange : 'NYSE'
      },
      {
        symbol : 'KNOP',
        name : "KNOT Offshore Partners LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'KNX',
        name : "Knight Transportation, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KO',
        name : "Coca",
        exchange : 'NYSE'
      },
      {
        symbol : 'KODK',
        name : "Eastman Kodak Company Common New",
        exchange : 'NYSE'
      },
      {
        symbol : 'KODK.A',
        name : "Eastman Kodak Company Wt Exp 135%",
        exchange : 'NYSE'
      },
      {
        symbol : 'KODK.W',
        name : "Eastman Kodak Company Warrant (Expiring September 3, 2018)",
        exchange : 'NYSE'
      },
      {
        symbol : 'KOF',
        name : "Coca Cola Femsa S.A.B. de C.V.  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KOP',
        name : "Koppers Holdings Inc. Koppers Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KORS',
        name : "Michael Kors Holdings Limited Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'KOS',
        name : "Kosmos Energy Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'KR',
        name : "Kroger Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KRA',
        name : "Kraton Performance Polymers, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KRC',
        name : "Kilroy Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KRC$G',
        name : "Kilroy Realty Corporation Preferred Stock Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'KRC$H',
        name : "Kilroy Realty Corporation Pfd Ser H",
        exchange : 'NYSE'
      },
      {
        symbol : 'KRG',
        name : "Kite Realty Group Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KRG$A',
        name : "Kite Realty Group Trust PERP PFD SER A",
        exchange : 'NYSE'
      },
      {
        symbol : 'KRO',
        name : "Kronos Worldwide Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KS',
        name : "KapStone Paper and Packaging Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KSM',
        name : "Deutsche Strategic Municiple Income Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'KSS',
        name : "Kohl's Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KST',
        name : "Deutsche Strategic Income Trust Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'KSU',
        name : "Kansas City Southern Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KSU$',
        name : "Kansas City Southern Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KT',
        name : "KT Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KTF',
        name : "Deutsche Municiple Income Trust Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'KTH',
        name : "Structures Products Cp 8% CorTS Issued by Peco Energy Cap Tr II Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KTN',
        name : "Structured Products Corp 8.205% CorTS 8.205% Corporate Backed Trust Securities (CorTS)",
        exchange : 'NYSE'
      },
      {
        symbol : 'KTP',
        name : "Corts 7.625 Pfd Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KW',
        name : "Kennedy",
        exchange : 'NYSE'
      },
      {
        symbol : 'KWN',
        name : "Kennedy",
        exchange : 'NYSE'
      },
      {
        symbol : 'KWR',
        name : "Quaker Chemical Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KYE',
        name : "Kayne Anderson Total Energy Return Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KYN',
        name : "Kayne Anderson MLP Investment Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'KYN$E',
        name : "Kayne Anderson MLP Investment Company Series E Mandatory Redeemable Preferred Shares, $25.00 liquidation preference",
        exchange : 'NYSE'
      },
      {
        symbol : 'KYN$F',
        name : "Kayne Anderson MLP Investment Company 3.50% Series F Mandatory Redeemable Preferred Shares $25.00 Liquidation Preference per share",
        exchange : 'NYSE'
      },
      {
        symbol : 'KYN$G',
        name : "Kayne Anderson MLP Investment Company Series G Mandatory Redeemable Preferred Shares Liquidation Preference",
        exchange : 'NYSE'
      },
      {
        symbol : 'KYO',
        name : "Kyocera Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'L',
        name : "Loews Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LAD',
        name : "Lithia Motors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LADR',
        name : "Ladder Capital Corp Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LAS',
        name : "Lentuo International Inc. American Depositary Shares, each representing two ordinary shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'LAZ',
        name : "Lazard LTD. Lazard, LTD. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LB',
        name : "L Brands, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'LBF',
        name : "Deutsche Global High Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LC',
        name : "LendingClub Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LCI',
        name : "Lannett Co Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LCM',
        name : "Advent/Claymore Enhanced Growth & Income Fund Advent/Claymore Enhanced Growth & Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'LDF',
        name : "Latin American Discovery Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LDL',
        name : "Lydall, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LDOS',
        name : "Leidos Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LDP',
        name : "Cohen & Steers Limited Duration Preferred and Income Fund, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'LDR',
        name : "Landauer, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEA',
        name : "Lear Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEAF',
        name : "Springleaf Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEE',
        name : "Lee Enterprises, Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEG',
        name : "Leggett & Platt, Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEJU',
        name : "Leju Holdings Limited American Depositary Shares, each representing one Ordinary share",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEN',
        name : "Lennar Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEN.B',
        name : "Lennar Corporation Class B",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEO',
        name : "Dreyfus Strategic Municipals, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LEU',
        name : "Centrus Energy Corp. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LF',
        name : "Leapfrog Enterprises Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LFC',
        name : "China Life Insurance Company Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'LFL',
        name : "LATAM Airlines Group S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'LG',
        name : "Laclede Gas Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LGF',
        name : "Lions Gate Entertainment Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LGI',
        name : "Lazard Global Total Return and Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LH',
        name : "Laboratory Corporation of America Holdings Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LHO',
        name : "LaSalle Hotel Properties Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LHO$H',
        name : "LaSalle Hotel Properties 7.50% Series H Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'LHO$I',
        name : "LaSalle Hotel Properties 6.375% Series I Cumulative Redeemable Redeemable Preferred SBI",
        exchange : 'NYSE'
      },
      {
        symbol : 'LII',
        name : "Lennox International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LITB',
        name : "LightInTheBox Holding Co., Ltd. American Depositary Shares, each representing 2 ordinary shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'LL',
        name : "Lumber Liquidators Holdings, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LLL',
        name : "L",
        exchange : 'NYSE'
      },
      {
        symbol : 'LLY',
        name : "Eli Lilly and Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LM',
        name : "Legg Mason, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LMT',
        name : "Lockheed Martin Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LNC',
        name : "Lincoln National Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LNC.W',
        name : "Lincoln National Corporation Warrant expiring July 10, 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'LND',
        name : "Brasilagro Brazilian Agric Real Estate Co Sponsored ADR (Brazil)",
        exchange : 'NYSE'
      },
      {
        symbol : 'LNKD',
        name : "LinkedIn Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LNN',
        name : "Lindsay Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LNT',
        name : "Alliant Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LO',
        name : "Lorillard, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LOCK',
        name : "LifeLock, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LOR',
        name : "Lazard World Dividend & Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LOW',
        name : "Lowe's Companies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LPG',
        name : "Dorian LPG Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LPI',
        name : "Laredo Petroleum, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LPL',
        name : "LG Display Co, Ltd AMERICAN DEPOSITORY SHARES",
        exchange : 'NYSE'
      },
      {
        symbol : 'LPT',
        name : "Liberty Property Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'LPX',
        name : "Louisiana",
        exchange : 'NYSE'
      },
      {
        symbol : 'LQ',
        name : "La Quinta Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LRE',
        name : "LRR Energy, L.P. Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'LRN',
        name : "K12 Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LTC',
        name : "LTC Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LTM',
        name : "Life Time Fitness Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LUB',
        name : "Luby's, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LUK',
        name : "Leucadia National Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LUV',
        name : "Southwest Airlines Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LUX',
        name : "Luxottica Group, S.p.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LVLT',
        name : "Level 3 Communications, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LVS',
        name : "Las Vegas Sands Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LXFR',
        name : "Luxfer Holdings PLC American Depositary Shares (each representing one",
        exchange : 'NYSE'
      },
      {
        symbol : 'LXFT',
        name : "Luxoft Holding, Inc. Class A Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'LXK',
        name : "Lexmark International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LXP',
        name : "Lexington Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LXP$C',
        name : "Lexington Realty Trust  Preferred Conv. Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'LXU',
        name : "LSB Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LYB',
        name : "LyondellBasell Industries NV Ordinary Shares Class A (Netherlands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'LYG',
        name : "Lloyds Banking Group Plc American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'LYG$A',
        name : "Lloyds Banking Group Plc 7.75% Public Income NotES (PINES) due July 15, 2050",
        exchange : 'NYSE'
      },
      {
        symbol : 'LYV',
        name : "Live Nation Entertainment, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'LZB',
        name : "La",
        exchange : 'NYSE'
      },
      {
        symbol : 'M',
        name : "Macy's Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MA',
        name : "Mastercard Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MAA',
        name : "Mid",
        exchange : 'NYSE'
      },
      {
        symbol : 'MAC',
        name : "Macerich Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MAIN',
        name : "Main Street Capital Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MAN',
        name : "ManpowerGroup Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MANU',
        name : "Manchester United Ltd. Class A Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'MAS',
        name : "Masco Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MATX',
        name : "Matson, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MAV',
        name : "Pioneer Municipal High Income Advantage Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'MBI',
        name : "MBIA Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MBLY',
        name : "Mobileye N.V. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'MBT',
        name : "Mobile TeleSystems OJSC",
        exchange : 'NYSE'
      },
      {
        symbol : 'MC',
        name : "Moelis & Company Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCA',
        name : "Blackrock MuniYield California Quality Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCC',
        name : "Medley Capital Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCD',
        name : "McDonald's Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCI',
        name : "Babson Capital Corporate Investors Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCK',
        name : "McKesson Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCN',
        name : "Madison Covered Call & Equity Strategy Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCO',
        name : "Moody's Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCP',
        name : "Molycorp, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCQ',
        name : "Medley Capital Corporation 7.125% Senior Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCR',
        name : "MFS Charter Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCS',
        name : "Marcus Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCV',
        name : "Medley Capital Corporation 6.125% Senior Notes due 2023",
        exchange : 'NYSE'
      },
      {
        symbol : 'MCY',
        name : "Mercury General Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MD',
        name : "Mednax, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MDC',
        name : "M.D.C. Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MDLY',
        name : "Medley Management Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MDP',
        name : "Meredith Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MDR',
        name : "McDermott International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MDT',
        name : "Medtronic Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MDU',
        name : "MDU Resources Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MED',
        name : "MEDIFAST INC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MEG',
        name : "Media General, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MEI',
        name : "Methode Electronics, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MEN',
        name : "Blackrock MuniEnhanced Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MEP',
        name : "Midcoast Energy Partners, L.P. Common units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'MER$D',
        name : "Merrill Lynch & Co., Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MER$E',
        name : "Merrill Lynch & Co., Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MER$F',
        name : "Merrill Lynch & Co., Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MER$K',
        name : "Merrill Lynch & Co., Inc. 6.45% Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'MER$M',
        name : "Merrill Lynch & Co., Inc. 6.45% Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'MER$P',
        name : "Merrill Lynch & Co., Inc. Merrill Lynch Capital Trust III 7.375% Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'MET',
        name : "MetLife, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MET$A',
        name : "MetLife, Inc. Preferred Series A Floating Rate",
        exchange : 'NYSE'
      },
      {
        symbol : 'MET$B',
        name : "MetLife, Inc. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFA',
        name : "MFA Financial, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFA$B',
        name : "MFA Financial, Inc. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFC',
        name : "Manulife Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFD',
        name : "Macquarie/First Trust Global Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFG',
        name : "Mizuho Financial Group, Inc. Sponosred ADR (Japan)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFL',
        name : "Blackrock MuniHoldings Investment Quality Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFM',
        name : "MFS Municipal Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFO',
        name : "MFA Financial, Inc. 8.00% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFT',
        name : "Blackrock MuniYield Investment Quality Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'MFV',
        name : "MFS Special Value Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MG',
        name : "Mistras Group Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MGA',
        name : "Magna International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MGF',
        name : "MFS Government Markets Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MGM',
        name : "MGM Resorts International Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MGR',
        name : "Affiliated Managers Group, Inc. 6.375% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'MGU',
        name : "Macquarie Global Infrastructure Total Return Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MH$A',
        name : "Maiden Holdings, Ltd. Pref Shs Ser A (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHD',
        name : "Blackrock MuniHoldings Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHF',
        name : "Western Asset Municipal High Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHFI',
        name : "McGraw Hill Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHG',
        name : "Marine Harvest ASA Sponsored ADR (Norway)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHI',
        name : "Pioneer Municipal High Income Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHK',
        name : "Mohawk Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHN',
        name : "Blackrock MuniHoldings New York Quality Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHNA',
        name : "Maiden Holdings North America Ltd. 8.25% Notes due 2041",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHNB',
        name : "Maiden Holdings North America, Ltd. 8.00% Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHNC',
        name : "Maiden Holdings North America, Ltd. 7.75% Notes due 2043",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHO',
        name : "M/I Homes, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHO$A',
        name : "M/I Homes, Inc. M/I Homes, Inc. Depositary Shares (Each representing 1/1000 of a Share of 9.75% Series A Preferred Share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHR',
        name : "Magnum Hunter Resources Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'MHY',
        name : "Western Asset Managed High Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MIC',
        name : "Macquarie Infrastructure Company LLC (New) Shares representing one Limited Liability Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'MIE',
        name : "Cohen & Steers MLP Income and Energy Opportunity Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MIG',
        name : "Meadowbrook Insurance Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MIL',
        name : "MFC Industrial Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'MILL',
        name : "Miller Energy Resourses, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MILL$C',
        name : "Miller Energy Resources, Inc. 10.75% Series C Cumulative, Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MILL$D',
        name : "Miller Energy Resources, Inc. 10.5% Series D Fixed Rate/Floating Rate Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MIN',
        name : "MFS Intermediate Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MITT',
        name : "AG Mortgage Investment Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MITT$A',
        name : "AG Mortgage Investment Trust, Inc. 8.25% Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'MITT$B',
        name : "AG Mortgage Investment Trust, Inc. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'MIXT',
        name : "MiX Telematics Limited American Depositary Shares, each representing 25 Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'MIY',
        name : "Blackrock MuniYield Michigan Quality Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MJI',
        name : "Blackrock MuniYield New Jersey Quality Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MJN',
        name : "Mead Johnson Nutrition Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MKC',
        name : "McCormick & Company, Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MKC.V',
        name : "McCormick & Company, Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MKL',
        name : "Markel Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MLI',
        name : "Mueller Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MLM',
        name : "Martin Marietta Materials, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MLP',
        name : "Maui Land & Pineapple Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MLR',
        name : "Miller Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MM',
        name : "Millennial Media, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMC',
        name : "Marsh & McLennan Companies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMD',
        name : "MainStay DefinedTerm Municipal Opportunities Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMI',
        name : "Marcus & Millichap, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMM',
        name : "3M Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMP',
        name : "Magellan Midstream Partners L.P. Limited Partnership",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMS',
        name : "Maximus, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMT',
        name : "MFS Multimarket Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MMU',
        name : "Western Asset Managed Municipals Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MN',
        name : "Manning & Napier, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MNE',
        name : "Blackrock Muni New York Intermediate Duration Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MNI',
        name : "McClatchy Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MNK',
        name : "Mallinckrodt plc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'MNP',
        name : "Western Asset Municipal Partners Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MNR',
        name : "Monmouth Real Estate Investment Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MNR$A',
        name : "Monmouth Real Estate Investment Corporation 7.625% Series A Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MNR$B',
        name : "Monmouth Real Estate Investment Corporation Series B Cumulative Redeemable Preferred Stock $0.01 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'MO',
        name : "Altria Group, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'MOD',
        name : "Modine Manufacturing Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MODN',
        name : "Model N, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MOG.A',
        name : "Moog Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MOG.B',
        name : "Moog Inc. Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MOH',
        name : "Molina Healthcare Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MON',
        name : "Monsanto Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MORE',
        name : "Monogram Residential Trust, Inc. Common",
        exchange : 'NYSE'
      },
      {
        symbol : 'MOS',
        name : "Mosaic Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MOV',
        name : "Movado Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MP$D',
        name : "Mississippi Power Company 5.25 Srs Pfd",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPA',
        name : "Blackrock MuniYield Pennsylvania Quality Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPC',
        name : "Marathon Petroleum Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPG',
        name : "Metaldyne Performance Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPLX',
        name : "MPLX LP Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPO',
        name : "Midstates Petroleum Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPV',
        name : "Babson Capital Participation Investors Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPW',
        name : "Medical Properties Trust, Inc. common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MPX',
        name : "Marine Products Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MQT',
        name : "Blackrock MuniYield Quality Fund II, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MQY',
        name : "Blackrock MuniYield Quality Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MR',
        name : "Mindray Medical International Limited Sponsored ADR representing Class A shares (China)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MRC',
        name : "MRC Global Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MRH',
        name : "Montpelier Re Holdings Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'MRH$A',
        name : "Montpelier RE Holdings Ltd Non Cumulative Series A Preferred Shares (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MRIN',
        name : "Marin Software Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MRK',
        name : "Merck & Company, Inc. Common Stock (new)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MRO',
        name : "Marathon Oil Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MS',
        name : "Morgan Stanley Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MS$A',
        name : "Morgan Stanley Dep Shs repstg 1/1000 Pfd Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'MS$E',
        name : "Morgan Stanley DEPOSITARY SHARES REP 1/1000TH SHARES FIXED/FLTG PREFERRED STOCK SERIES E",
        exchange : 'NYSE'
      },
      {
        symbol : 'MS$F',
        name : "Morgan Stanley Dep Shs Rpstg 1/1000th Int Prd Ser F Fxd to Flag",
        exchange : 'NYSE'
      },
      {
        symbol : 'MS$G',
        name : "Morgan Stanley Depositary Shares Representing 1/1000th Preferred Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'MS$I',
        name : "Morgan Stanley Depository Shares Representing 1/1000th Preferred Series 1 Fixed to Floating Non (Cum)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSA',
        name : "MSA Safety Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSB',
        name : "Mesabi Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSCA',
        name : "Main Street Capital Corporation 6.125% Senior Notes due 2023",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSCI',
        name : "MSCI Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSD',
        name : "Morgan Stanley Emerging Markets Debt Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSF',
        name : "Morgan Stanley Emerging Markets Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSI',
        name : "Motorola Solutions, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSJ',
        name : "Morgan Stanley Cap Trust VI Cap Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSK',
        name : "Morgan Stanley Cap TR VIII GDT Cap Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSL',
        name : "MidSouth Bancorp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSM',
        name : "MSC Industrial Direct Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSO',
        name : "Martha Stewart Living Omnimedia, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSP',
        name : "Madison Strategic Sector Premium Fund Madison Strategic Sector Premium Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'MSZ',
        name : "Morgan Stanley Capital Trust VII Cap Secs",
        exchange : 'NYSE'
      },
      {
        symbol : 'MT',
        name : "Arcelor Mittal NY Registry Shares NEW",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTB',
        name : "M&T Bank Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTB$',
        name : "M&T Bank Corporation Fixed Rate Cumulative Perpetual Preferred Stock, Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTB$C',
        name : "M&T Bank Corporation Fixed Rate Cumulative Perpetual Preferred Stock, Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTB.W',
        name : "M&T Bank Corporation Warrant (Expiring December 23, 2018)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTCN',
        name : "ArcelorMittal 6.00% Mandatorily Convertible Subordinated Notes due 2016",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTD',
        name : "Mettler",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTDR',
        name : "Matador Resources Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTG',
        name : "MGIC Investment Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTH',
        name : "Meritage Homes Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTL',
        name : "Mechel OAO American Depositary Shares (Each rep. 1 common shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTL$',
        name : "Mechel Steel Group OAO American Depositary Shares (each representing one",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTN',
        name : "Vail Resorts, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTOR',
        name : "Meritor, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTR',
        name : "Mesa Royalty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTRN',
        name : "Materion Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTS',
        name : "Montgomery Street Income Securities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTT',
        name : "Western Asset Municipal Defined Opportunity Trust Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTU',
        name : "Mitsubishi UFJ Financial Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTW',
        name : "Manitowoc Company, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTX',
        name : "Minerals Technologies Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MTZ',
        name : "MasTec, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUA',
        name : "Blackrock MuniAssets Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUC',
        name : "Blackrock MuniHoldings California Quality Fund, Inc.  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUE',
        name : "Blackrock MuniHoldings Quality Fund II, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUH',
        name : "Blackrock MuniHoldings Fund II, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUI',
        name : "Blackrock Muni Intermediate Duration Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUJ',
        name : "Blackrock MuniHoldings New Jersey Quality Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUR',
        name : "Murphy Oil Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUS',
        name : "Blackrock MuniHoldings Quality Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUSA',
        name : "Murphy USA Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MUX',
        name : "McEwen Mining Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MVC',
        name : "MVC Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MVCB',
        name : "MVC Capital 7.25% Senior Notes due 2023",
        exchange : 'NYSE'
      },
      {
        symbol : 'MVNR',
        name : "Mavenir Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MVO',
        name : "MV Oil Trust Units of Beneficial Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'MVT',
        name : "Blackrock MuniVest Fund II, Inc.  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MW',
        name : "Men's Wearhouse, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MWA',
        name : "MUELLER WATER PRODUCTS Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MWE',
        name : "MarkWest Energy Partners, LP Common units representing limited partnership units",
        exchange : 'NYSE'
      },
      {
        symbol : 'MWG',
        name : "Morgan Stanley Cap Tr IV Gtd Cap Secs",
        exchange : 'NYSE'
      },
      {
        symbol : 'MWO',
        name : "Morgan Stanley Cap Tr V Gtd Cap Secs",
        exchange : 'NYSE'
      },
      {
        symbol : 'MWR',
        name : "Morgan Stanley Cap Tr III Capital Trust Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'MWV',
        name : "Meadwestvaco Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MWW',
        name : "Monster Worldwide, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MX',
        name : "MagnaChip Semiconductor Corporation Depositary Shares, each representing one share of common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MXE',
        name : "Mexico Equity and Income Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MXF',
        name : "Mexico Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MXL',
        name : "MaxLinear, Inc Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MY',
        name : "China Ming Yang Wind Power Group Limited American Depositary Shares, each representing one ordinary share $0.001 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYC',
        name : "Blackrock MuniYield California Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYCC',
        name : "ClubCorp Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYD',
        name : "Blackrock MuniYield Fund, Inc.  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYE',
        name : "Myers Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYF',
        name : "Blackrock MuniYield Investment Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYI',
        name : "Blackrock MuniYield Quality Fund III, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYJ',
        name : "Blackrock MuniYield New Jersey Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYM',
        name : "Blackrock MuniYield Michigan Quality Fund II, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MYN',
        name : "Blackrock MuniYield New York Quality Fund, Inc.Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'MZF',
        name : "Managed Duration Investment Grade Municipal Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'N',
        name : "Netsuite Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAC',
        name : "Nuveen California Dividend Advantage Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAD',
        name : "Nuveen Dividend Advantage Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NADL',
        name : "North Atlantic Drilling Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAN',
        name : "Nuveen New York Dividend Advantage Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAO',
        name : "Nordic Amern Offshore Ltd Ordinary Shares Reg S (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAP',
        name : "Navios Maritime Midstream Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAT',
        name : "Nordic American Tankers Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAV',
        name : "Navistar International Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAV$D',
        name : "Navistar International Corporation Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NAZ',
        name : "Nuveen Arizona Premium Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NBB',
        name : "Nuveen Build America Bond Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NBD',
        name : "Nuveen Build America Bond Opportunity Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NBG',
        name : "Natl Bk Greece American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NBG$A',
        name : "National Bank of Greece SA Sponsored ADR representing Series A Preferred Shares (Greece)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NBHC',
        name : "National Bank Holdings Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NBL',
        name : "Noble Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NBR',
        name : "Nabors Industries Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'NC',
        name : "NACCO Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCA',
        name : "Nuveen California Municipal Value Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCFT',
        name : "Norcraft Companies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCI',
        name : "Navigant Consulting, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCR',
        name : "NCR Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCS',
        name : "NCI Building Systems, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCT',
        name : "Newcastle Investment Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCT$B',
        name : "Newcastle Investment Corporation Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCT$C',
        name : "Newcastle Investment Corporation Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCT$D',
        name : "Newcastle Invt Corp New PFD Ser D%",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCV',
        name : "AllianzGI Convertible & Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'NCZ',
        name : "AllianzGI Convertible & Income Fund II Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NDP',
        name : "Tortoise Energy Independence Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NDRO',
        name : "Enduro Royalty Trust Trust Units representing beneficial interest in the trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'NE',
        name : "Noble Corporation Ordinary Shares (UK)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEA',
        name : "Nuveen AMT",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE',
        name : "NextEra Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE$C',
        name : "FPL Group, Inc. 5 7/8% Preferred Trust Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE$G',
        name : "NextEra Energy, Inc. Series G Junior Subordinated Debenture due March 1, 2072",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE$H',
        name : "NextEra Energy, Inc. Series H Junior Subordinated Debentures due June 15, 2072",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE$I',
        name : "NextEra Energy, Inc. Series I Junior Subordinated Debentures due November 15, 2072",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE$J',
        name : "NextEra Energy, Inc. Series J Junior Subordinated Debentures due January 15, 2073",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE$O',
        name : "NextEra Energy, Inc. Units Expiring 09/01/2015",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEE$P',
        name : "NextEra Energy, Inc. EQUITY UNIT",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEFF',
        name : "Neff Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEM',
        name : "Newmont Mining Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEP',
        name : "NextEra Energy Partners, LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NES',
        name : "Nuverra Environmental Solutions, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEU',
        name : "NewMarket Corp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEV',
        name : "Nuveen Enhanced Municipal Value Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEWM',
        name : "New Media Investment Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NEWR',
        name : "New Relic, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NFG',
        name : "National Fuel Gas Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NFJ',
        name : "AllianzGI NFJ Dividend, Interest & Premium Strategy Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'NFX',
        name : "Newfield Exploration Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NGG',
        name : "National Grid Transco, PLC National Grid PLC (NEW) American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NGL',
        name : "NGL ENERGY PARTNERS LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NGLS',
        name : "Targa Resources Partners LP Common Units Representing Limited Partnership Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NGS',
        name : "Natural Gas Services Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NGVC',
        name : "Natural Grocers by Vitamin Cottage, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NHF',
        name : "NexPoint Credit Strategies Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'NHI',
        name : "National Health Investors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NI',
        name : "NiSource Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NID',
        name : "Nuveen Intermediate Duration Municipal Term Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NIE',
        name : "AllianzGI Equity & Convertible Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'NIM',
        name : "Nuveen Select Maturities Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NIO',
        name : "Nuveen Municipal Opportunity Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NIQ',
        name : "Nuveenn Intermediate Duration Quality Municipal Term Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NJ',
        name : "Nidec Corporation (Nihon Densan Kabushiki Kaisha) American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NJR',
        name : "NewJersey Resources Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NKA',
        name : "Niska Gas Storage Partners LLC Common Units Representing Limited Liability Company Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NKE',
        name : "Nike, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NKG',
        name : "Nuveen Georgia Dividend Advantage Municipal Fund 2 Nuveen Georgia Dividend Advantage Municipal Fund 2 (the",
        exchange : 'NYSE'
      },
      {
        symbol : 'NKX',
        name : "Nuveen California AMT",
        exchange : 'NYSE'
      },
      {
        symbol : 'NL',
        name : "NL Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NLS',
        name : "Nautilus, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NLSN',
        name : "Nielsen N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NLY',
        name : "Annaly Capital Management Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NLY$A',
        name : "Annaly Capital Management Inc Preferred Stock Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'NLY$C',
        name : "Annaly Capital Management Inc 7.625% Series C Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NLY$D',
        name : "Annaly Capital Management Inc Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'NM',
        name : "Navios Maritime Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NM$G',
        name : "Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perpetual Preferred Series G (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NM$H',
        name : "Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perp. Preferred Series H%",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMA',
        name : "Nuveen Municipal Advantage Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMBL',
        name : "Nimble Storage, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMFC',
        name : "New Mountain Finance Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMI',
        name : "Nuveen Municipal Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMK$B',
        name : "Niagara Mohawk Holdings, Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMK$C',
        name : "Niagara Mohawk Holdings, Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMM',
        name : "Navios Maritime Partners LP Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMO',
        name : "Nuveen Municipal Market Opportunity Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMR',
        name : "Nomura Holdings Inc ADR American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMS',
        name : "Nuveen Minnesota Municipal Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMT',
        name : "Nuveen Massachusetts Premium Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NMY',
        name : "Nuveen Maryland Premium Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNA',
        name : "Navios Maritime Acquisition Corporation Common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNC',
        name : "Nuveen North Carolina Premium Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNI',
        name : "Nelnet, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNN',
        name : "National Retail Properties Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNN$D',
        name : "National Retail Properties Depositary Shares Representing 1/100th Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNN$E',
        name : "National Retail Properties Depositary Shares, each representing a 1/100th interest in a share of 5.70% Series E Pfd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNP',
        name : "Nuveen New York Performance Plus Municipal Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NNY',
        name : "Nuveen New York Municipal Value Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOA',
        name : "North American Energy Partners, Inc. Common Shares (no par)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOAH',
        name : "Noah Holdings Limited",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOC',
        name : "Northrop Grumman Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOK',
        name : "Nokia Corporation Sponsored American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOM$C',
        name : "Nuveen Missouri Premium Income Municipal Fund MUNIFUND TERM PFD SHS SER 2015 (United States)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOR',
        name : "Noranda Aluminum Holding Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NORD',
        name : "Nord Anglia Education, Inc. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOV',
        name : "National Oilwell Varco, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NOW',
        name : "ServiceNow, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NP',
        name : "Neenah Paper, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPD',
        name : "China Nepstar Chain Drugstore Ltd American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPF',
        name : "Nuveen Premier Municipal Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPI',
        name : "Nuveen Premium Income Municipal Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPK',
        name : "National Presto Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPM',
        name : "Nuveen Premium Income Municipal Fund II, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPO',
        name : "Enpro Industries Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPP',
        name : "Nuveen Performance Plus Municipal Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPT',
        name : "Nuveen Premium Income Municipal Fund IV, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPTN',
        name : "NeoPhotonics Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NPV',
        name : "Nuveen Virginia Premium Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NQ',
        name : "NQ Mobile Inc. American Depositary Shares, each representing five Class A common shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NQI',
        name : "Nuveen Quality Municipal Fund, Inc.  Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NQM',
        name : "Nuveen Investment Quality Municipal Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NQP',
        name : "Nuveen Pennsylvania Investment Quality Municipal Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NQS',
        name : "Nuveen Select Quality Municipal Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NQU',
        name : "Nuveen Quality Income Municipal Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NR',
        name : "Newpark Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRF',
        name : "NorthStar Realty Finance Corp. Common Stock (New)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRF$A',
        name : "Northstar Realty Finance Corp. 8.75% Series A Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRF$B',
        name : "Northstar Realty Finance Corp. Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRF$C',
        name : "Northstar Realty Finance Corp. Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRF$D',
        name : "Northstar Realty Finance Corp. 8.50% Series D Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRF$E',
        name : "Northstar Realty Finance Corp. Preferred Stock Series E",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRG',
        name : "NRG Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRK',
        name : "Nuveen New York AMT",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRP',
        name : "Natural Resource Partners LP Limited Partnership",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRT',
        name : "North European Oil Royality Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NRZ',
        name : "New Residential Investment Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NS',
        name : "Nustar Energy L.P.  Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSAM',
        name : "NorthStar Asset Management Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSC',
        name : "Norfolk Southern Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSH',
        name : "Nustar GP Holdings, LLC Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSL',
        name : "Nuveen Senior Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSLP',
        name : "New Source Energy Partners L.P. Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSM',
        name : "Nationstar Mortgage Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSP',
        name : "Insperity, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSR',
        name : "Neustar, Inc. Neustar, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NSS',
        name : "NuStar Logistics, L.P. 7.625% Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTC',
        name : "Nuveen Connecticut Premium Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTG',
        name : "Tortoise MLP Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTI',
        name : "Northern Tier Energy LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTL',
        name : "Nortel Inversora SA, ADR Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTP',
        name : "Nam Tai Property Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTT',
        name : "Nippon Telegraph and Telephone Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTX',
        name : "Nuveen Texas Quality Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTX$C',
        name : "Nuveen Texas Quality Income Municipal Fund Munifund Term Pfd Shs Ser 2013",
        exchange : 'NYSE'
      },
      {
        symbol : 'NTZ',
        name : "Natuzzi, S.p.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'NU',
        name : "Northeast Utilities Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NUE',
        name : "Nucor Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NUM',
        name : "Nuveen Michigan Quality Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NUO',
        name : "Nuveen Ohio Quality Income Municipal Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NUS',
        name : "Nu Skin Enterprises, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NUV',
        name : "Nuveen Municipal Value Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NUW',
        name : "Nuveen AMT",
        exchange : 'NYSE'
      },
      {
        symbol : 'NVGS',
        name : "Navigator Holdings Ltd. Ordinary Shares (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NVO',
        name : "Novo Nordisk A/S Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NVR',
        name : "NVR, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NVRO',
        name : "Nevro Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NVS',
        name : "Novartis AG Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NW$C',
        name : "Natl Westminster Pfd Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NWE',
        name : "NorthWestern Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NWHM',
        name : "New Home Company Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NWL',
        name : "Newell Rubbermaid Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NWN',
        name : "Northwest Natural Gas Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NWY',
        name : "New York & Company, Inc. New York & Company, Inc. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'NX',
        name : "Quanex Building Products Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NXC',
        name : "Nuveen California Select Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'NXJ',
        name : "Nuveen New Jersey Dividend Advantage Municipal Fund Share of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'NXJ$C',
        name : "Nuveen New Jersey Dividend Advantage Municipal Fund MuniFund Term Preferred Shares, 2.00% Series 2015, $10.00 Liquidation preference per share",
        exchange : 'NYSE'
      },
      {
        symbol : 'NXN',
        name : "Nuveen New York Select Tax",
        exchange : 'NYSE'
      },
      {
        symbol : 'NXP',
        name : "Nuveen Select Tax Free Income Portfolio Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NXQ',
        name : "Nuveen Select Tax Free Income Portfolio II Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NXR',
        name : "Nuveen Select Tax Free Income Portfolio III Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NYCB',
        name : "New York Community Bancorp, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NYCB$U',
        name : "New York Community Bancorp, Inc. New York Community Capital Tr V (BONUSES)",
        exchange : 'NYSE'
      },
      {
        symbol : 'NYLD',
        name : "NRG Yield, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NYRT',
        name : "New York REIT, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'NYT',
        name : "New York Times Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'O',
        name : "Realty Income Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'O$F',
        name : "Realty Income Corporation Monthly Income Cumulative Red Preferred Stock Class F",
        exchange : 'NYSE'
      },
      {
        symbol : 'OAK',
        name : "Oaktree Capital Group, LLC Class A Units Representing Limited Liability Company Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'OAKS',
        name : "Five Oaks Investment Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OAKS$A',
        name : "Five Oaks Investment Corp. 8.75% Series A Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OAS',
        name : "Oasis Petroleum Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OB',
        name : "OneBeacon Insurance Group, Ltd. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OC',
        name : "Owens Corning Inc Common Stock New",
        exchange : 'NYSE'
      },
      {
        symbol : 'OCIP',
        name : "OCI Partners LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'OCIR',
        name : "OCI Resources LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'OCN',
        name : "Ocwen Financial Corporation NEW Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OCR',
        name : "Omnicare, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OCR$A',
        name : "Omnicare, Inc. Trust Preferred Income Equity Redeemable Securities (PIERS)",
        exchange : 'NYSE'
      },
      {
        symbol : 'OCR$B',
        name : "Omnicare, Inc. Omnicare Capital Trust II Series B 4.00% Trust Preferred Income Equity Redeemable Securities (PIERS)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ODC',
        name : "Oil",
        exchange : 'NYSE'
      },
      {
        symbol : 'OEC',
        name : "Orion Engineered Carbons S.A Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'OFC',
        name : "Corporate Office Properties Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OFC$L',
        name : "Corporate Office Properties Trust Preferred Series L",
        exchange : 'NYSE'
      },
      {
        symbol : 'OFG',
        name : "OFG Bancorp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OFG$A',
        name : "OFG Bancorp Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OFG$B',
        name : "OFG Bancorp 7.0% Non Cumulative Monthly Income Preferred Stock Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'OFG$D',
        name : "OFG Bancorp 7.125% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'OGE',
        name : "OGE Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OGS',
        name : "ONE Gas, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OHI',
        name : "Omega Healthcare Investors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OI',
        name : "Owens",
        exchange : 'NYSE'
      },
      {
        symbol : 'OIA',
        name : "Invesco Municipal Income Opportunities Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OIBR',
        name : "Oi S.A. American Depositary Shares (Each representing 1 Preferred Share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'OIBR.C',
        name : "Oi S.A. American Depositary Shares, (Each representing 1 Common Share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'OII',
        name : "Oceaneering International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OILT',
        name : "Oiltanking Partners, L.P. Common Units Representing Limited Partnership Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'OIS',
        name : "Oil States International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OKE',
        name : "ONEOK, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OKS',
        name : "ONEOK Partners, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OLN',
        name : "Olin Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OLP',
        name : "One Liberty Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OMAM',
        name : "OM Asset Management plc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'OMC',
        name : "Omnicom Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OME',
        name : "Omega Protein Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OMG',
        name : "OM Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OMI',
        name : "Owens & Minor, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OMN',
        name : "OMNOVA Solutions Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ONDK',
        name : "On Deck Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ONE',
        name : "Higher One Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OPK',
        name : "OPKO Health Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OPWR',
        name : "Opower, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OPY',
        name : "Oppenheimer Holdings, Inc. Class A Common Stock (DE)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ORA',
        name : "Ormat Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ORAN',
        name : "Orange",
        exchange : 'NYSE'
      },
      {
        symbol : 'ORB',
        name : "Orbital Sciences Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ORC',
        name : "Orchid Island Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ORCL',
        name : "Oracle Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ORI',
        name : "Old Republic International Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ORN',
        name : "Orion Marine Group Inc Common",
        exchange : 'NYSE'
      },
      {
        symbol : 'OSK',
        name : "Oshkosh Corporation (Holding Company)Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OUBS',
        name : "UBS AG Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OUT',
        name : "OUTFRONT Media Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OWW',
        name : "Orbitz Worldwide, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OXM',
        name : "Oxford Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OXY',
        name : "Occidental Petroleum Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'OZM',
        name : "Och",
        exchange : 'NYSE'
      },
      {
        symbol : 'P',
        name : "Pandora Media, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAA',
        name : "Plains All American Pipeline, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAC',
        name : "Grupo Aeroportuario Del Pacifico, S.A. B. de C.V. Grupo Aeroportuario Del Pacifico, S.A. de C.V. (each representing 10 Series B shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PACD',
        name : "Pacific Drilling S.A. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAG',
        name : "Penske Automotive Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAGP',
        name : "Plains Group Holdings, L.P. Class A Shares representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAH',
        name : "Platform Specialty Products Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAI',
        name : "Western Asset Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAM',
        name : "Pampa Energia S.A. Pampa Energia S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'PANW',
        name : "Palo Alto Networks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAR',
        name : "PAR Technology Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAY',
        name : "Verifone Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PAYC',
        name : "Paycom Software, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PB',
        name : "Prosperity Bancshares, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBA',
        name : "Pembina Pipeline Corp. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBF',
        name : "PBF Energy Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBFX',
        name : "PBF Logistics LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBH',
        name : "Prestige Brand Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBI',
        name : "Pitney Bowes Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBI$A',
        name : "Pitney Bowes Inc 5.25% Notes due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBI$B',
        name : "Pitney Bowes Inc 6.70% Notes Due 2043",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBR',
        name : "Petroleo Brasileiro S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBR.A',
        name : "Petroleo Brasileiro S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBT',
        name : "Permian Basin Royalty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBY',
        name : "Pep Boys",
        exchange : 'NYSE'
      },
      {
        symbol : 'PBYI',
        name : "Puma Biotechnology Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCF',
        name : "Putnam High Income Securities Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCG',
        name : "Pacific Gas & Electric Co. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCI',
        name : "PIMCO Dynamic Credit Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCK',
        name : "Pimco California Municipal Income Fund II Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCL',
        name : "Plum Creek Timber Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCM',
        name : "PCM Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCN',
        name : "Pimco Corporate & Income Strategy Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCP',
        name : "Precision Castparts Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PCQ',
        name : "PIMCO California Municipal Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PDI',
        name : "PIMCO Dynamic Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PDM',
        name : "Piedmont Office Realty Trust, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PDS',
        name : "Precision Drilling Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PDT',
        name : "John Hancock Premium Dividend Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'PE',
        name : "Parsley Energy, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEB',
        name : "Pebblebrook Hotel Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEB$A',
        name : "Pebblebrook Hotel Trust PFD SER A",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEB$B',
        name : "Pebblebrook Hotel Trust Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEB$C',
        name : "Pebblebrook Hotel Trust 6.50% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEG',
        name : "Public Service Enterprise Group Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEI',
        name : "Pennsylvania Real Estate Investment Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEI$A',
        name : "Pennsylvania Real Estate Investment Trust PFD sh CL A",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEI$B',
        name : "Pennsylvania Real Estate Investment Trust Cumulative Redeemable Perpetual Preferred Shares Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEO',
        name : "Petroleum Resources Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PEP',
        name : "Pepsico, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PER',
        name : "SandRidge Permian Trust Common Units of Benficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PES',
        name : "Pioneer Energy Services Corp. Common Stk",
        exchange : 'NYSE'
      },
      {
        symbol : 'PF',
        name : "Pinnacle Foods, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFD',
        name : "Flaherty & Crumrine Preferred Income Fund Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFE',
        name : "Pfizer, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFG',
        name : "Principal Financial Group Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFG$B',
        name : "Principal Financial Group, Inc. 6.518% Series B Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFH',
        name : "Cabco Tr Jcp 7.625 Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFK',
        name : "Prudential Financial Inflation",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFL',
        name : "PIMCO Income Strategy Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFN',
        name : "PIMCO Income Strategy Fund II",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFO',
        name : "Flaherty & Crumrine Preferred Income Opportunity Fund Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFS',
        name : "Provident Financial Services, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFSI',
        name : "PennyMac Financial Services, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PFX',
        name : "Phoenix Companies, Inc. Phoenix Companies Inc 7.45% Pfd",
        exchange : 'NYSE'
      },
      {
        symbol : 'PG',
        name : "Procter & Gamble Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGEM',
        name : "Ply Gem Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGH',
        name : "Pengrowth Energy Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGI',
        name : "Premiere Global Services, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGN',
        name : "Paragon Offshore plc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGP',
        name : "Pimco Global Stocksplus & Income Fund Pimco Global StocksPlus & Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGR',
        name : "Progressive Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGRE',
        name : "Paramount Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PGZ',
        name : "Principal Real Estate Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PH',
        name : "Parker",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHD',
        name : "Pioneer Floating Rate Trust Pioneer Floating Rate Trust Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHG',
        name : "Koninklijke Philips N.V. NY Registry Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHH',
        name : "PHH Corp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHI',
        name : "Philippine Long Distance Telephone Company Sponsored ADR",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHK',
        name : "Pimco High Income Fund Pimco High Income Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHM',
        name : "PulteGroup, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHT',
        name : "Pioneer High Income Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PHX',
        name : "Panhandle Oil and Gas Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PII',
        name : "Polaris Industries Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PIM',
        name : "Putnam Master Intermediate Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PIR',
        name : "Pier 1 Imports, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PIY',
        name : "Preferred Plus Trust (Ser CZN) Preferred Plus Trust Ser CZN",
        exchange : 'NYSE'
      },
      {
        symbol : 'PJC',
        name : "Piper Jaffray Companies Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PJH',
        name : "Prudential Financial, Inc. 5.75% Junior Subordinated Notes due 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'PJS',
        name : "PreferredPlus Trust Ser FAR 1 Tr Ctf",
        exchange : 'NYSE'
      },
      {
        symbol : 'PKD',
        name : "Parker Drilling Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PKE',
        name : "Park Electrochemical Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PKG',
        name : "Packaging Corporation of America Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PKI',
        name : "PerkinElmer, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PKO',
        name : "Pimco Income Opportunity Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PKX',
        name : "POSCO Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PKY',
        name : "Parkway Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PL',
        name : "Protective Life Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PL$B',
        name : "Protective Life Corporation PLC Capital Trust V Trust Originated Preferred Securities (TOPRS)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PL$C',
        name : "Protective Life Corporation 6.25% Subordinated Debentures due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'PL$E',
        name : "Protective Life Corporation 6.00% Subordinated Debentures due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'PLD',
        name : "ProLogis, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PLL',
        name : "Pall Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PLOW',
        name : "Douglas Dynamics, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PLT',
        name : "Plantronics, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PM',
        name : "Philip Morris International Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PMC',
        name : "Pharmerica Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PMF',
        name : "PIMCO Municipal Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PML',
        name : "Pimco Municipal Income Fund II Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PMM',
        name : "Putnam Managed Municipal Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PMO',
        name : "Putnam Municipal Opportunities Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PMT',
        name : "PennyMac Mortgage Investment Trust Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PMX',
        name : "PIMCO Municipal Income Fund III Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNC',
        name : "PNC Financial Services Group, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNC$P',
        name : "PNC Financial Services Group, Inc. (The) Depositary Shares Representing 1/4000th Perpetual Preferred Series P",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNC$Q',
        name : "PNC Financial Services Group, Inc. (The) Depositary Shares Representing 1/4000th Perpetual Preferred Shares Series Q",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNC.W',
        name : "PNC Financial Services Group, Inc. Warrant expiring December 31, 2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNF',
        name : "PIMCO New York Municipal Income Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNI',
        name : "Pimco New York Municipal Income Fund II Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNK',
        name : "Pinnacle Entertainment, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNM',
        name : "PNM Resources, Inc. (Holding Co.) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNR',
        name : "Pentair plc. Ordinary Share",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNTA',
        name : "PennantPark Investment Corporation 6.25% Senior Notes due 2025",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNW',
        name : "Pinnacle West Capital Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNX',
        name : "Phoenix Companies, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PNY',
        name : "Piedmont Natural Gas Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'POL',
        name : "PolyOne Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'POM',
        name : "PEPCO Holdings, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'POR',
        name : "Portland General Electric Co Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'POST',
        name : "Post Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'POT',
        name : "Potash Corporation of Saskatchewan Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'POWR',
        name : "PowerSecure International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPG',
        name : "PPG Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPL',
        name : "PP&L Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPO',
        name : "Polypore International Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPP',
        name : "Primero Mining Corp.  New Common Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPR',
        name : "Voya Prime Rate Trust Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPS',
        name : "Post Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPS$A',
        name : "Post Properties, Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPT',
        name : "Putnam Premier Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PPX',
        name : "PPL Capital Funding, Inc. 2013 Series B Junior Subordinated Notes due 2073",
        exchange : 'NYSE'
      },
      {
        symbol : 'PQ',
        name : "Petroquest Energy Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRA',
        name : "ProAssurance Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRE',
        name : "PartnerRe Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRE$D',
        name : "PartnerRe Ltd. Preferred Series D 6.5% (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRE$E',
        name : "PartnerRe Ltd. PFD SER E (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRE$F',
        name : "PartnerRe Ltd. Redeemable Preferred Shares Series F (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRGO',
        name : "Perrigo Company plc Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRH',
        name : "Prudential Financial, Inc. 5.70% Junior Subordinated Notes due 2053",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRI',
        name : "Primerica, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRLB',
        name : "Proto Labs, Inc. Common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRO',
        name : "PROS Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRU',
        name : "Prudential Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PRY',
        name : "Prospect Capital Corporation 6.95% Senior Notes due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA',
        name : "Public Storage Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$A',
        name : "Public Storage Depositary Shares each representing 1/1,000 of a 5.875% Cumulative Preferred SBI, Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$O',
        name : "Public Storage Depositary Shares Representing 1/1000% Cumulative Pfd Sh Ben Int Series O",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$P',
        name : "Public Storage DEPOSITARY SHS REPSTG % CUMULATIVE PFD SHS BEN INT (SER P)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$Q',
        name : "Public Storage DEPOSITARY SHS REPSTG 1/1000TH PFD SHS BEN INT SER Q",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$R',
        name : "Public Storage Depository Sh Repstg 1/1000th Pfd Ser R",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$S',
        name : "Public Storage DEP SH REPSTG PFD SH BEN INT SER S",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$T',
        name : "Public Storage Depository Shares Representing 1/1000 Pfd Shares Beneficial Interest Series T",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$U',
        name : "Public Storage Depositary Shares Representing 1/1000 Preferred Benerficial Interest Series U",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$V',
        name : "Public Storage Dep Shs Repstg 1/1000th Pfd Sh Ben Int Ser V",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$W',
        name : "Public Storage Depositary Shares Representing 1/1000 Preferred Shares of Benficial Interest Series W",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$X',
        name : "Public Storage Depositary Shares Representing 1/1000th Cumulative Preferred Shares Beneficial Interest Series X",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$Y',
        name : "Public Storage Dep Shs Repstg 1/1000th Pfd Sh Ben Int Ser Y",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSA$Z',
        name : "Public Storage Dep Shs Representing 1/1000th Pfd Sh Ben Int Ser Z",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSB',
        name : "PS Business Parks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSB$R',
        name : "PS Business Parks, Inc. Depositary Shares, Each representing 1/1,000 of a share of 6.875% Cumulative Preferred stock, Series R, $0.01 par",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSB$S',
        name : "PS Business Parks, Inc. Depositary Shares, each representing 1/1,000 of a share of 6.45% Cumulative Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSB$T',
        name : "PS Business Parks, Inc. Depositary Shares Representing 1/1000th Preferred Series T",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSB$U',
        name : "PS Business Parks, Inc. Dep Shs Repstg 1/1000 Pfd Ser U",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSB$V',
        name : "PS Business Parks, Inc. Depositary Shares Represting 1/1000th Shares Cumulative Preferred Stock Series V",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSF',
        name : "Cohen & Steers Select Preferred and Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSG',
        name : "Performance Sports Group Ltd. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSO',
        name : "Pearson, Plc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSX',
        name : "Phillips 66 Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PSXP',
        name : "Phillips 66 Partners LP Common Units representing limited partner interest in the Partnership",
        exchange : 'NYSE'
      },
      {
        symbol : 'PT',
        name : "Portugal Telecom SGPS, S.A . Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PTP',
        name : "Platinum Underwriters Holdings, Ltd",
        exchange : 'NYSE'
      },
      {
        symbol : 'PTR',
        name : "PetroChina Company Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PTY',
        name : "Pimco Corporate & Income Opportunity Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'PUK',
        name : "Prudential Public Limited Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PUK$',
        name : "Prudential Public Limited Company 6.75% Perpetual Subordinated Captial Security",
        exchange : 'NYSE'
      },
      {
        symbol : 'PUK$A',
        name : "Prudential Public Limited Company 6.50% Perpetual Subordinated Capital Securities Exchangeable at the Issuer's Option Into Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'PVA',
        name : "Penn Virginia Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PVG',
        name : "Pretium Resources, Inc. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'PVH',
        name : "PVH Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PVTD',
        name : "PrivateBancorp, Inc. 7.125% Subordinated Debentures due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'PWE',
        name : "Penn West Petroleum Ltd",
        exchange : 'NYSE'
      },
      {
        symbol : 'PWR',
        name : "Quanta Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PX',
        name : "Praxair, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PXD',
        name : "Pioneer Natural Resources Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'PYB',
        name : "PPlus Trust Series GSG",
        exchange : 'NYSE'
      },
      {
        symbol : 'PYN',
        name : "PIMCO New York Municipal Income Fund III Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PYS',
        name : "Merrill Lynch Depositor Inc PPlus Tr Ser RRD",
        exchange : 'NYSE'
      },
      {
        symbol : 'PYT',
        name : "PPlus Tr GSC",
        exchange : 'NYSE'
      },
      {
        symbol : 'PZB',
        name : "Merrill Lynch Depositor, Inc. Merrill Lynch Depositor, Inc. PPLUS Class A 6.7% Callable Trust Certificates, Series LTD",
        exchange : 'NYSE'
      },
      {
        symbol : 'PZC',
        name : "PIMCO California Municipal Income Fund III Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'PZE',
        name : "Petrobras Argentina S.A. ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'PZN',
        name : "Pzena Investment Management Inc Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'Q',
        name : "Quintiles Transnational Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'QEP',
        name : "QEP Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'QEPM',
        name : "QEP Midstream Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'QIHU',
        name : "Qihoo 360 Technology Co. Ltd. American Depositary Shares, every 2 of which representing three Class A Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'QSR',
        name : "Restaurant Brands International Inc. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'QTM',
        name : "Quantum Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'QTS',
        name : "QTS Realty Trust, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'QTWO',
        name : "Q2 Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'QUAD',
        name : "Quad Graphics, Inc Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'R',
        name : "Ryder System, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RAD',
        name : "Rite Aid Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RAI',
        name : "Reynolds American Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RALY',
        name : "Rally Software Development Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RAS',
        name : "RAIT Financial Trust New Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'RAS$A',
        name : "RAIT Financial Trust  7.75% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'RAS$B',
        name : "RAIT Financial Trust 8.375% Series B Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'RAS$C',
        name : "RAIT Financial Trust 8.875% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'RATE',
        name : "Bankrate, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RAX',
        name : "Rackspace Hosting, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBA',
        name : "Ritchie Bros. Auctioneers Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBC',
        name : "Regal Beloit Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS',
        name : "Royal Bank of Scotland Group Plc New (The) ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$E',
        name : "RBS Capital Funding Trust V",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$F',
        name : "Royal Bank of Scotland Group Plc (The) Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$G',
        name : "RBS Capital Funding Trust VII",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$H',
        name : "Royal Bank of Scotland Group Plc (The) Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$I',
        name : "RBS Capital Funding Trust VI",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$L',
        name : "Royal Bank of Scotland Group Plc (The) ADR representing One Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$M',
        name : "Royal Bank of Scotland Group Plc (The) ADS Series M",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$N',
        name : "Royal Bank of Scotland Group Plc (The) Royal Bank of Scotland Group PLC (The) American Depositary Shares (each representing One Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$P',
        name : "Royal Bank of Scotland Group Plc (The) ADR representing Preferred Shares Series P",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$Q',
        name : "Royal Bank of Scotland Group Plc (The) ADR repstg Pref Shs Ser Q",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$R',
        name : "Royal Bank of Scotland Group Plc (The) ADR repstg USD Pfd Shs Ser R (United Kingdom)",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$S',
        name : "Royal Bank of Scotland Group Plc (The) Sponsored ADR Repstg Pref Ser S (United Kingdom)",
        exchange : 'NYSE'
      },
      {
        symbol : 'RBS$T',
        name : "Royal Bank of Scotland Group Plc (The) Sponsored ADR Representing Pfef shs ser T (United Kingdom)",
        exchange : 'NYSE'
      },
      {
        symbol : 'RCAP',
        name : "RCS CAPITAL CORPORATION Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RCI',
        name : "Rogers Communication, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RCL',
        name : "Royal Caribbean Cruises Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RCS',
        name : "PIMCO Strategic Income Fund, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'RDC',
        name : "Rowan Companies plc Class A Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'RDN',
        name : "Radian Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RDS.A',
        name : "Royal Dutch Shell PLC Royal Dutch Shell American Depositary Shares (Each representing two Class A Ordinary Shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'RDS.B',
        name : "Royal Dutch Shell PLC Royal Dutch Shell PLC American Depositary Shares (Each representing two Class B Ordinary Shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'RDY',
        name : "Dr. Reddy's Laboratories Ltd Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RE',
        name : "Everest Re Group, Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'REG',
        name : "Regency Centers Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'REG$F',
        name : "Regency Centers Corporation Cumulative Red Preferred Series 6%",
        exchange : 'NYSE'
      },
      {
        symbol : 'REG$G',
        name : "Regency Centers Corporation Pfd Ser 7%",
        exchange : 'NYSE'
      },
      {
        symbol : 'REN',
        name : "Resolute Energy Corporation Comon Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RENN',
        name : "Renren Inc. American Depositary Shares, each representing three Class A ordinary shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'RES',
        name : "RPC, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RESI',
        name : "Altisource Residential Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'REV',
        name : "Revlon, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'REX',
        name : "REX American Resources Corporation",
        exchange : 'NYSE'
      },
      {
        symbol : 'REXR',
        name : "Rexford Industrial Realty, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RF',
        name : "Regions Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RF$A',
        name : "Regions Financial Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'RF$B',
        name : "Regions Financial Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'RFI',
        name : "Cohen & Steers Total Return Realty Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RFP',
        name : "Resolute Forest Products Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RFT',
        name : "RAIT Financial Trust 7.625% Senior Notes due 2024",
        exchange : 'NYSE'
      },
      {
        symbol : 'RFTA',
        name : "RAIT Financial Trust 7.125% Senior Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'RGA',
        name : "Reinsurance Group of America, Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RGC',
        name : "Regal Entertainment Group Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RGP',
        name : "Regency Energy Partners LP Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'RGR',
        name : "Sturm, Ruger & Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RGS',
        name : "Regis Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RGT',
        name : "Royce Global Value Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RH',
        name : "Restoration Hardware Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RHI',
        name : "Robert Half International Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RHP',
        name : "Ryman Hospitality Properties, Inc. (REIT)",
        exchange : 'NYSE'
      },
      {
        symbol : 'RHT',
        name : "Red Hat, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RICE',
        name : "Rice Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RIG',
        name : "Transocean Ltd (Switzerland) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RIGP',
        name : "Transocean Partners LLC Common Units Representing Limited Liability Company Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'RIO',
        name : "Rio Tinto Plc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RIOM',
        name : "Rio Alto Mining Limited Common Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'RIT',
        name : "LMP Real Estate Income Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RJD',
        name : "Raymond James Financial, Inc. 6.90% Senior Notes Due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'RJF',
        name : "Raymond James Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RKT',
        name : "Rock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RKUS',
        name : "Ruckus Wireless, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RL',
        name : "Ralph Lauren Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RLD',
        name : "RealD Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RLGY',
        name : "Realogy Holdings Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RLH',
        name : "Red Lions Hotels Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RLH$A',
        name : "Red Lion Hotels Capital Trust Red Lion Hotels Capital Trust",
        exchange : 'NYSE'
      },
      {
        symbol : 'RLI',
        name : "RLI Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RLJ',
        name : "RLJ Lodging Trust Common Shares of Beneficial Interest $0.01 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'RM',
        name : "Regional Management Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RMAX',
        name : "RE/MAX Holdings, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RMD',
        name : "ResMed Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RMP',
        name : "Rice Midstream Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'RMT',
        name : "Royce Micro",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNDY',
        name : "Roundy's, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNE',
        name : "Morgan Stanley Eastern Europe Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNF',
        name : "Rentech Nitrogen Partners, L.P. Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNG',
        name : "Ringcentral, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNO',
        name : "Rhino Resource Partners LP Common Units representing limited partnership interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNP',
        name : "Cohen & Steers Reit and Preferred Income Fund Inc Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNR',
        name : "RenaissanceRe Holdings Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNR$C',
        name : "RenaissanceRe Holdings Ltd. 6.08% Series C Preference Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'RNR$E',
        name : "RenaissanceRe Holdings Ltd. 5.375% Series E Preference Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ROC',
        name : "Rockwood Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ROG',
        name : "Rogers Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ROK',
        name : "Rockwell Automation, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ROL',
        name : "Rollins, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ROP',
        name : "Roper Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ROYT',
        name : "Pacific Coast Oil Trust Units of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'RPAI',
        name : "Retail Properties of America, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RPAI$A',
        name : "Retail Properties of America, Inc. Pfd Ser A %",
        exchange : 'NYSE'
      },
      {
        symbol : 'RPM',
        name : "RPM International Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RPT',
        name : "Ramco",
        exchange : 'NYSE'
      },
      {
        symbol : 'RPT$D',
        name : "Ramco",
        exchange : 'NYSE'
      },
      {
        symbol : 'RQI',
        name : "Cohen & Steers Quality Income Realty Fund Inc Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'RRC',
        name : "Range Resources Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RRMS',
        name : "Rose Rock Midstream, L.P. Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'RRTS',
        name : "Roadrunner Transportation Systems, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RS',
        name : "Reliance Steel & Aluminum Co. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSE',
        name : "Rouse Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSG',
        name : "Republic Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSH',
        name : "Radioshack Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSO',
        name : "Resource Capital Corp. Resource Capital Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSO$A',
        name : "Resource Capital Corp. 8.50% Series A Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSO$B',
        name : "Resource Capital Corp. Pfd Ser B",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSO$C',
        name : "Resource Capital Corp. Preferred Series C",
        exchange : 'NYSE'
      },
      {
        symbol : 'RSPP',
        name : "RSP Permian, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RST',
        name : "Rosetta Stone Rosetta Stone, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'RT',
        name : "Ruby Tuesday, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RTEC',
        name : "Rudolph Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RTI',
        name : "RTI International Metals, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RTN',
        name : "Raytheon Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RUBI',
        name : "The Rubicon Project, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RUK',
        name : "Reed Elsevier NV PLC New ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'RVT',
        name : "Royce Value Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RWT',
        name : "Redwood Trust, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RXN',
        name : "Rexnord Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RY',
        name : "Royal Bank Of Canada Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RYAM',
        name : "Rayonier Advanced Materials Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RYI',
        name : "Ryerson Holding Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RYL',
        name : "Ryland Group, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RYN',
        name : "Rayonier Inc. REIT Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'RZA',
        name : "Reinsurance Group of America, Incorporated 6.20% Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'S',
        name : "Sprint Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SA',
        name : "Seabridge Gold, Inc. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAH',
        name : "Sonic Automotive, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAIC',
        name : "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SALT',
        name : "Scorpio Bulkers Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAM',
        name : "Boston Beer Company, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAN',
        name : "Banco Santander, S.A. Sponsored ADR (Spain)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAN$A',
        name : "Banco Santander, S.A. 6.80% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAN$B',
        name : "Santander Finance Preferred SA Unipersonal Floating Rate Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAN$C',
        name : "Banco Santander, S.A. 6.50% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAN$I',
        name : "Banco Santander Central Hispano, S.A. Santander Finance Preferred S.A. Unipersonal 6.41% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAP',
        name : "SAP  SE ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAQ',
        name : "Saratoga Investment Corp 7.50% Notes due 2020",
        exchange : 'NYSE'
      },
      {
        symbol : 'SAR',
        name : "Saratoga Investment Corp New",
        exchange : 'NYSE'
      },
      {
        symbol : 'SB',
        name : "Safe Bulkers, Inc Common Stock ($0.001 par value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SB$B',
        name : "Safe Bulkers, Inc 8.00% Series B Cumulative Redeemable Perpetual Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'SB$C',
        name : "Safe Bulkers, Inc Cumulative Redeemable Perpetual Preferred Series C (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SB$D',
        name : "Safe Bulkers, Inc Perpetual Preferred Series D (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBGL',
        name : "Sibanye Gold Limited American Depositary Shares (Each representing four ordinary shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBH',
        name : "Sally Beauty Holdings, Inc. (Name to be changed from Sally Holdings, Inc.) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBNA',
        name : "Scorpio Tankers Inc. 6.75% Senior Notes due 2020",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBNB',
        name : "Scorpio Tankers Inc. 7.50% Senior Notes Due 2017",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBR',
        name : "Sabine Royalty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBS',
        name : "Companhia de saneamento Basico Do Estado De Sao Paulo",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBW',
        name : "Western Asset Worldwide Income Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SBY',
        name : "Silver Bay Realty Trust Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SC',
        name : "Santander Consumer USA Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCCO',
        name : "Southern Copper Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCD',
        name : "LMP Capital and Income Fund Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCE$F',
        name : "Southern California Edison Trust I Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCE$G',
        name : "SCE Trust II Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCE$H',
        name : "SCE Trust III Fixed/Floating Rate Trust Preference Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCG',
        name : "SCANA Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCHW',
        name : "Charles Schwab Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCHW$B',
        name : "Charles Schwab Corporation Depositary Shares Representing 1/40th Int Sh Non Cumulative Preferred Stock Series B",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCI',
        name : "Service Corporation International Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCL',
        name : "Stepan Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCM',
        name : "Stellus Capital Investment Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCQ',
        name : "Stellus Capital Investment Corporation 6.50% Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCS',
        name : "Steelcase Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCU',
        name : "Scana Corporation SCANA CORPORATION 2009 Series A 7.70% Enhanced Junior Subordinated Notes",
        exchange : 'NYSE'
      },
      {
        symbol : 'SCX',
        name : "L.S. Starrett Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SD',
        name : "Sandridge Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SDLP',
        name : "Seadrill Partners LLC Common Units Representing Limited Liability Company Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SDR',
        name : "SandRidge Mississippian Trust II Common Units representing Beneficial Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SDRL',
        name : "Seadrill Limited Ordinary Shares (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SDT',
        name : "SandRidge Mississippian Trust I Common Units of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'SE',
        name : "Spectra Energy Corp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SEAS',
        name : "SeaWorld Entertainment, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SEE',
        name : "Sealed Air Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SEM',
        name : "Select Medical Holdings Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SEMG',
        name : "Semgroup Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SEP',
        name : "Spectra Energy Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SERV',
        name : "ServiceMaster Global Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SF',
        name : "Stifel Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFB',
        name : "Stifel Financial Corp. 6.70% Senior Note due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFE',
        name : "Safeguard Scientifics, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFG',
        name : "StanCorp Financial Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFL',
        name : "Ship Finance International Limited",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFN',
        name : "Stifel Financial Corporation 5.375% Senior Notes due December 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFS',
        name : "Smart & Final Stores, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFUN',
        name : "SouFun Holdings Limited American Depositary Shares (Each representing Four Class A Ordinary Shares, HK$1.00 par value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SFY',
        name : "Swift Energy Company (Holding Company) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SGF',
        name : "Aberdeen Singapore Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SGL',
        name : "Strategic Global Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SGM',
        name : "Stonegate Mortgage Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SGU',
        name : "Star Gas Partners, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SGY',
        name : "Stone Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SGZA',
        name : "Selective Insurance Group, Inc. 5.875% Senior Notes due 2043",
        exchange : 'NYSE'
      },
      {
        symbol : 'SHG',
        name : "Shinhan Financial Group Co Ltd American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'SHI',
        name : "SINOPEC Shangai Petrochemical Company, Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SHLX',
        name : "Shell Midstream Partners, L.P. Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SHO',
        name : "Sunstone Hotel Investors, Inc. Sunstone Hotel Investors, Inc. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'SHO$D',
        name : "Sunstone Hotel Investors, Inc. 8.0% Series D Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SHW',
        name : "Sherwin",
        exchange : 'NYSE'
      },
      {
        symbol : 'SID',
        name : "Companhia Siderurgica Nacional S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SIG',
        name : "Signet Jewelers Limited Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'SIR',
        name : "Select Income REIT Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'SIX',
        name : "Six Flags Entertainment Corporation New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SJI',
        name : "South Jersey Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SJM',
        name : "J.M. Smucker Company (The) New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SJR',
        name : "Shaw Communications Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SJT',
        name : "San Juan Basin Royalty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SJW',
        name : "SJW Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SKH',
        name : "Skilled Healthcare Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SKM',
        name : "SK Telecom Co., Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SKT',
        name : "Tanger Factory Outlet Centers, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SKX',
        name : "Skechers U.S.A., Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLB',
        name : "Schlumberger N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLCA',
        name : "U.S. Silica Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLF',
        name : "Sun Life Financial Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLG',
        name : "SL Green Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLG$I',
        name : "SL Green Realty Corporation Preferred Series I",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLH',
        name : "Solera Holdings, Inc. Solera Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLRA',
        name : "Solar Capital Ltd. 6.75% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLTB',
        name : "Scorpio Bulkers Inc. 7.50% Senior Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'SLW',
        name : "Silver Wheaton Corp Common Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SM',
        name : "SM Energy Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SMFG',
        name : "Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SMG',
        name : "Scotts Miracle",
        exchange : 'NYSE'
      },
      {
        symbol : 'SMI',
        name : "Semiconductor  Manufacturing International Corporation ADR",
        exchange : 'NYSE'
      },
      {
        symbol : 'SMLP',
        name : "Summit Midstream Partners, LP Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SMM',
        name : "Salient Midstream Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'SMP',
        name : "Standard Motor Products, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SN',
        name : "Sanchez Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNA',
        name : "Snap",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNE',
        name : "Sony Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNH',
        name : "Senior Housing Properties Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNHN',
        name : "Senior Housing Properties Trust 5.625% Senior Notes due 2042",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNI',
        name : "Scripps Networks Interactive, Inc Common Class A",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNN',
        name : "Smith & Nephew SNATS, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNOW',
        name : "Intrawest Resorts Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNP',
        name : "China Petroleum & Chemical Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNR',
        name : "New Senior Investment Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNV',
        name : "Synovus Financial Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNV$C',
        name : "Synovus Financial Corp. Perp Pfd Ser C Fxd To Fltg",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNX',
        name : "Synnex Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SNY',
        name : "Sanofi American Depositary Shares (Each repstg one",
        exchange : 'NYSE'
      },
      {
        symbol : 'SO',
        name : "Southern Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SOL',
        name : "Renesola Ltd. Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'SON',
        name : "Sonoco Products Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SOR',
        name : "Source Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SOV$C',
        name : "Santander Holdings USA, Inc. Dep Shs repstg 1/1000 Perp Pfd Ser C",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPA',
        name : "Sparton Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPB',
        name : "Spectrum Brands Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPE',
        name : "Special Opportunities Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPF',
        name : "Standard Pacific Corp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPG',
        name : "Simon Property Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPG$J',
        name : "Simon Property Group, Inc. Simon Property Group 8 3/8% Series J Cumulative Redeemable Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPH',
        name : "Suburban Propane Partners, L.P. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPLP',
        name : "Steel Partners Holdings LP LTD PARTNERSHIP UNIT",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPN',
        name : "Superior Energy Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPR',
        name : "Spirit Aerosystems Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPW',
        name : "SPX Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SPXX',
        name : "Nuveen S&P 500 Dynamic Overwrite Fund",
        exchange : 'NYSE'
      },
      {
        symbol : 'SQM',
        name : "Sociedad Quimica y Minera S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SQNS',
        name : "Sequans Communications S.A. American Depositary Shares, each representing one Ordinary Share",
        exchange : 'NYSE'
      },
      {
        symbol : 'SR',
        name : "Standard Register Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SRC',
        name : "Spirit Realty Capital, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SRE',
        name : "Sempra Energy Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SRF',
        name : "The Cushing Royalty & Income Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'SRI',
        name : "Stoneridge, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SRLP',
        name : "Sprague Resources LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SRT',
        name : "StarTek, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SRV',
        name : "The Cushing MLP Total Return Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSD',
        name : "Simpson Manufacturing Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSE',
        name : "Seventy Seven Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSI',
        name : "Stage Stores, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSL',
        name : "Sasol Ltd. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSLT',
        name : "Sesa Sterlite Limited  American Depositary Shares (Each representing four equity shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSNI',
        name : "Silver Spring Networks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSP',
        name : "E.W. Scripps Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSS',
        name : "Sovran Self Storage, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSTK',
        name : "Shutterstock, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSW',
        name : "Seaspan Corporation Seaspan Corporation Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSW$C',
        name : "Seaspan Corporation 9.50% Series C Cumulative Redeemable Perpetual Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSW$D',
        name : "Seaspan Corporation Cumulative Redeemable Perpetual Preferred Series D (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSW$E',
        name : "Seaspan Corporation Cumulative Redeemable Perpetual Preferred Series E (Marshall Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SSWN',
        name : "Seaspan Corporation 6.375% Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'ST',
        name : "Sensata Technologies Holding N.V. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAG',
        name : "Stag Industrial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAG$A',
        name : "Stag Industrial, Inc. Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAG$B',
        name : "Stag Industrial, Inc. Cum Pfd Ser B",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAR',
        name : "iStar Financial Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAR$D',
        name : "iStar Financial Inc. Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAR$E',
        name : "iStar Financial Inc. 7.875% Preferred Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAR$F',
        name : "iStar Financial Inc. Series F Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAR$G',
        name : "iStar Financial Inc. Preferred Stock Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAR$I',
        name : "iStar Financial Inc. Preferred Series I",
        exchange : 'NYSE'
      },
      {
        symbol : 'STAY',
        name : "Extended Stay America, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STC',
        name : "Stewart Information Services Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STE',
        name : "STERIS Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STI',
        name : "SunTrust Banks, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STI$A',
        name : "SunTrust Banks, Inc. Dep Shs repstg 1/4000 Perpetual Pfd Stk Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'STI$E',
        name : "SunTrust Banks, Inc. Depositary Shares Representing Perpetual Preferred Series E",
        exchange : 'NYSE'
      },
      {
        symbol : 'STI.A',
        name : "SunTrust Banks, Inc. Class A Warrant (Expiring December 31, 2018)",
        exchange : 'NYSE'
      },
      {
        symbol : 'STI.B',
        name : "SunTrust Banks, Inc. Class B Warrant (Expiring November 14, 2018)",
        exchange : 'NYSE'
      },
      {
        symbol : 'STJ',
        name : "St. Jude Medical, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STK',
        name : "Columbia Seligman Premium Technology Growth Fund Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'STL',
        name : "Sterling Bancorp",
        exchange : 'NYSE'
      },
      {
        symbol : 'STM',
        name : "STMicroelectronics N.V. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STN',
        name : "Stantec Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STNG',
        name : "Scorpio Tankers Inc. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'STO',
        name : "Statoil ASA",
        exchange : 'NYSE'
      },
      {
        symbol : 'STON',
        name : "StoneMor Partners L.P. Common Unit Rep Limited Partnership Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'STOR',
        name : "STORE Capital Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STR',
        name : "Questar Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STRI',
        name : "STR Holdings, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STT',
        name : "State Street Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STT$C',
        name : "State Street Corporation Dep Shs Representing 1/4000 Ownership Int In Sh Non Cum (Perpertual Pfd Stk Ser C)",
        exchange : 'NYSE'
      },
      {
        symbol : 'STT$D',
        name : "State Street Corporation Depositary Shares representing 1/4000th Perpetual Preferred Series D",
        exchange : 'NYSE'
      },
      {
        symbol : 'STT$E',
        name : "State Street Corporation Depository Shares, each representing a 1/4,000th ownership interest in a share of Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'STV',
        name : "China Digital TV Holding Co., Ltd. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'STWD',
        name : "STARWOOD PROPERTY TRUST, INC. Starwood Property Trust Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'STZ',
        name : "Constellation Brands, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'STZ.B',
        name : "Constellation Brands, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SU',
        name : "Suncor Energy  Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SUI',
        name : "Sun Communities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SUI$A',
        name : "Sun Communities, Inc. Preferred Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'SUN',
        name : "Sunoco LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SUNE',
        name : "SunEdison, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SUP',
        name : "Superior Industries International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SVM',
        name : "Silvercorp Metals Inc Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SVU',
        name : "SuperValu Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWAY',
        name : "Starwood Waypoint Residential Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWC',
        name : "Stillwater Mining Company Common Stock ($0.01 Par Value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWFT',
        name : "Swift Transportation Company Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWH',
        name : "Stanley Black & Decker, Inc. Corp Unit 2013",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWI',
        name : "Solarwinds, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWJ',
        name : "Stanley Black & Decker, Inc. 5.75% Junior Subordinated Debenture due 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWK',
        name : "Stanley Black & Decker, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWM',
        name : "Schweitzer",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWN',
        name : "Southwestern Energy Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWU',
        name : "Stanley Black & Decker, Inc Corporate Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWX',
        name : "Southwest Gas Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWY',
        name : "Safeway Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SWZ',
        name : "Swiss Helvetia Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SXC',
        name : "SunCoke Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SXCP',
        name : "SunCoke Energy Partners, L.P. Common Units Representing Limited partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SXE',
        name : "Southcross Energy Partners, L.P. Common Units representing limited partner interest in the Partnership",
        exchange : 'NYSE'
      },
      {
        symbol : 'SXI',
        name : "Standex International Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SXL',
        name : "Sunoco Logistics Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'SXT',
        name : "Sensient Technologies Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SYA',
        name : "Symetra Financial Corporation Common Stock $0.01 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'SYF',
        name : "Synchrony Financial Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SYK',
        name : "Stryker Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SYT',
        name : "Syngenta AG Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SYX',
        name : "Systemax Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SYY',
        name : "Sysco Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'SZC',
        name : "Cushing Renaissance Fund (The) Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'T',
        name : "AT&T Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'TA',
        name : "TravelCenters of America LLC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TAC',
        name : "TransAlta Corporation Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TAHO',
        name : "Tahoe Resources, Inc. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TAI',
        name : "Transamerica Income Shares, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TAL',
        name : "TAL International Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TANN',
        name : "TravelCenters of America LLC 8.25% Senior Notes due 2028",
        exchange : 'NYSE'
      },
      {
        symbol : 'TANO',
        name : "TravelCenters of America LLC 8.00% Senior Notes due 2029",
        exchange : 'NYSE'
      },
      {
        symbol : 'TAOM',
        name : "Taomee Holdings Limited American Depositary Shares (each representing 20 ordinary shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TAP',
        name : "Molson Coors Brewing Company Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TAP.A',
        name : "Molson Coors Brewing  Company Molson Coors Brewing Company Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TARO',
        name : "Taro Pharmaceutical Industries Ltd. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TBI',
        name : "TrueBlue, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TC',
        name : "Thompson Creek Metals Company Inc. Ordinary Shares (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCAP',
        name : "Triangle Capital Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCB',
        name : "TCF Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCB$B',
        name : "TCF Financial Corporation Del Dep Shs Repstg 1/1000 Pfd Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCB$C',
        name : "TCF Financial Corporation Perp Pfd Ser B",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCB.W',
        name : "TCF Financial Corporation TCF Financial Corporation Warrants",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCC',
        name : "Triangle Capital Corporation 7.00% Senior Notes due 2019",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCCA',
        name : "Triangle Capital Corporation 6.375% Senior Notes due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCI',
        name : "Transcontinental Realty Investors, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCK',
        name : "Teck Resources Ltd Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCO',
        name : "Taubman Centers, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCO$J',
        name : "Taubman Centers, Inc. Preferred Shares Series J",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCO$K',
        name : "Taubman Centers, Inc. Preferred Series K",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCP',
        name : "TC PipeLines, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCPI',
        name : "TCP International Holdings Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCRX',
        name : "THL Credit, Inc. 6.75% Notes due 2021",
        exchange : 'NYSE'
      },
      {
        symbol : 'TCS',
        name : "Container Store (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TD',
        name : "Toronto Dominion Bank (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDA',
        name : "Telephone and Data Systems, Inc. 5.875% Senior Notes due 2061",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDC',
        name : "Teradata Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDE',
        name : "Telephone and Data Systems, Inc. 6.875% Senior Notes due 2059",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDF',
        name : "Templeton Dragon Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDG',
        name : "Transdigm Group Incorporated Transdigm Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDI',
        name : "Telephone and Data Systems, Inc. Sr Nt",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDJ',
        name : "Telephone and Data Systems, Inc. 7% Senior Notes due 2060",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDS',
        name : "Telephone and Data Systems, Inc. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDW',
        name : "Tidewater Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TDY',
        name : "Teledyne Technologies Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TE',
        name : "TECO Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEF',
        name : "Telefonica SA Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEG',
        name : "Integrys Energy Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEI',
        name : "Templeton Emerging Markets Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEL',
        name : "TE Connectivity Ltd. New Switzerland Registered Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEN',
        name : "Tenneco Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEO',
        name : "Telecom Argentina SA",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEP',
        name : "Tallgrass Energy Partners, LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'TER',
        name : "Teradyne, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEU',
        name : "Box Ships Inc. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEU$C',
        name : "Box Ships Inc. 9.00% Series C Cumulative Perpetual Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEVA',
        name : "Teva Pharmaceutical Industries Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TEX',
        name : "Terex Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TFG',
        name : "Fixed Income Trust for Goldman Sachs Subordinated Notes, Series 2011",
        exchange : 'NYSE'
      },
      {
        symbol : 'TFX',
        name : "Teleflex Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TG',
        name : "Tredegar Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TGH',
        name : "Textainer Group Holdings Limited Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TGI',
        name : "Triumph Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TGP',
        name : "Teekay LNG Partners L.P.",
        exchange : 'NYSE'
      },
      {
        symbol : 'TGS',
        name : "Transportadora de Gas del Sur SA TGS Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TGT',
        name : "Target Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'THC',
        name : "Tenet Healthcare Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'THG',
        name : "Hanover Insurance Group Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'THGA',
        name : "The Hanover Insurance Group, Inc. 6.35% Subordinated Debentures due 2053",
        exchange : 'NYSE'
      },
      {
        symbol : 'THO',
        name : "Thor Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'THQ',
        name : "Tekla Healthcare Opportunies Fund Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'THR',
        name : "Thermon Group Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'THS',
        name : "Treehouse Foods, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TI',
        name : "Telecom Italia S.P.A. New",
        exchange : 'NYSE'
      },
      {
        symbol : 'TI.A',
        name : "Telecom Italia S.P.A. New",
        exchange : 'NYSE'
      },
      {
        symbol : 'TIF',
        name : "Tiffany & Co. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TIME',
        name : "Time Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TISI',
        name : "Team, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TJX',
        name : "TJX Companies, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TK',
        name : "Teekay Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TKC',
        name : "Turkcell Iletisim Hizmetleri AS Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TKF',
        name : "Turkish Investment Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TKR',
        name : "Timken Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TLI',
        name : "LMP Corporate Loan Fund Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TLK',
        name : "PT Telekomunikasi Indonesia, Tbk",
        exchange : 'NYSE'
      },
      {
        symbol : 'TLLP',
        name : "Tesoro Logistics LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'TLM',
        name : "Talisman Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TLP',
        name : "Transmontaigne Partners L.P. Transmontaigne Partners L.P. Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'TLYS',
        name : "Tilly's, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TM',
        name : "Toyota Motor Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMH',
        name : "Team Health Holdings, Inc. Team Health Holdings, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMHC',
        name : "Taylor Morrison Home Corporation Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMK',
        name : "Torchmark Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMK$B',
        name : "Torchmark Corporation 5.875% Junior Subordinated Debenture due 2052",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMO',
        name : "Thermo Fisher Scientific Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMST',
        name : "Timken Steel Corporation Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMUS',
        name : "T",
        exchange : 'NYSE'
      },
      {
        symbol : 'TMUS$A',
        name : "T",
        exchange : 'NYSE'
      },
      {
        symbol : 'TNC',
        name : "Tennant Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TNET',
        name : "TriNet Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TNH',
        name : "Terra Nitrogen Company, L.P. Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'TNK',
        name : "Teekay Tankers Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'TNP',
        name : "Tsakos Energy Navigation Ltd Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TNP$B',
        name : "Tsakos Energy Navigation Ltd Red Perp Pfd Ser B% (Bermuda)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TNP$C',
        name : "Tsakos Energy Navigation Ltd 8.875% Series C Preferred Cumulative Redeemable Perpetual Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TOL',
        name : "Toll Brothers Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TOO',
        name : "Teekay Offshore Partners L.P. Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'TOO$A',
        name : "Teekay Offshore Partners L.P. 7.25% Series A Redeemable Preferred Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'TOT',
        name : "Total S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'TOWR',
        name : "Tower International, Inc. Common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPC',
        name : "Tutor Perini Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPH',
        name : "Tri Pointe Homes, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPL',
        name : "Texas Pacific Land Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPRE',
        name : "Third Point Reinsurance Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPUB',
        name : "Tribune Publishing Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPVG',
        name : "TriplePoint Venture Growth BDC Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPX',
        name : "Tempur Sealy International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TPZ',
        name : "Tortoise Power and Energy Infrastructure Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TR',
        name : "Tootsie Roll Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRC',
        name : "Tejon Ranch Co Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRCO',
        name : "Tribune Media Company Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TREC',
        name : "Trecora Resources Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TREX',
        name : "Trex Company, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRF',
        name : "Templeton Russia and East European Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRGP',
        name : "Targa Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRI',
        name : "Thomson Reuters Corp Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRK',
        name : "Speedway Motorsports, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRLA',
        name : "Trulia, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRMR',
        name : "Tremor Video, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRN',
        name : "Trinity Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRNO',
        name : "Terreno Realty Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRNO$A',
        name : "Terreno Realty Corporation Preferred Shares Series A",
        exchange : 'NYSE'
      },
      {
        symbol : 'TROX',
        name : "Tronox Limited Ordinary Shares Class A $0.01 par",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRP',
        name : "TransCanada Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRQ',
        name : "Turquoise Hill Resources Ltd. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRR',
        name : "TRC Companies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRUP',
        name : "Trupanion, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRV',
        name : "The Travelers Companies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TRW',
        name : "TRW Automotive Holdings Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TS',
        name : "Tenaris S.A. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSE',
        name : "Trinseo S.A. Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSI',
        name : "TCW Strategic Income Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSL',
        name : "Trina Solar Limited Sponsored ADR (Cayman Islands)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSLF',
        name : "THL Credit Senior Loan Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSLX',
        name : "TPG Specialty Lending, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSM',
        name : "Taiwan Semiconductor Manufacturing Company Ltd.",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSN',
        name : "Tyson Foods, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSNU',
        name : "Tyson Foods, Inc. Tangible Equity Unit 1 Prepaid Stock Purchase Contact & 1 Sr (Amortorizing NT)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSO',
        name : "Tesoro Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSQ',
        name : "Townsquare Media, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSS',
        name : "Total System Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TSU',
        name : "TIM Participacoes S.A. American Depositary Shares (Each representing 5 Common Shares)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TTC',
        name : "Toro Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TTF',
        name : "Thai Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TTI',
        name : "Tetra Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TTM',
        name : "Tata Motors Ltd Tata Motors Limited",
        exchange : 'NYSE'
      },
      {
        symbol : 'TTP',
        name : "Tortoise Pipeline & Energy Fund, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TU',
        name : "Telus Corporation Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TUMI',
        name : "Tumi Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TUP',
        name : "Tupperware Brands Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TV',
        name : "Grupo Televisa S.A. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TVC',
        name : "Tennessee Valley Authority Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TVE',
        name : "Tennessee Valley Authority",
        exchange : 'NYSE'
      },
      {
        symbol : 'TVPT',
        name : "Travelport Worldwide Limited Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TW',
        name : "Towers Watson & Co Common Stock Class A",
        exchange : 'NYSE'
      },
      {
        symbol : 'TWC',
        name : "Time Warner Cable Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TWI',
        name : "Titan International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TWN',
        name : "Taiwan Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TWO',
        name : "Two Harbors Investment Corp",
        exchange : 'NYSE'
      },
      {
        symbol : 'TWTR',
        name : "Twitter, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TWX',
        name : "Time Warner Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TX',
        name : "Ternium S.A. Ternium S.A. American Depositary Shares (each representing ten shares, USD1.00 par value)",
        exchange : 'NYSE'
      },
      {
        symbol : 'TXT',
        name : "Textron Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TXTR',
        name : "Textura Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TY',
        name : "Tri Continental Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TY$',
        name : "Tri Continental Corporation Preferred Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TYC',
        name : "Tyco International plc (Ireland) Ordinary Share",
        exchange : 'NYSE'
      },
      {
        symbol : 'TYG',
        name : "Tortoise Energy Infrastructure Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TYG$B',
        name : "Tortoise Energy Infrastructure Corporation Mandatory Red Pfd Ser B",
        exchange : 'NYSE'
      },
      {
        symbol : 'TYG$C',
        name : "Tortoise Energy Infrastructure Corporation Series C Mandatory Redeemable Preferred Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'TYL',
        name : "Tyler Technologies, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'TZF',
        name : "Bear Stearns Depositor, Inc. Pfd Stk TRUCs Srs 2001",
        exchange : 'NYSE'
      },
      {
        symbol : 'UA',
        name : "Under Armour, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UAL',
        name : "United Continental Holdings",
        exchange : 'NYSE'
      },
      {
        symbol : 'UAM',
        name : "Universal American Corporation New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UAN',
        name : "CVR Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'UBA',
        name : "Urstadt Biddle Properties Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UBP',
        name : "Urstadt Biddle Properties Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UBP$F',
        name : "Urstadt Biddle Properties Inc. Pfd Ser F",
        exchange : 'NYSE'
      },
      {
        symbol : 'UBP$G',
        name : "Urstadt Biddle Properties Inc. Preferred Stock Series G 6.75%",
        exchange : 'NYSE'
      },
      {
        symbol : 'UBS',
        name : "UBS Group AG Registered Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'UBS$D',
        name : "UBS AG Trust Preferred Securities",
        exchange : 'NYSE'
      },
      {
        symbol : 'UCP',
        name : "UCP, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UDR',
        name : "UDR, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UE.V',
        name : "Urban Edge Properties Common Shares of Beneficial Interest When Issued",
        exchange : 'NYSE'
      },
      {
        symbol : 'UFI',
        name : "Unifi, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UFS',
        name : "Domtar Corporation (NEW) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UGI',
        name : "UGI Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UGP',
        name : "Ultrapar Participacoes S.A. (New) American Depositary Shares (Each representing one Common Share)",
        exchange : 'NYSE'
      },
      {
        symbol : 'UHS',
        name : "Universal Health Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UHT',
        name : "Universal Health Realty Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UIL',
        name : "UIL Holdings Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UIS',
        name : "Unisys Corporation New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UL',
        name : "Unilever PLC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UMC',
        name : "United Microelectronics Corporation (NEW) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UMH',
        name : "UMH Properties, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UMH$A',
        name : "UMH Properties, Inc. 8.25% Series A Cumulative Redeemable Preferred Stock, Liquidation Preference $25 per share",
        exchange : 'NYSE'
      },
      {
        symbol : 'UN',
        name : "Unilever NV Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UNF',
        name : "Unifirst Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UNH',
        name : "UnitedHealth Group Incorporated Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UNM',
        name : "Unum Group Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UNP',
        name : "Union Pacific Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UNT',
        name : "Unit Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UPL',
        name : "Ultra Petroleum Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UPS',
        name : "United Parcel Service, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'URI',
        name : "United Rentals, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'USA',
        name : "Liberty All",
        exchange : 'NYSE'
      },
      {
        symbol : 'USAC',
        name : "USA Compression Partners, LP Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'USB',
        name : "U.S. Bancorp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'USB$A',
        name : "U.S. Bancorp Depositary Shares, Each representing a 1/100th interest in a share of Series A Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'USB$H',
        name : "U.S. Bancorp Depositary Shares repstg 1/1000th Pfd Ser B",
        exchange : 'NYSE'
      },
      {
        symbol : 'USB$M',
        name : "U.S. Bancorp Depositary Shares Representing 1/1000th Interest in a Shares Series F",
        exchange : 'NYSE'
      },
      {
        symbol : 'USB$N',
        name : "US Bancorp Del DEPOSITARY SH S G",
        exchange : 'NYSE'
      },
      {
        symbol : 'USB$O',
        name : "US Bancorp Del Dep Shs Repstg 1/1000th Perp Pfd Ser H",
        exchange : 'NYSE'
      },
      {
        symbol : 'USDP',
        name : "USD Partners LP Common Units representing limited partner interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'USG',
        name : "USG Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'USM',
        name : "United States Cellular Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'USNA',
        name : "USANA Health Sciences, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'USPH',
        name : "U.S. Physical Therapy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UTF',
        name : "Cohen & Steers Infrastructure Fund, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UTI',
        name : "Universal Technical Institute Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UTL',
        name : "UNITIL Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UTX',
        name : "United Technologies Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UTX$A',
        name : "United Technologies Corp Corp Unit",
        exchange : 'NYSE'
      },
      {
        symbol : 'UVE',
        name : "UNIVERSAL INSURANCE HOLDINGS INC Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UVV',
        name : "Universal Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'UZA',
        name : "United States Cellular Corporation 6.95% Senior Notes due 2060",
        exchange : 'NYSE'
      },
      {
        symbol : 'UZB',
        name : "United States Cellular Corporation 7.25% Senior Notes due 2063",
        exchange : 'NYSE'
      },
      {
        symbol : 'V',
        name : "Visa Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'VAC',
        name : "Marriot Vacations Worldwide Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VAL',
        name : "Valspar Corporation (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VALE',
        name : "VALE S.A.  American Depositary Shares Each Representing one common share",
        exchange : 'NYSE'
      },
      {
        symbol : 'VALE.P',
        name : "VALE S.A.",
        exchange : 'NYSE'
      },
      {
        symbol : 'VAR',
        name : "Varian Medical Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VBF',
        name : "Invesco Bond Fund Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VC',
        name : "Visteon Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VCO',
        name : "Vina Concha Y Toro Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VCRA',
        name : "Vocera Communications, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VCV',
        name : "Invesco California Value Municipal Income Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VEC',
        name : "Vectrus, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VEEV',
        name : "Veeva Systems Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VET',
        name : "Vermilion Energy Inc. Common (Canada)",
        exchange : 'NYSE'
      },
      {
        symbol : 'VFC',
        name : "V.F. Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VG',
        name : "Vonage Holdings Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VGI',
        name : "Virtus Global Multi",
        exchange : 'NYSE'
      },
      {
        symbol : 'VGM',
        name : "Invesco Trust for Investment Grade Municipals Common Stock (DE)",
        exchange : 'NYSE'
      },
      {
        symbol : 'VGR',
        name : "Vector Group Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VHI',
        name : "Valhi, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VIPS',
        name : "Vipshop Holdings Limited American Depositary Shares, each representing two ordinary shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'VIV',
        name : "Telefonica Brasil, S.A. ADS",
        exchange : 'NYSE'
      },
      {
        symbol : 'VJET',
        name : "voxeljet AG American Depositary Shares, each representing one",
        exchange : 'NYSE'
      },
      {
        symbol : 'VKQ',
        name : "Invesco Municipal Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VLO',
        name : "Valero Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VLP',
        name : "Valero Energy Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'VLRS',
        name : "Controladora Vuela Compania de Aviacion, S.A.B. de C.V. American Depositary Shares, each representing ten (10) Ordinary Participation Certificates",
        exchange : 'NYSE'
      },
      {
        symbol : 'VLT',
        name : "Invesco High Income Trust II",
        exchange : 'NYSE'
      },
      {
        symbol : 'VLY',
        name : "Valley National Bancorp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VLY.W',
        name : "Valley National Bancorp Warrants Expiring 11/14/2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'VMC',
        name : "Vulcan Materials Company (Holding Company) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VMEM',
        name : "Violin Memory, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VMI',
        name : "Valmont Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VMO',
        name : "Invesco Municipal Opportunity Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VMW',
        name : "Vmware, Inc. Common stock, Class A",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNCE',
        name : "Vince Holding Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNO',
        name : "Vornado Realty Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNO$G',
        name : "Vornado Realty Trust Preferred Series G",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNO$I',
        name : "Vornado Realty Trust Preferred Series I",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNO$J',
        name : "Vornado Realty Trust PFD CUMULATIVE RED SER J %",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNO$K',
        name : "Vornado Realty Trust Pfd S K",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNO$L',
        name : "Vornado Realty Trust Pfd Ser L %",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNO.V',
        name : "Vornado Realty Trust Common Shares of Beneficial Interest Ex",
        exchange : 'NYSE'
      },
      {
        symbol : 'VNTV',
        name : "Vantiv, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VOC',
        name : "VOC Energy Trust Units of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'VOYA',
        name : "Voya Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VPG',
        name : "Vishay Precision Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VPV',
        name : "Invesco Pennsylvania Value Municipal Income Trust Common Stock (DE)",
        exchange : 'NYSE'
      },
      {
        symbol : 'VR',
        name : "Validus Holdings, Ltd. Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'VRS',
        name : "Verso Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VRTV',
        name : "Veritiv Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VRX',
        name : "Valeant Pharmaceuticals International, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'VSH',
        name : "Vishay Intertechnology, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VSI',
        name : "Vitamin Shoppe, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VSLR',
        name : "Vivint Solar, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VTA',
        name : "Invesco Credit Opportunities Fund Common Shares of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'VTN',
        name : "Invesco Trust for Investment Grade New York Municipals Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VTR',
        name : "Ventas, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VTRB',
        name : "Ventas Realty, Limited Partnership // Ventas Capital Corporation 5.45% Senior Notes due 2043",
        exchange : 'NYSE'
      },
      {
        symbol : 'VTTI',
        name : "VTTI Energy Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'VVC',
        name : "Vectren Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VVI',
        name : "Viad Corp Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VVR',
        name : "Invesco Senior Income Trust Common Stock (DE)",
        exchange : 'NYSE'
      },
      {
        symbol : 'VZ',
        name : "Verizon Communications Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'VZA',
        name : "Verizon Communications Inc. 5.90% Notes due 2054",
        exchange : 'NYSE'
      },
      {
        symbol : 'W',
        name : "Wayfair Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WAB',
        name : "Westinghouse Air Brake Technologies Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WAC',
        name : "Walter Investment Management Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WAGE',
        name : "WageWorks, Inc. Common Stock $0.001 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'WAIR',
        name : "Wesco Aircraft Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WAL',
        name : "Western Alliance Bancorporation Common Stock (DE)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WAT',
        name : "Waters Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WBAI',
        name : "500.com Limited American Depositary Shares, each representing 10 Class A shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'WBC',
        name : "Wabco Holdings Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WBK',
        name : "Westpac Banking Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WBS',
        name : "Webster Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WBS$E',
        name : "Webster Financial Corporation Dep Shs Repstg 1/1000th Perp Pfd Ser E",
        exchange : 'NYSE'
      },
      {
        symbol : 'WBS.W',
        name : "Webster Financial Corporation Warrant (expiring November 21, 2018)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WCC',
        name : "WESCO International, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WCG',
        name : "Wellcare Health Plans, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WCIC',
        name : "WCI Communities, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WCN',
        name : "Waste Connections, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WD',
        name : "Walker & Dunlop, Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WDAY',
        name : "Workday, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WDR',
        name : "Waddell & Reed Financial, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WEA',
        name : "Western Asset Bond Fund Share of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'WEC',
        name : "Wisconsin Energy Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WES',
        name : "Western Gas Partners, LP Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'WEX',
        name : "WEX Inc. common stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WF',
        name : "Woori Bank American Depositary Shares (Each representing 3 shares of Common Stock)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC',
        name : "Wells Fargo & Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$J',
        name : "Wells Fargo & Company Wells Fargo & Company 8.00% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$L',
        name : "Wells Fargo & Company Wells Fargo & Company 7.50% Non",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$N',
        name : "Wells Fargo & Company Dep Shs Repstg 1/1000th Perp Pfd Cl A Ser N",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$O',
        name : "Wells Fargo & Company Depositary Shares Representing 1/1000th Perpetual Preferred Class A Series O",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$P',
        name : "Wells Fargo & Company Dep Shs Repstg 1/1000th Int Non Cum Perp Cl A Pfd (Ser P)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$Q',
        name : "Wells Fargo & Company Depositary Shares Representing 1/1000th Interest Perpetual Preferred Class A Series Q Fixed to Floating",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$R',
        name : "Wells Fargo & Company Dep Shs Repstg 1/1000th Int Perp Pfd Cl A (Ser R Fixed To Flltg)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC$T',
        name : "Wells Fargo & Company New Depository Share Representing 1/1000th Perp. Preferred Class A Series T",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFC.W',
        name : "Wells Fargo & Company Warrants expiring October 28, 2018",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFE$A',
        name : "Wells Fargo & Company Cumulative Perpetual Preferred Stock, Series A, Liquidation Preference $25 per share",
        exchange : 'NYSE'
      },
      {
        symbol : 'WFT',
        name : "Weatherford International plc (Ireland)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WG',
        name : "Willbros Group, Inc. (DE) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WGL',
        name : "WGL Holdings IncCommon Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WGO',
        name : "Winnebago Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WGP',
        name : "Western Gas Equity Partners, LP Common Units Representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'WHG',
        name : "Westwood Holdings Group Inc Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WHR',
        name : "Whirlpool Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WHX',
        name : "Whiting USA Trust I Whiting USA Trust I",
        exchange : 'NYSE'
      },
      {
        symbol : 'WHZ',
        name : "Whiting USA Trust II Units of Beneficial Interest",
        exchange : 'NYSE'
      },
      {
        symbol : 'WIA',
        name : "Western Asset/Claymore Inflation",
        exchange : 'NYSE'
      },
      {
        symbol : 'WIT',
        name : "Wipro Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WIW',
        name : "Western Asset/Claymore Inflation",
        exchange : 'NYSE'
      },
      {
        symbol : 'WK',
        name : "Workiva Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WLH',
        name : "Lyon William Homes Common Stock (Class A)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WLK',
        name : "Westlake Chemical Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WLKP',
        name : "Westlake Chemical Partners LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'WLL',
        name : "Whiting Petroleum Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WLT',
        name : "Walter Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WM',
        name : "Waste Management, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WMB',
        name : "Williams Companies, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WMC',
        name : "Western Asset Mortgage Capital Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WMK',
        name : "Weis Markets, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WMLP',
        name : "Westmoreland Resource Partners, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'WMS',
        name : "Advanced Drainage Systems, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WMT',
        name : "Wal",
        exchange : 'NYSE'
      },
      {
        symbol : 'WNC',
        name : "Wabash National Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WNR',
        name : "Western Refining Inc. Western Refining, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WNRL',
        name : "Western Refining Logistics, LP Common Units representing limited partner interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'WNS',
        name : "WNS (Holdings) Limited Sponsored ADR (Jersey)",
        exchange : 'NYSE'
      },
      {
        symbol : 'WOR',
        name : "Worthington Industries, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WPC',
        name : "W.P. Carey Inc. REIT",
        exchange : 'NYSE'
      },
      {
        symbol : 'WPG',
        name : "Washington Prime Group Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WPP',
        name : "Wausau Paper Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WPT',
        name : "World Point Terminals, LP Common Units representing Limited Partner Interests",
        exchange : 'NYSE'
      },
      {
        symbol : 'WPX',
        name : "WPX Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WPZ',
        name : "Williams Partners L.P. Common Units",
        exchange : 'NYSE'
      },
      {
        symbol : 'WR',
        name : "Westar Energy, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WRB',
        name : "W.R. Berkley Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WRB$B',
        name : "W.R. Berkley Corporation 5.625% Subordinated Debentures due 2053",
        exchange : 'NYSE'
      },
      {
        symbol : 'WRE',
        name : "Washington Real Estate Investment Trust Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WRI',
        name : "Weingarten Realty Investors Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WRI$F',
        name : "Weingarten Realty Investors Depository Shares Restg 1/100 Pfd Ser F",
        exchange : 'NYSE'
      },
      {
        symbol : 'WRT',
        name : "Winthrop Realty Trust 7.75% Senior Notes due 2022",
        exchange : 'NYSE'
      },
      {
        symbol : 'WSH',
        name : "Willis Group Holdings Public Limited (Ireland) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WSM',
        name : "Williams",
        exchange : 'NYSE'
      },
      {
        symbol : 'WSO',
        name : "Watsco, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WSO.B',
        name : "Watsco, Inc. Class B Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WSR',
        name : "Whitestone REIT Common Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'WST',
        name : "West Pharmaceutical Services, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WTI',
        name : "W&T Offshore, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WTM',
        name : "White Mountains Insurance Group, Ltd. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WTR',
        name : "Aqua America, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WTS',
        name : "Watts Water Technologies, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WTW',
        name : "Weight Watchers International Inc Weight Watchers International Inc",
        exchange : 'NYSE'
      },
      {
        symbol : 'WU',
        name : "Western Union Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WUBA',
        name : "58.com Inc. American Depositary Shares, each representing 2 Class A Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'WWAV',
        name : "Whitewave Foods Company (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WWE',
        name : "World Wrestling Entertainment, Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WWW',
        name : "Wolverine World Wide, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WX',
        name : "WuXi PharmaTech (Cayman) Inc. American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'WY',
        name : "Weyerhaeuser Company Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'WY$A',
        name : "Weyerhaeuser Company Pref Conv Ser A",
        exchange : 'NYSE'
      },
      {
        symbol : 'WYN',
        name : "Wyndham Worldwide Corp Common  Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'X',
        name : "United States Steel Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XCO',
        name : "EXCO Resources, Inc. Exco Resources, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XEC',
        name : "Cimarex Energy Co Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XEL',
        name : "Xcel Energy Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XIN',
        name : "Xinyuan Real Estate Co Ltd American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'XKE',
        name : "Lehman ABS Corporation Corporate",
        exchange : 'NYSE'
      },
      {
        symbol : 'XL',
        name : "XL Group plc",
        exchange : 'NYSE'
      },
      {
        symbol : 'XLS',
        name : "Exelis Inc. Common Stock New",
        exchange : 'NYSE'
      },
      {
        symbol : 'XNY',
        name : "China Xiniya Fashion Limited American Depositary Shares, each representing four ordinary shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'XOM',
        name : "Exxon Mobil Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XON',
        name : "Intrexon Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XOXO',
        name : "XO Group, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XPO',
        name : "XPO Logistics, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'XRM',
        name : "Xerium Technologies, Inc. New Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XRS',
        name : "TAL Education Group American Depositary Shares, each representing 2 Class A common shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'XRX',
        name : "Xerox Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'XUE',
        name : "Xueda Education Group American Depositary Shares, each representing two Ordinary Shares, $0.0001 par value",
        exchange : 'NYSE'
      },
      {
        symbol : 'XYL',
        name : "Xylem Inc. Common Stock New",
        exchange : 'NYSE'
      },
      {
        symbol : 'Y',
        name : "Alleghany Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'YDKN',
        name : "Yadkin Financial Corporation Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'YELP',
        name : "Yelp Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'YGE',
        name : "Yingli Green Energy Holding Company Limited ADR",
        exchange : 'NYSE'
      },
      {
        symbol : 'YOKU',
        name : "Youku Tudou Inc. American Depositary Shares, each representing 18 Class A ordinary shares.",
        exchange : 'NYSE'
      },
      {
        symbol : 'YPF',
        name : "YPF Sociedad Anonima Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'YUM',
        name : "Yum! Brands, Inc.",
        exchange : 'NYSE'
      },
      {
        symbol : 'YUME',
        name : "YuMe, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'YZC',
        name : "Yanzhou Coal Mining Company Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZA',
        name : "Zuoan Fashion Limited American Depositary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZAYO',
        name : "Zayo Group Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZB$A',
        name : "Zions Bancorporation Depositary Shares (Each representing 1/40th Interest in a Share of Series A Floating",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZB$F',
        name : "Zions Bancorporation Dep shs Repstg 1/40th Int Sh Ser F Fxd Rate Non Cum (Perp Pfd Stk)",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZB$G',
        name : "Zions Bancorporation Dep Shs Repstg 1/40th Perp Pfd Ser G",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZB$H',
        name : "Zions Bancorporation Dep Shs Repstg 1/40th Int Sh Ser H Perp Pfd Stk",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZBK',
        name : "Zions Bancorporation 6.95% Fixed",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZEN',
        name : "Zendesk, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZEP',
        name : "Zep Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZF',
        name : "Zweig Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZFC',
        name : "ZAIS Financial Corp. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZMH',
        name : "Zimmer Holdings, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZNH',
        name : "China Southern Airlines Company Limited Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZOES',
        name : "Zoe's Kitchen, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZPIN',
        name : "Zhaopin Limited American Depositary Shares, each reprenting two Ordinary Shares",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZQK',
        name : "Quiksilver, Inc. Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZTR',
        name : "Zweig Total Return Fund, Inc. (The) Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZTS',
        name : "Zoetis Inc. Class A Common Stock",
        exchange : 'NYSE'
      },
      {
        symbol : 'ZX',
        name : "China Zenix Auto International Limited American Depositary Shares, each representing four ordinary shares.",
        exchange : 'NYSE'
      }
    ], {});
  },

  down : (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stock', null, {});
  }
};

module.exports = seeds;
