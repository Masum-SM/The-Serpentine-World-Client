import SnakeCard from "./SnakeCard";

const SnakeCards = () => {


    const snakesData = [
        {
            id:1,
            img: "https://i.ibb.co/TtXZ9ZT/img-1.jpg",
            name: "Russell's Viper",
            sName:"Daboia russelii",
            lfCyle:{
                Reproduction:"Mating occurs during the breeding season, and the female stores the fertilized eggs inside her oviducts until they are ready to hatch.",

                Gestation: "The gestation period lasts for several months, during which the embryos develop inside the female's body.",

                Birth:"When the time is right, the female gives birth to live baby snakes, which are independent and fully capable of survival from birth.",

                Growth:"The newborn snakes begin their lives as miniatures of adults and grow rapidly by consuming prey suitable for their size.",

                Maturation:"As they grow, they shed their skin periodically to accommodate their increasing size. Over time, they reach sexual maturity, and the cycle continues."
            },

            food: "Russell's Vipers are carnivorous and primarily feed on a diet of small mammals, birds, lizards, and even other snakes. They are ambush predators, relying on their well-camouflaged appearance to lie in wait for unsuspecting prey. When the prey comes within striking range, the viper delivers a lightning-fast strike, injecting venom into the prey to immobilize it.Their venom is hemotoxic, which means it affects the blood and causes issues with blood clotting. The venom can lead to severe tissue damage, internal bleeding, and other systemic effects. After the venom takes effect, the snake tracks the prey using its excellent sense of smell and heat-sensing pits. Once the prey is located, the snake swallows it whole, aided by its hinged jaw, which allows it to consume prey much larger than its head.Russell's Vipers play an essential role in the ecosystem by controlling populations of small mammals and contributing to the balance of prey-predator dynamics in their habitats. However, due to their venomous nature and potential danger to humans, it is crucial to treat them with respect and caution and avoid close encounters. If you ever encounter a Russell's Viper or any venomous snake, it's best to keep a safe distance and seek assistance from trained professionals if necessary.",
        },
        {
            id:2,
            img: "https://i.ibb.co/VNFxNj4/img-2.jpg",
            name: "Green Pit Viper",
            sName:"Trimeresurus albolabris",
            lfCyle:{
                Reproduction:"Green Pit Vipers are ovoviviparous, meaning they retain the fertilized eggs inside their bodies until they are ready to hatch. Mating occurs during the breeding season, and the female stores the developing embryos within her oviducts.",

                Gestation: "During the gestation period, the embryos develop inside the female's body, nourished by yolk and the oviduct lining. This period can last for several months, varying depending on factors such as temperature and prey availability.",

                Birth:"When the embryos are fully developed, the female gives birth to live young snakes. Unlike oviparous species that lay eggs, ovoviviparous snakes do not lay eggs. Instead, they give birth to fully formed snakes, which are independent and ready to fend for themselves.",

                Growth:"The newborn snakes are miniature replicas of the adults, and they start their lives being fully capable of survival. They grow rapidly by consuming suitable prey for their size.",

                Maturation:" As they grow, they shed their skin periodically, a process known as ecdysis or molting. Green Pit Vipers reach sexual maturity at a certain age, and the life cycle continues as they engage in mating and reproduction."
            },
            food: "Green Pit Vipers are venomous snakes, and their diet primarily consists of small vertebrates, such as lizards, frogs, small birds, and rodents. They are ambush predators and have specialized heat-sensing pits located on their head that allow them to detect the body heat of potential prey. This thermoreceptive ability helps them locate prey even in low light or obscured environments.When a suitable prey item comes within striking range, the snake will strike quickly and inject venom through its fangs. The venom contains hemotoxic components that affect the blood, causing tissue damage and disrupting the blood clotting mechanism. After envenomation, the snake tracks the prey using its keen sense of smell and heat detection. Once the prey is subdued, the snake will swallow it whole, aided by its hinged jaws, which allow it to consume prey much larger than its head.Green Pit Vipers are found in various habitats, including forests and grasslands, across Southeast Asia. Like other snakes, they play a vital role in controlling populations of their prey and contribute to the balance of the ecosystem. However, they should be treated with caution and respect due to their venomous nature. If encountered in the wild, it is best to maintain a safe distance and not disturb them. In case of a snakebite, seeking immediate medical attention is essential.",
        },
        {
            id:3,
            img: "https://i.ibb.co/jhkLK6y/imh-3.jpg",
            name: "Fer-de-Lance",
            sName:"Bothrops asper",
            lfCyle:{
                Reproduction:"Fer-de-Lance snakes reproduce sexually, and mating occurs during the breeding season. Male snakes will search for females and engage in courtship behaviors to attract potential mates.",

                Gestation: "After successful mating, female Fer-de-Lance snakes are viviparous, meaning they retain the developing embryos inside their bodies. During gestation, the embryos receive nourishment from the mother through a placental connection",

                Birth:"When the embryos are fully developed, the female gives birth to live young, a characteristic shared by many pit vipers. The number of offspring in a single litter can vary, but it can be as high as 40 or more.",

                Growth:"The newborn Fer-de-Lance snakes are independent and fully capable of survival from birth. They will start feeding on small prey almost immediately to support their rapid growth.",

                Maturation:"As they grow, young Fer-de-Lance snakes shed their skin periodically to accommodate their increasing size. Over time, they reach sexual maturity, which allows them to participate in the reproductive cycle and continue the life cycle of the species."
            },
            food: "Fer-de-Lance snakes are carnivorous and primarily feed on a diet of small mammals, birds, lizards, and other small vertebrates. As ambush predators, they lie in wait for unsuspecting prey to come within striking range. When a suitable prey item is detected, the snake will strike with lightning speed and deliver venom through its fangs.The venom of Fer-de-Lance snakes is hemotoxic, containing enzymes and toxins that cause tissue damage and interfere with blood clotting. After envenomation, the snake tracks the prey using its sense of smell and heat-sensing pits, and once the prey is subdued, the snake swallows it whole.Fer-de-Lance snakes are widely distributed in tropical and subtropical regions of Central and South America. They are highly venomous and are responsible for numerous snakebite incidents in their range. As with all venomous snakes, encountering them in the wild should be approached with extreme caution, and it is essential to seek immediate medical attention if bitten by one.",
        },
        {
            id:4,
            img: "https://i.ibb.co/J5JDkL6/img-4.jpg",
            name: "Gaboon Viper",
            sName:"Bitis gabonica",
            lfCyle:{
                Reproduction:"Gaboon vipers are ovoviviparous, meaning they give birth to live young rather than laying eggs. This is a common reproductive strategy among vipers. Female Gaboon vipers carry developing embryos inside their bodies until they are ready to give birth.",

                Gestation: "The gestation period of Gaboon vipers is approximately 6 to 7 months. During this time, the female nourishes and protects the developing embryos inside her.",

                Birth:"When the gestation period is complete, the female Gaboon viper gives birth to live young, typically in litters of 20 to 40 offspring, although larger litters have been reported. The birth usually takes place during the rainy season when environmental conditions are more favorable for the newborn snakes.",

                Growth:"After birth, the baby Gaboon vipers are relatively large and well-developed, measuring around 20 to 30 centimeters (8 to 12 inches) in length. They immediately start their independent lives and are capable of fending for themselves.",

                Maturation:"Gaboon vipers are slow-growing snakes, and it takes several years for them to reach sexual maturity. The exact time for sexual maturation can vary depending on factors like environmental conditions and food availability, but it typically takes several years."
            },
            food: "Like most snakes, the Gaboon Viper is a carnivore. It primarily feeds on small mammals, birds, and occasionally other reptiles. The Gaboon Viper is an ambush predator, lying in wait for its prey to pass by before striking with lightning speed.The Gaboon Viper is known for its excellent camouflage, which it uses to blend in with the surrounding environment and remain hidden from its prey. It waits patiently until a suitable prey animal comes within striking distance.The Gaboon Viper possesses the longest fangs of any venomous snake, reaching up to two inches (about 5 cm) in length. These fangs are used to inject venom into their prey, immobilizing it and aiding in the digestive process.It has the ability to consume relatively large meals compared to its body size. This is due to its highly elastic jaws, which allow it to swallow prey that is much wider than its own head.Like other pit vipers, Gaboon Vipers possess heat-sensitive pits located between their eyes and nostrils. These pit organs enable them to detect the body heat of their warm-blooded prey, making it easier to locate and strike at night.",
        },
        {
            id:5,
            img: "https://i.ibb.co/xgDk6cg/img-5.jpg",
            name: "King cobra",
            sName:"Ophiophagus hannah",
            lfCyle:{
                Reproduction:"King Cobras are oviparous, which means they reproduce by laying eggs. The female king cobra builds a nest made of leaves and other vegetation to lay her eggs. She will then guard the eggs until they hatch, which typically takes around 60 to 90 days.",

                Gestation: " Gestation is not applicable to snakes since they do not carry developing embryos inside their bodies like mammals. Instead, the female carries the eggs until they are ready to hatch.",

                Birth:" As mentioned earlier, King Cobras do not give live birth; they lay eggs. Once the eggs are ready to hatch, the young snakes break out of their eggshells using an egg tooth and emerge as fully-formed, albeit smaller, replicas of adult cobras.",

                Growth:"King Cobras grow rapidly during their early stages of life. After hatching, the young snakes are independent and must fend for themselves. They undergo a series of sheds (molting) to accommodate their growing bodies.",

                Maturation:" As they mature, they can reach impressive lengths, with adult King Cobras often exceeding 4 meters (13 feet) in length. The time it takes for a King Cobra to reach sexual maturity can vary, but it generally occurs between 3 to 4 years."
            },
            food: " King Cobras are highly venomous snakes and are considered top predators in their ecosystem. Their diet mainly consists of other snakes, including venomous and non-venomous species. They are known to consume other reptiles, such as lizards and small mammals as well.It possess potent venom and are capable of delivering large amounts of venom in a single bite, which is used to immobilize and digest their prey.King Cobras are known for their preference for other snakes as their main food source. They are skilled hunters and can take on formidable opponents, including other venomous snakes such as vipers and smaller cobra species.This can include rodents like mice and rats.On rare occasions, King Cobras have been observed preying on birds and their eggs when the opportunity arises.Though less common, King Cobras may also eat lizards, especially if they encounter them during their hunting activities.Like other snakes, King Cobras are constrictors. After killing their prey with venom, they will swallow it whole. Their highly flexible jaws and elastic skin allow them to consume prey much larger than their own head.",
        },
        {
            id:6,
            img: "https://i.ibb.co/NV2p8rV/img-6.jpg",
            name: "Saw-scaled viper",
            sName:"Echis carinatus",
            lfCyle:{
                Reproduction:"Saw-scaled vipers are ovoviviparous, which means they give birth to live young rather than laying eggs. Female vipers carry developing embryos inside their bodies, and once the embryos are fully developed, the female gives birth to live baby snakes.",

                Gestation: "The gestation period of the Saw-scaled viper varies but typically lasts for several months. During this time, the female retains the developing embryos within her body until they are fully formed and ready to be born.",

                Birth:"After the gestation period, the female gives birth to live young rather than laying eggs. The baby vipers are fully formed and independent at birth.",

                Growth:"As with most snakes, the growth rate of Saw-scaled vipers can vary depending on factors such as food availability, temperature, and habitat conditions.Adults range in length from 0.3 to 0.9 metre (1 to 3 feet). Echis coloration includes various shades of brown, gray, or orange with darker dorsal blotches and lateral spots.",

                Maturation:"Young snakes will grow rapidly during the first few years of their life. Sexual maturity in these snakes is typically reached at around 2 to 3 years of age."
            },
            food: "The saw-scaled viper is primarily nocturnal, meaning it is most active during the night. It is an ambush predator, relying on its excellent camouflage to blend into its surroundings and surprise its prey. The snake's diet mainly consists of small mammals, such as rodents (mice, rats, and gerbils), birds, and sometimes lizards. Occasionally, they may consume other small snakes as well. These snakes have a unique feeding behavior, known as prey tracking. Once they bite their prey, the venom takes effect, and the snake then tracks down the victim by following its scent trail.This enables the viper to locate and consume the immobilized prey safely.Saw-scaled vipers are efficient hunters and can survive in arid regions with limited food availability. They possess highly developed heat-sensing pits located between the eyes and nostrils, which allow them to detect the body heat of their warm-blooded prey, making them particularly effective at finding rodents and birds.It's important to note that saw-scaled vipers are venomous and should be approached with caution. If you encounter any venomous snakes, it's best to give them a wide berth and allow them to move away on their own.",
        },
        {
            id:7,
            img: "https://i.ibb.co/tbfdgjx/img-7.jpg",
            name: "Black mamba",
            sName:"Dendroaspis polylepis",
            lfCyle:{
                Reproduction:" Black mambas are oviparous, which means they reproduce by laying eggs. Mating typically occurs during the spring season, and after successful copulation, the female will lay a clutch of eggs in a secluded location, such as a burrow or a hollow tree.",

                Gestation: " The gestation period for black mambas refers to the time between fertilization and egg-laying, which is usually around 2-3 months.",

                Birth:"Black mambas do not give live birth. After the incubation period, which takes about 2-3 months, the female will lay a clutch of 6-17 eggs. She will then leave the eggs to develop on their own, as there is no parental care.",

                Growth:"Once the eggs are laid, they undergo an incubation period, and the young snakes, known as hatchlings, emerge from the eggs fully formed. Hatchlings are typically about 30-40 cm (12-16 inches) long.",

                Maturation:" As the black mambas grow, they shed their skin periodically, a process known as molting. They reach sexual maturity at around 3-4 years of age."
            },
            food: " Black mambas are highly venomous snakes and are known for their aggressive and fast-moving nature. They primarily feed on small mammals, birds, and occasionally other reptiles. Black mambas are strict carnivores, which means they feed exclusively on other animals. They are opportunistic hunters and will consume a wide variety of prey.They are active hunters and prefer to ambush their prey from an elevated position, such as trees or bushes. They are diurnal, which means they are most active during the day, but they can also hunt at night.The primary diet of the Black mamba consists of small mammals, such as rodents (mice, rats, squirrels), bats, birds, and other reptiles. Occasionally, they may also consume eggs and chicks from bird nests.They are incredibly fast and agile snakes, capable of reaching speeds up to 12 miles per hour (19 km/h) over short distances. They use their keen eyesight and flickering tongue to detect prey, and once a suitable target is located, they strike with incredible speed.The venom of the Black mamba is highly toxic and predominantly neurotoxic. It attacks the nervous system, causing paralysis and respiratory failure in its prey. A single bite from a Black mamba can deliver enough venom to kill a human if left untreated.lack mambas do not need to eat frequently due to their high metabolism and energy efficiency. After consuming a substantial meal, they can go for extended periods without eating again.",
        },
        {
            id:8,
            img: "",
            name: "Rattlesnake",
            sName:"Crotalus spp.",
            lfCyle:{
                Reproduction:"Rattlesnakes are ovoviviparous, which means they give birth to live young. Females produce eggs that remain inside their bodies, and the embryos develop within these eggs. The gestation period varies among species but generally lasts around 3 to 5 months. When the young rattlesnakes are fully developed, the female gives birth to them.",

                Gestation: "As mentioned earlier, the gestation period of rattlesnakes lasts around 3 to 5 months. However, this duration can differ slightly depending on the species and environmental conditions.",

                

                Birth:"During birth, the female rattlesnake gives birth to live, fully formed and self-sufficient young snakes. The number of offspring per litter varies among species, and it can range from a few to over a dozen.",

               

                Growth:"After birth, young rattlesnakes begin their lives as miniature replicas of adult rattlesnakes. They are capable of fending for themselves and hunting for prey. As they grow, they shed their skin periodically to accommodate their increasing size. The frequency of shedding depends on factors like growth rate, food availability, and environmental conditions.",

                

                Maturation:"Rattlesnakes reach sexual maturity at different ages, depending on the species and environmental factors. This typically occurs when they are a few years old, around 2 to 4 years for most species.",

                
            },
            food: "Rattlesnakes are carnivorous and primarily eat small mammals, birds, lizards, and occasionally other snakes. They are equipped with venomous fangs to immobilize their prey. After striking their target, they use their venom to begin the digestion process externally. The venom contains enzymes that break down tissues and help the snake consume the prey more easily. Once the prey is incapacitated, the rattlesnake swallows it whole.Rattlesnakes are ambush predators, patiently waiting for unsuspecting prey to pass by, and then they strike with lightning speed. Their diet can vary depending on their habitat and the availability of food sources. As cold-blooded animals, their metabolism is influenced by external temperatures, and they may consume less food during colder periods when their activity is reduced.Rattlesnakes have venomous fangs that they use to inject venom into their prey during a strike. The venom immobilizes or kills the prey, making it easier for the rattlesnake to consume.he rattlesnake gets its name from the unique structure at the end of its tail called the rattle. Each time a rattlesnake sheds its skin, a new segment is added to the rattle. The rattle makes a buzzing sound when the snake vibrates its tail, serving as a warning to potential threats.Generally, rattlesnakes don't need to eat very often and can survive for relatively long periods without food.",
        },
        {
            id:9,
            img: "",
            name: "Copperhead snake",
            sName:"Agkistrodon contortrix",
            lfCyle:{
                Reproduction:"Agkistrodon contortrix, like many other snakes, reproduces sexually. Mating usually occurs in the spring or fall. Male snakes may engage in combat for the right to mate with a female. After successful mating, the female stores the sperm and uses it to fertilize her eggs internally.",

                Gestation: "Snakes are ovoviviparous, meaning the eggs develop and hatch inside the female's body, and she gives birth to live young. The gestation period for Copperhead snakes is around three to nine months.",

                Birth:" When the time for birth approaches, the female may find a secluded and safe spot to give birth. The number of offspring in a litter can vary, but it is generally around 3 to 10 snakes.",

                Growth:"Once born, the baby Copperheads are independent and fully capable of hunting for themselves. They grow relatively quickly during their early stages of life. As they continue to eat and shed their skin, they gradually increase in size. ",

                Maturation:"The rate of growth varies depending on factors such as the availability of food, environmental conditions, and other external factors. It may take a few years for them to reach sexual maturity, where they can then reproduce."
            },
            food: "Agkistrodon contortrix, or Copperhead snakes, are venomous and primarily carnivorous. They feed on a variety of small animals, including rodents, insects, birds, and other reptiles. Copperheads are ambush predators, relying on their cryptic coloration and patience to lie in wait for prey to come close enough for them to strike and inject venom. Once the venom incapacitates their prey, they swallow it whole.Copperhead snakes are strict carnivores, meaning they exclusively eat other animals. Their diet mainly consists of small vertebrates and invertebrates.Copperheads are ambush predators, which means they lie in wait for their prey to come within striking distance. They blend well with their surroundings due to their coloration, making them effective hunters.They often prey on small mammals such as mice, voles, shrews, and occasionally young rats.Copperheads may consume small birds, eggs, and nestlings if the opportunity arises. some cases, copperheads may eat insects and other invertebrates, especially if larger prey is scarce.They also feed on amphibians, like frogs and toads, as well as small reptiles such as lizards and young snakes.he feeding frequency of copperheads can vary based on factors such as prey availability, environmental conditions, and the snake's size and age. They may eat every few days to every few weeks, depending on these factors.",

            
        },
        {
            id:10,
            img: "",
            name: "Indian cobra",
            sName:"Naja naja",
            lfCyle:{
                Reproduction:" Indian cobras are oviparous, which means they reproduce by laying eggs. Female cobras lay a clutch of eggs, usually around 10 to 30 eggs, in a suitable nesting site. The female then coils around the eggs to protect them until they hatch.",

                Gestation: "The gestation period for Indian cobras refers to the time between the female laying the eggs and the eggs hatching. This period is typically around 50 to 60 days.",

                Birth:" After the gestation period, the eggs hatch, and the baby cobras emerge. Unlike some snakes, Indian cobras do not give live birth; they give birth to live hatchlings.",

                Growth:" After birth, the baby cobras grow rapidly by shedding their skin periodically. Young cobras focus on feeding and growing during this stage to reach maturity.",

                Maturation:" As the cobras grow, they undergo several shedding cycles until they reach maturity, which typically takes a few years. At this stage, they are fully developed and capable of reproducing.",
            },
            food: "Indian cobras are carnivorous and primarily feed on small mammals, birds, frogs, lizards, and other snakes. They are equipped with venomous fangs to inject venom into their prey, which immobilizes and helps in digesting their food. Cobras are ambush predators, relying on their camouflage and stealth to surprise their prey.They have a sophisticated sensory system that includes excellent vision during the day and the ability to sense vibrations and detect heat signatures, allowing them to locate and strike at potential prey efficiently.Cobras are skilled hunters, and they use their venomous fangs to inject neurotoxic venom into their prey. The venom immobilizes or kills the prey, making it easier for the snake to consume it. They have specialized hollow fangs that allow venom to flow into the bite wound. Indian cobras are considered ambush predators. They rely on their excellent camouflage and patience to lie in wait for unsuspecting prey to come close enough for a quick strike. When threatened or provoked, they may strike defensively.ter delivering a venomous bite, the cobra will release its prey and wait for the venom to take effect. Once the prey is immobilized or dead, the snake will swallow it whole. The venom not only helps subdue the prey but also aids in the digestion process by breaking down the prey's tissues.",
        },

    ]


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-4 cards">
                {
                    snakesData.map((snake) =>(
                        <SnakeCard 
                        key={snake.id}
                        snake ={snake}
                        
                        ></SnakeCard>
                    ))
                }
            </div>
        </div>
    );
};

export default SnakeCards;