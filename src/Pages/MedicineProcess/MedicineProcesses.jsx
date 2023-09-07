import React from 'react';
import MedicineProcess from './MedicineProcess';

const MedicineProcesses = () => {
    const medicine_process = [
        {
            "id": 1,
            "img": "https://i.ibb.co/z4sG5ZT/img-1.jpg",
            "name": "Captopril",
            "process": {
                "pr": "Captopril is an angiotensin-converting enzyme (ACE) inhibitor commonly used as an antihypertensive medication to treat high blood pressure and certain heart conditions. The process of manufacturing Captopril involves several chemical synthesis steps. The specific process might be proprietary and subject to variation depending on the manufacturer, but the general steps are as follows:",
                "pr_1": "Raw Material Preparation: The first step is to obtain the necessary raw materials, which may include chemicals like L-cysteine, methyl propyl ketone, and hydrogen chloride. These chemicals must meet strict quality standards to ensure the final product's safety and efficacy.",
                "pr_2": "Activation of L-cysteine: L-cysteine is the starting material for Captopril synthesis. It is typically activated by reacting with a reagent such as thionyl chloride to form an intermediate compound.",
                "pr_3": "Acetylation: The activated L-cysteine intermediate is then acetylated by adding an acetyl group (CH3CO) to one end of the molecule, converting it into N-acetyl-L-cysteine.",
                "pr_4": "Formation of Mercaptopropionic Ac : The N-acetyl-L-cysteine is subjected to a chemical reaction that removes the acetyl group and replaces it with a propyl group (-CH2CH2CH3), resulting in the formation of mercaptopropionic acid.",
                "pr_5": "Conversion to Captopril: The mercaptopropionic acid is then reacted with other chemicals to undergo further transformations, leading to the formation of Captopril.",
                "pr_6": "Purification and Isolation: After the synthesis, the Captopril product is purified and isolated from other reaction by-products and impurities. This step is crucial to ensure the final product's quality and safety.",
                "pr_7": "Formulation and Packaging: Once the Captopril has been synthesized and purified, it is formulated into the desired dosage forms, such as tablets or capsules. The medication may also be combined with other ingredients or excipients to improve stability and patient compliance. Finally, the medicine is packaged in appropriate containers.",
                "pr_8": "Quality Control: Throughout the manufacturing process, quality control checks are performed to verify the product's consistency, potency, and purity. The final product must meet strict pharmaceutical quality standards and regulatory requirements.",
                "pr_l": "It's important to note that the synthesis of pharmaceuticals is a complex and highly regulated process. Manufacturers must adhere to Good Manufacturing Practices (GMP) and stringent quality control measures to ensure the safety and efficacy of the final product. The specific process and details may vary depending on the manufacturer and the country's regulatory guidelines."
            }
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/TwTGPCb/img-2.jpg",
            "name": "Eptifibatide",
            "process": {
                "pr": "Eptifibatide is a medication used to prevent blood clots in certain medical conditions. It belongs to a class of drugs known as glycoprotein IIb/IIIa inhibitors. Eptifibatide is typically manufactured through a complex biotechnological process involving genetic engineering and fermentation techniques. The following is an overview of the general process used to produce Eptifibatide:",
                "pr_1": "Identifying the target gene: Scientists first identify and isolate the gene responsible for producing the desired protein, which in this case is the Eptifibatide peptide.",
                "pr_2": "Genetic engineering: The isolated gene is then inserted into a suitable host organism, often a bacterium or yeast. This host organism will serve as a factory for producing the Eptifibatide peptide.",
                "pr_3": "Creating a recombinant organism: The genetically modified host organism is cultivated and allowed to multiply. As it reproduces, it produces multiple copies of the target gene, resulting in large quantities of the Eptifibatide peptide.",
                "pr_4": "Fermentation: The recombinant host organism is grown in a bioreactor under controlled conditions. This process is known as fermentation. During fermentation, the host organism consumes nutrients and synthesizes the Eptifibatide peptide.",
                "pr_5": "Purification: After fermentation, the mixture obtained contains the Eptifibatide peptide along with various other components from the host organism. Several purification steps are carried out to isolate and extract the Eptifibatide peptide in its pure form. These steps often involve filtration, chromatography, and other separation techniques.",
                "pr_6": "Formulation: Once the Eptifibatide peptide is purified, it is formulated into the final pharmaceutical product. The formulation may include stabilizers, preservatives, and other excipients to ensure the drug's stability and efficacy.",
                "pr_7": "Quality control: Throughout the manufacturing process, strict quality control measures are implemented to ensure the final product meets safety and efficacy standards. The drug undergoes various tests to check for purity, potency, and absence of contaminants.",
                "pr_8": "Packaging and distribution: After passing quality control, the Eptifibatide medicine is packaged into vials, syringes, or other appropriate forms and labeled with necessary information, including dosage instructions and expiration dates. The finished product is then distributed to hospitals, clinics, and pharmacies for use in patients.",
                "pr_l": "It's important to note that the exact manufacturing process may vary depending on the specific manufacturer and the regulatory requirements of different countries. The production of pharmaceuticals like Eptifibatide is a highly regulated process to ensure patient safety and drug quality."
            }
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/7G9rK7p/img-3.jpg",
            "name": "Centruroides (Scorpion antivenom)",
            "process": {
                "pr": "The process of creating Centruroides (Scorpion) antivenom involves several steps, starting from the collection of venom to the production of the final antivenom product. Here's a general outline of the process:",
                "pr_1": "Venom collection: Scorpion venom is extracted from live scorpions. Typically, scorpions are milked for their venom, a process that is generally not harmful to the scorpion. Milking involves gently stimulating the scorpion's venom gland, causing it to release venom, which is then collected.",
                "pr_2": "Venom purification: The collected venom is then purified to remove impurities and other components that may not be relevant to the antivenom. Purification methods can include chromatography, filtration, and other separation techniques.",
                "pr_3": "Venom antigen preparation: The purified venom is used as an antigen to elicit an immune response in animals, usually horses or sheep. The venom is injected into the animals in gradually increasing doses, which stimulates the production of specific antibodies against the venom toxins.",
                "pr_4": "Antibody collection: After a sufficient amount of antibodies has been produced in the animals' blood, the animals are bled, and the blood containing the antibodies is collected. This process is usually done without causing harm to the animals.",
                "pr_5": "Antivenom production: The collected blood is processed to separate the liquid portion (plasma or serum) containing the specific antibodies. This liquid, rich in antivenom antibodies, is further purified to isolate and concentrate the antibodies that target the scorpion venom toxins.",
                "pr_6": "Quality control: Throughout the production process, strict quality control measures are followed to ensure the safety and efficacy of the antivenom. The final product undergoes testing for potency, purity, and safety to meet regulatory standards.",
                "pr_7": "Formulation: The purified antivenom antibodies are formulated into a final medicinal product, usually in liquid form. It is prepared in specific concentrations to ensure proper dosing for patients.",
                "pr_8": "Packaging and distribution: The antivenom is packaged in vials or containers suitable for medical use and labeled with relevant information, such as dosage instructions, batch number, and expiry date. It is then distributed to healthcare facilities and medical centers where it is needed.",
                "pr_l": " It is essential to mention that the process can vary slightly depending on the specific manufacturer and country's regulations. Additionally, the production of antivenoms is a complex and costly process, and it requires rigorous testing to ensure the safety and effectiveness of the final product."
            }
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/cLvWxsG/img-4.jpg",
            "name": "Byetta (Exenatide)",
            "process": {
                "pr": "Byetta (Exenatide) is a medication used to treat type 2 diabetes. It belongs to a class of drugs called incretin mimetics, which mimic the actions of incretin hormones in the body to regulate blood sugar levels. Here is a general outline of the manufacturing process for Byetta:",
                "pr_1": "Cell Culture and Recombinant DNA Technology: The manufacturing process usually begins with the creation of a recombinant DNA strain that expresses the human exenatide protein. This involves introducing the gene for exenatide into a host cell line, such as bacteria or yeast.",
                "pr_2": "Fermentation: The recombinant DNA strain is then grown in large fermentation tanks, where it undergoes controlled growth and multiplication in a nutrient-rich environment. The host cells produce exenatide during this fermentation process.",
                "pr_3": "Harvesting and Purification: Once a sufficient amount of exenatide has been produced by the host cells, the fermentation broth is harvested. The exenatide protein needs to be purified from other cellular components and impurities present in the broth. Multiple purification steps, such as filtration, chromatography, and precipitation, are employed to achieve a high level of purity.",
                "pr_4": "Formulation: After purification, the purified exenatide is formulated into the desired dosage form, which may be a solution for injection or a lyophilized powder for reconstitution.",
                "pr_5": "Fill and Finish: The final formulated product is then filled into vials or pre-filled pens, which are designed for easy administration by patients.",
                "pr_6": "Quality Control: Throughout the manufacturing process, strict quality control measures are implemented to ensure the safety, purity, and potency of the finished product. These include various tests and analyses to confirm the identity and quality of the exenatide medication.",
                "pr_7": "Packaging and Distribution: The finished vials or pens are labeled, packaged, and prepared for distribution to pharmacies, hospitals, and other healthcare providers.",
                "pr_l": "It's important to note that the actual manufacturing process for pharmaceuticals like Byetta is highly regulated and subject to oversight by health authorities like the U.S. Food and Drug Administration (FDA) or European Medicines Agency (EMA) to ensure patient safety and product quality. The specific manufacturing process for Byetta may vary between different pharmaceutical companies that produce the medication."
            }
        },
        {
            "id": 5,
            "img": "https://i.ibb.co/KLnxKvM/img-5.jpg",
            "name": "Ziconotide (Prialt)",
            "process": {
                "pr": "Ziconotide, marketed under the brand name Prialt, is a synthetic peptide used as a painkiller, particularly for severe chronic pain conditions. It is primarily administered intrathecally, which means it is delivered directly into the spinal cord fluid through a catheter.The manufacturing process of Ziconotide involves several steps, including peptide synthesis, purification, and formulation. Here is a simplified overview of the process:",
                "pr_1": "Peptide Synthesis : The synthesis of Ziconotide involves the chemical assembly of amino acids in a specific sequence to create the desired peptide. The sequence of amino acids in Ziconotide is Cys-Tyr-D-Cys-Asn-Phe-D-Pro-Arg-Cys-Thr-Gly-Cys-Thr-OH.Solid-phase peptide synthesis (SPPS) is commonly used for this purpose. In SPPS, the peptide chain is built step by step on a solid support, with each amino acid being added in a controlled manner using chemical reactions. Protecting groups are used to prevent unwanted reactions at specific sites on the amino acids.",
                "pr_2": "Purification: After the peptide chain is assembled, it is cleaved from the solid support and then purified. Various purification techniques, such as high-performance liquid chromatography (HPLC), are employed to isolate the desired peptide from impurities and other reaction by-products.",
                "pr_3": "Formulation: Once the purified Ziconotide peptide is obtained, it needs to be formulated for administration. In the case of Prialt, this involves preparing a solution suitable for intrathecal injection. The peptide may be mixed with appropriate excipients, stabilizers, and other components to ensure its stability, solubility, and compatibility with the intended route of administration.",
                "pr_4": "Quality Control and Testing: Throughout the manufacturing process, strict quality control measures are implemented to ensure the purity, potency, and safety of the final product. Various tests are conducted to assess the chemical, physical, and biological characteristics of the peptide. These tests include identity verification, potency assays, stability testing, and assessments of potential impurities.",
                "pr_5": "Packaging and Distribution: Once the Ziconotide formulation passes all quality control tests, it is packaged into vials or other appropriate containers for distribution. Proper labeling and documentation are provided to ensure accurate dosing and usage instructions.",
                "pr_l": "It's important to note that the manufacturing of pharmaceuticals is a complex and regulated process that involves rigorous quality control and compliance with regulatory guidelines. The above steps provide a simplified overview of the Ziconotide manufacturing process, and the actual process may involve additional steps and considerations to ensure the safety and effectiveness of the final product."
            }
        },
        {
            "id": 6,
            "img": "https://i.ibb.co/dfymVg3/img-6.jpg",
            "name": "Integrilin",
            "process": {
                "pr": "The manufacturing process of Integrilin involves several steps, including chemical synthesis and purification. Please note that the specific details of the manufacturing process may be proprietary and subject to change, and access to real-time data. However, general outline of the steps involved in the production of eptifibatide:",
                "pr_1": "Identification and Sourcing of Raw Materials: The first step is to identify and acquire the necessary raw materials, including starting chemicals and reagents, which meet strict quality and safety standards.",
                "pr_2": "Chemical Synthesis: The active pharmaceutical ingredient (API) of Integrilin, eptifibatide, is synthesized through a complex chemical process in a controlled environment, such as a pharmaceutical manufacturing facility. The synthesis involves various reactions and purification steps to obtain the desired compound.",
                "pr_3": "Formulation: Once the eptifibatide API is obtained, it undergoes formulation processes to create the final medicinal product. This typically involves combining the active ingredient with excipients (inactive substances that aid in the drug's delivery and stability) to create the drug formulation suitable for intravenous administration.",
                "pr_4": "Sterilization and Quality Control: The final product is subjected to sterilization to ensure it is free from any microbial contamination. Rigorous quality control tests are performed at different stages of the manufacturing process to ensure the product meets the required specifications and is safe and effective for use.",
                "pr_5": "Packaging: The Integrilin medicine is then filled into sterile vials or ampoules under controlled conditions, and proper labeling is applied.",
                "pr_6": "Distribution: The finished Integrilin products are distributed to healthcare facilities and hospitals, where they are stored and administered by trained medical personnel.",
                "pr_l": "It is important to note that the manufacturing process of pharmaceuticals, including Integrilin, is highly regulated by health authorities in different countries to ensure the safety, efficacy, and quality of the medications. The specific manufacturing process details and facility locations are often considered confidential information and are not disclosed to the public."
            }
        },
        {
            "id": 7,
            "img": "https://i.ibb.co/r002DB6/img-7.jpg",
            "name": "Calmette's Antivenin",
            "process": {
                "pr": "Calmette's Antivenin is typically used for snakebite envenomation and is derived from the venom of venomous snakes, to produce an antidote.The general steps involved in the manufacturing process of antivenom typically include:",
                "pr_1": "Venom Collection: The first step involves safely collecting venom from the snake or animal that the antivenin is meant to counteract. This is usually done by experienced handlers and is a crucial step to ensure the antivenin is effective.",
                "pr_2": "Animal Immunization: A small, non-lethal amount of the collected venom is injected into a suitable animal, often a horse, sheep, or goat. The animal's immune system responds by producing antibodies against the venom.",
                "pr_3": "Antibody Extraction: After a period of time, the animal's blood is collected. The antibodies it produced against the venom are then separated from the blood plasma. This plasma is rich in specific antibodies that can neutralize the venom.",
                "pr_4": "Purification: The extracted plasma is further processed to isolate and purify the specific antibodies responsible for neutralizing the venom. This purification step ensures that the final antivenin product is safe for human use and free from unnecessary components.",
                "pr_5": "Formulation: The purified antibodies are formulated into the final antivenin product. This may involve mixing with stabilizers, preservatives, and other necessary ingredients to ensure the product's stability and efficacy.",
                "pr_6": "Quality Control: Rigorous quality control tests are conducted to ensure the potency, safety, and consistency of the antivenin product. This includes testing its ability to neutralize venom and confirming that it meets established safety standards.",
                "pr_7": "Packaging and Distribution: Once the antivenin passes quality control, it is packaged in vials or other suitable containers. Proper labeling and instructions for use are included. The antivenin is then distributed to medical facilities or healthcare providers."
            }
        }
    ]
    return (
        <div className="mt-12">
            <div className="snake_container max-w-[1500px] mx-auto mb-16 ">
                <h1 className="section_header">Snakes</h1>
                <h1 className="section_header2">VENOMOUS SNAKES</h1>
                <h3 className="max-w-[800px] mx-auto header_info my-8 px-2">Venomous snakes are species of the suborder Serpentes that are capable of producing venom, which they use for killing prey, for defense, and to assist with digestion of their prey. The poison is typically delivered by injection using hollow or grooved fangs, although some poisonous snakes lack well-developed fangs.</h3>
            <div>
                <div className="grid grid-cols-1 gap-8 lg:px-32 cards">
                    {
                        medicine_process.map((mProcess) => (
                            <MedicineProcess
                                key={mProcess.id}
                                mProcess={mProcess}

                            ></MedicineProcess>
                        ))
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default MedicineProcesses;