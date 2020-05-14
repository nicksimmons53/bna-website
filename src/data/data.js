const pathogens = [
    {
        name: 'Aspergillus Niger (Black Mount)',
        desc: 'Destroyed by 1.5 to 2 mg/I'
    },
    {
        name: 'Bacillus Bacteria',
        desc: 'Destroyed by 0.2 m/I within 30 seconds'
    },
    {
        name: 'Bacillus Anthracis (causes anthrax in sheep, cattle and pigs. Also a human pathogen)',
        desc: 'Ozone susceptible'
    },
    {
        name: 'Bacillus cereus',
        desc: '99% destruction after 5-min at 0.12 mg/l in water'
    },
    {
        name: 'B. cereus (spores)',
        desc: '99% destruction after 5-min at 2.3 mg/l in water'
    },
    {
        name: 'Bacillus subtilis',
        desc: '90% reduction at 0.10-PPM for 33 minutes'
    },
    {
        name: 'Bacteriophage f2',
        desc: '99.99% destruction at 0.41 mg/l for 10-seconds in water'
    },
    {
        name: 'Botrytis cinerea',
        desc: '3.8 mg/l for 2 minutes'
    },
    {
        name: 'Candida Bacteria',
        desc: 'Ozone susceptible'
    },
    {
        name: 'Clavibacter michiganense',
        desc: '99.99% destruction at 1.1 mg/l for 5 minutes'
    },
    {
        name: 'Cladosporium',
        desc: '90% reduction at 0.10-PPM for 12.1 minutes'
    },
    {
        name: 'Clostridium Bacteria',
        desc: 'Ozone susceptible'
    },
    {
        name: 'Clostridium Botulinum Spores. Its toxin paralyses the central nerve system, being a poison multiplying in food and meals.',
        desc: '0.4 to 0.5 mg/l threshold value'
    },
    {
        name: 'Coxsackie Virus A9',
        desc: '95% destruction at 0.035 mg/l for 10-seconds in water'
    },
    {
        name: 'Coxsackie Virus B5',
        desc: '99.99% destruction at 0.4 mg/l for 2.5-minutes in sludge effluent'
    },
    {
        name: 'Diphtheria Pathogen',
        desc: 'Destroyed by 1.5 to 2 mg/l'
    },
    {
        name: 'Eberth Bacillus (Typhus abdomanalis). Spreads typically by aqueous infection and causes typhoid.',
        desc: 'Destroyed by 1.5 to 2 mg/l'
    },
    {
        name: 'Echo Virus 29: The virus most sensitive to ozone.',
        desc: 'After a contact time of 1 minute at 1 mg/l of ozone, 99.999 killed'
    },
    {
        name: 'Enteric virus',
        desc: '95% destruction at 4.1 mg/l for 29 minutes in raw wastewater'
    },
    {
        name: 'Escherichia Coli Bacteria (from feces)',
        desc: 'Destroyed by 0.2 mg/l within 30 seconds in air'
    },
    {
        name: 'E-coli (in clean water)',
        desc: '99.99% destruction at 0.25 mg/l for 1.6 minutes'
    },
    {
        name: 'E-coli (in wastewater)',
        desc: '99.9% destruction at 2.2 mg/l for 19 minutes'
    },
    {
        name: 'Encephalomyocarditis Virus',
        desc: 'Destroyed to zero level in less than 30 seconds with 0.1 to 0.8 mg/l.'
    },
    {
        name: 'Endamoebic Cysts Bacteria',
        desc: 'Ozone susceptible'
    },
    {
        name: 'Enterovirus Virus',
        desc: 'Destroyed to zero level in less than 30 seconds with 0.1 to 0.8 mg/l.'
    },
    {
        name: 'Fusarium oxysporum f.sp. lycopersici',
        desc: '1.1 mg/l for 10 minutes'
    },
    {
        name: 'Fusarium oxysporum f.sp. melonogea',
        desc: '99.99% destruction at 1.1 mg/l for 20 minutes'
    },
    {
        name: 'GDVII Virus',
        desc: 'Destroyed to zero level in less than 30 seconds with 0.1 to 0.8 mg/l.'
    },
    {
        name: 'Hepatitis A virus',
        desc: '99.5% reduction at 0.25 mg/l for 2-seconds in a phosphate buffer'
    },
    {
        name: 'Herpes Virus',
        desc: 'Destroyed to zero level in less than 30 seconds wit 0.1 to 0.8 mg/l.'
    },
    {
        name: 'Influenza Virus',
        desc: '0.4 to 0.5 mg/l threshold value'
    },
    {
        name: 'Klebs-Loffler Virus',
        desc: 'Destroyed by 1.5 to 2 mg/l'
    },
    {
        name: 'Legionella pneumophila',
        desc: '99.99% destruction at 0.32 mg/l for 20 minutes in distilled water'
    },
    {
        name: 'Listeria monocytogenes (air)',
        desc: '1.0-4.0 PPM for 5 log reduction (time not known)'
    },
    {
        name: 'Luminescent Basidiomycetes (species having no melanin pigment).',
        desc: 'Destroyed in 10 minutes at 100-PPM'
    },
    {
        name: 'Mucor piriformis',
        desc: '3.8 mg/l for 2 minutes'
    },
    {
        name: 'Mycobacterium avium (scientifically reviewed document)',
        desc: '99.9% with a CT value of 0.17 in water'
    },
    {
        name: 'Mycobacterium foruitum',
        desc: '90% destruction at 0.25 mg/l for 1.6 minutes in water'
    },
    {
        name: 'Penicillium Bacteria',
        desc: 'Ozone susceptible'
    },
    {
        name: 'Phytophthora parasitica',
        desc: '3.8 mg/l for 2 minutes'
    },
    {
        name: 'Poliomyelitis Virus',
        desc: '99.99% kill with 0.3 to 0.4 mg/l in 3-4 minutes'
    },
    {
        name: 'Poliovirus type 1',
        desc: '99.5% destruction at 0.25 mg/l for 1.6 minutes in water'
    },
    {
        name: 'Proteus Bacteria',
        desc: 'Very susceptible'
    },
    {
        name: 'Pseudomonas Bacteria',
        desc: 'Very susceptible'
    },
    {
        name: 'Rhabdovirus virus',
        desc: 'Destroyed to zero level in less than 30 seconds with 0.1 to 0.8 mg/l'
    },
    {
        name: 'Salmonella Bacteria',
        desc: 'Very susceptible'
    },
    {
        name: 'Salmonella typhimurium',
        desc: '99.99% destruction at 0.25 mg/l for 1.67 minutes in water'
    },
    {
        name: 'Schistosoma Bacteria',
        desc: 'Very susceptible'
    },
    {
        name: 'Staph epidermidis',
        desc: '90% reduction at 0.1-ppm for 1.7 min'
    },
    {
        name: 'Staphylococci',
        desc: 'Destroyed by 1.5 to 2.0 mg/l'
    },
    {
        name: 'Stomatitis Virus',
        desc: 'Destroyed to zero level in less than 30 seconds with 0.1 to 0.8 mg/l'
    },
    {
        name: 'Streptococcus Bacteria',
        desc: 'Destroyed by 0.2 mg/l within 30 seconds'
    },
    {
        name: 'Verticillium dahliae',
        desc: '99.99% destruction at 1.1 mg/l for 20 minutes'
    },
    {
        name: 'Vesicular Virus',
        desc: 'Destroyed to zero level in less than 30 seconds with 0.1 to 0.8 mg/l'
    },
    {
        name: 'Virbrio Cholera Bacteria',
        desc: 'Bacteria Very susceptible'
    },
    {
        name: 'Vicia Faba progeny',
        desc: 'Ozone causes chromosome aberration and its effect is twice that observed by the action of X-rays'
    },
];

export default pathogens;