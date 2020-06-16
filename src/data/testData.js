export default {
  nodes: [
    { name: 'A AGRICULTURE, FORESTRY AND FISHING (A)' },
    { name: 'C MANUFACTURING (C)' },
    { name: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)' },
    { name: 'D ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY (D)' },
    { name: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)' },
    { name: 'F CONSTRUCTION (F)' },
    { name: 'G WHOLESALE AND RETAIL TRADE (G)' },
    { name: 'H TRANSPORTATION AND STORAGE (H)' },
    { name: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)' },
    { name: 'J INFORMATION AND COMMUNICATION (J)' },
    { name: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)' },
    { name: 'L REAL ESTATE ACTIVITIES (L)' },
    { name: 'M PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES (M)' },
    { name: 'N ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES (N)' },
    { name: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)' },
    { name: 'P EDUCATION (P)' },
    { name: 'Q HUMAN HEALTH AND SOCIAL WORK ACTIVITIES (Q)' },
    { name: 'R ARTS, ENTERTAINMENT AND RECREATION (R)' },
    { name: 'S OTHER SERVICE ACTIVITIES (S)' },
    { name: '   Stock' },
    { name: 'V NON-ECONOMIC ACTIVITIES (V)' },
    { name: 'Z SME (Z)' }
  ],
  links: [
    {
      source: 'R ARTS, ENTERTAINMENT AND RECREATION (R)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 241000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1469.0
    },
    {
      source: 'Q HUMAN HEALTH AND SOCIAL WORK ACTIVITIES (Q)',
      target: 'F CONSTRUCTION (F)',
      value: 16000
    },
    {
      source: 'M PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES (M)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 62000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 1025
    },
    {
      source: 'S OTHER SERVICE ACTIVITIES (S)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1214
    },
    {
      source: 'A AGRICULTURE, FORESTRY AND FISHING (A)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 211000
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'H TRANSPORTATION AND STORAGE (H)',
      value: 413000
    },
    {
      source: 'Q HUMAN HEALTH AND SOCIAL WORK ACTIVITIES (Q)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 14000
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 927000
    },
    { source: 'G WHOLESALE AND RETAIL TRADE (G)', target: 'C MANUFACTURING (C)', value: 656000 },
    {
      source: 'M PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES (M)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 105000
    },
    {
      source: 'V NON-ECONOMIC ACTIVITIES (V)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 13556
    },
    {
      source: 'G WHOLESALE AND RETAIL TRADE (G)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 514000
    },
    {
      source: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1142
    },
    {
      source: 'Z SME (Z)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 15794
    },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 11000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 18000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'H TRANSPORTATION AND STORAGE (H)',
      value: 235000
    },
    {
      source: 'H TRANSPORTATION AND STORAGE (H)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 106000
    },
    { source: 'G WHOLESALE AND RETAIL TRADE (G)', target: 'F CONSTRUCTION (F)', value: 25000 },
    {
      source: 'V NON-ECONOMIC ACTIVITIES (V)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 2000
    },
    {
      source: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 3254
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'C MANUFACTURING (C)',
      value: 1000
    },
    {
      source: 'N ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES (N)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 86000
    },
    {
      source: 'A AGRICULTURE, FORESTRY AND FISHING (A)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 392000
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      value: 8000
    },
    { source: 'F CONSTRUCTION (F)', target: 'G WHOLESALE AND RETAIL TRADE (G)', value: 180000 },
    { source: 'S OTHER SERVICE ACTIVITIES (S)', target: 'F CONSTRUCTION (F)', value: 14000 },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1863
    },
    {
      source: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 7000
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'M PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES (M)',
      value: 105000
    },
    {
      source: 'G WHOLESALE AND RETAIL TRADE (G)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1058
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 373000
    },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 86000
    },
    {
      source: 'H TRANSPORTATION AND STORAGE (H)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 42000
    },
    {
      source: 'V NON-ECONOMIC ACTIVITIES (V)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 141714
    },
    {
      source: 'C MANUFACTURING (C)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1000
    },
    {
      source: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 6000
    },
    {
      source: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1493
    },
    {
      source: 'F CONSTRUCTION (F)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1510
    },
    {
      source: 'F CONSTRUCTION (F)',
      target: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      value: 1853
    },
    {
      source: 'A AGRICULTURE, FORESTRY AND FISHING (A)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 3444
    },
    { source: 'J INFORMATION AND COMMUNICATION (J)', target: 'F CONSTRUCTION (F)', value: 4000 },
    { source: 'L REAL ESTATE ACTIVITIES (L)', target: 'F CONSTRUCTION (F)', value: 10000 },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 217000
    },
    {
      source: 'G WHOLESALE AND RETAIL TRADE (G)',
      target: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      value: 1000
    },
    {
      source: 'G WHOLESALE AND RETAIL TRADE (G)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 5111
    },
    {
      source: 'F CONSTRUCTION (F)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 828000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 521000
    },
    {
      source: 'D ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY (D)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 18000
    },
    {
      source: 'H TRANSPORTATION AND STORAGE (H)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 235000
    },
    {
      source: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      target: 'F CONSTRUCTION (F)',
      value: 19000
    },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 466000
    },
    { source: 'P EDUCATION (P)', target: 'F CONSTRUCTION (F)', value: 19000 },
    {
      source: 'Q HUMAN HEALTH AND SOCIAL WORK ACTIVITIES (Q)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 3000
    },
    {
      source: 'F CONSTRUCTION (F)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 10000
    },
    {
      source: 'H TRANSPORTATION AND STORAGE (H)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 17000
    },
    {
      source: 'G WHOLESALE AND RETAIL TRADE (G)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 34000
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      value: 526000
    },
    {
      source: 'H TRANSPORTATION AND STORAGE (H)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 655000
    },
    {
      source: 'F CONSTRUCTION (F)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1489
    },
    {
      source: 'N ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES (N)',
      target: 'F CONSTRUCTION (F)',
      value: 2000
    },
    {
      source: 'G WHOLESALE AND RETAIL TRADE (G)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1333
    },
    {
      source: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 6000
    },
    {
      source: 'N ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES (N)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 6000
    },
    {
      source: 'D ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY (D)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 2000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 674000
    },
    {
      source: 'Q HUMAN HEALTH AND SOCIAL WORK ACTIVITIES (Q)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 496000
    },
    {
      source: 'S OTHER SERVICE ACTIVITIES (S)',
      target: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      value: 2000
    },
    {
      source: 'R ARTS, ENTERTAINMENT AND RECREATION (R)',
      target: 'F CONSTRUCTION (F)',
      value: 7000
    },
    {
      source: 'C MANUFACTURING (C)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 75000
    },
    {
      source: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)',
      target: 'H TRANSPORTATION AND STORAGE (H)',
      value: 106000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 218000
    },
    {
      source: 'C MANUFACTURING (C)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 58000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 24000
    },
    {
      source: 'L REAL ESTATE ACTIVITIES (L)',
      target: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)',
      value: 1000
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 395000
    },
    {
      source: 'J INFORMATION AND COMMUNICATION (J)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 126000
    },
    {
      source: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 259000
    },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'F CONSTRUCTION (F)',
      value: 15000
    },
    {
      source: 'L REAL ESTATE ACTIVITIES (L)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 105000
    },
    { source: 'C MANUFACTURING (C)', target: 'G WHOLESALE AND RETAIL TRADE (G)', value: 440000 },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 39000
    },
    {
      source: 'N ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES (N)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 174000
    },
    {
      source: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)',
      target: 'F CONSTRUCTION (F)',
      value: 101000
    },
    {
      source: 'V NON-ECONOMIC ACTIVITIES (V)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1336
    },
    {
      source: 'O PUBLIC ADMINISTRATION AND DEFENCE, COMPULSORY SOCIAL SECURITY (O)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 426000
    },
    {
      source: 'P EDUCATION (P)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 23000
    },
    {
      source: 'N ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES (N)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 1030
    },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      value: 23000
    },
    {
      source: 'R ARTS, ENTERTAINMENT AND RECREATION (R)',
      target: 'N ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES (N)',
      value: 106000
    },
    {
      source: 'I ACCOMMODATION AND FOOD SERVICE ACTIVITIES (I)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 310000
    },
    {
      source: 'G WHOLESALE AND RETAIL TRADE (G)',
      target: 'H TRANSPORTATION AND STORAGE (H)',
      value: 1434
    },
    {
      source: 'H TRANSPORTATION AND STORAGE (H)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 1434
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 36000
    },
    {
      source: 'A AGRICULTURE, FORESTRY AND FISHING (A)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 12000
    },
    {
      source: 'S OTHER SERVICE ACTIVITIES (S)',
      target: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      value: 37000
    },
    { source: 'V NON-ECONOMIC ACTIVITIES (V)', target: '   Stock', value: 528000 },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'H TRANSPORTATION AND STORAGE (H)',
      value: 1036
    },
    {
      source: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      target: 'G WHOLESALE AND RETAIL TRADE (G)',
      value: 77000
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'D ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY (D)',
      value: 66000
    },
    {
      source: 'E WATER SUPPLY, SEWERAGE, WASTE MANAGEMENT AND REMEDIATION (E)',
      target: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      value: 9000
    },
    {
      source: 'K FINANCIAL AND INSURANCE ACTIVITIES (K)',
      target: 'CA MANUFACTURE OF FOOD PRODUCTS, BEVERAGES AND TOBACCO PRODUCTS (CA)',
      value: 11000
    }
  ]
}