import { illustrations } from './illustrations.js';

export const routines = [
  {
    id: 'patanjaliJogging1',
    title: 'Patanjali Yogic Jogging Part 1',
    description: {
      english: 'A lively warmup with yogic jogging, joint mobilization, and simple breathing patterns.',
      hindi: 'योगिक जॉगिंग, जोड़ गतिशीलता और सरल श्वास पैटर्न के साथ एक ऊर्जावान वॉर्म-अप।'
    },
    safetyDescription: {
      english: 'Start gently and listen to your body while warming up joints and breathing rhythmically.',
      hindi: 'हल्के से शुरू करें और जोड़ों को गर्म करते समय शरीर की सुनें और श्वास को ताल में रखें।'
    },
    steps: [
      {
        id: 'knee_rotation',
        deva: 'घुटना घुमाव',
        roman: 'Ghutna Ghumav',
        english: 'Knee Rotations',
        duration: 30,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Rotate both knees gently inward and outward to lubricate the joint.',
          hindi: 'दोनों घुटनों को धीरे-धीरे अंदर और बाहर घुमाएं ताकि जोड़ चिकने रहें।'
        },
        image: illustrations.knee_rotation,
        video: 'https://youtu.be/example1'
      },
      {
        id: 'arm_swing',
        deva: 'भुजा झूलना',
        roman: 'Bhuja Jhoolna',
        english: 'Arm Swings',
        duration: 40,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Keep your shoulders soft while swinging the arms to open the chest.',
          hindi: 'छाती खोलने के लिए अपने कंधों को नरम रखें जब आप भुजाओं को झुला रहे हों।'
        },
        image: illustrations.arm_swing,
        video: 'https://youtu.be/example2'
      },
      {
        id: 'jogging_in_place',
        deva: 'स्थान पर जॉगिंग',
        roman: 'Sthan Par Jogging',
        english: 'In-Place Jogging',
        duration: 60,
        type: 'cardio',
        breathing: true,
        notes: {
          english: 'Maintain a rhythmic breath and a light, springy step for energetic circulation.',
          hindi: 'ऊर्जावान परिसंचरण के लिए तालबद्ध श्वास और हल्का, उछाल भरा कदम बनाए रखें।'
        },
        image: illustrations.jogging_in_place,
        video: 'https://youtu.be/example3'
      }
    ]
  },
  {
    id: 'patanjaliAsanas2',
    title: 'Patanjali Yog Part 2 - Asanas',
    description: {
      english: 'A sequence of classic asanas for flexibility and core awareness.',
      hindi: 'लचीलेपन और कोर जागरूकता के लिए शास्त्रीय आसनों का अनुक्रम।'
    },
    safetyDescription: {
      english: 'Keep movements steady and breathe evenly during each posture.',
      hindi: 'प्रत्येक स्थिति में गति को स्थिर रखें और समान रूप से श्वास लें।'
    },
    steps: [
      {
        id: 'tadasana',
        deva: 'ताड़ासन',
        roman: 'Tadasana',
        english: 'Mountain Pose',
        duration: 45,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Stand tall with equal weight on both feet and lift through the crown of your head.',
          hindi: 'दोनों पैरों पर समान वजन रखें और सिर के शीर्ष से ऊपर उठें।'
        },
        image: illustrations.tadasana,
        video: 'https://youtu.be/example4'
      },
      {
        id: 'ardha_chandra',
        deva: 'अर्ध चन्द्रासन',
        roman: 'Ardha Chandrasana',
        english: 'Half Moon Pose',
        duration: 50,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Balance steadily on one leg and keep the chest broad while reaching outward.',
          hindi: 'एक पैर पर स्थिरता से संतुलित रहें और बाहरी ओर पहुंचते समय छाती को चौड़ा रखें।'
        },
        image: illustrations.ardha_chandra,
        video: 'https://youtu.be/example5'
      },
      {
        id: 'padmasana',
        deva: 'पद्मासन',
        roman: 'Padmasana',
        english: 'Lotus Pose',
        duration: 60,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Sit comfortably with spine lifted and breathe slowly through the nose.',
          hindi: 'रीढ़ को ऊँचा रखें और नाक के माध्यम से धीरे-धीरे श्वास लें।'
        },
        image: illustrations.padmasana,
        video: 'https://youtu.be/example6'
      }
    ]
  },
  {
    id: 'patanjaliPhase3',
    title: 'Patanjali Yog Phase 3',
    description: {
      english: 'A balanced flow of strength, flexibility, and relaxation for advanced practice.',
      hindi: 'उन्नत अभ्यास के लिए मजबूती, लचक और विश्राम का संतुलित प्रवाह।'
    },
    safetyDescription: {
      english: 'Practice with awareness and avoid forcing postures beyond your comfort level.',
      hindi: 'सचेतनता से अभ्यास करें और अपनी सुविधा से परे आसनों को जबरदस्ती न करें।'
    },
    steps: [
      {
        id: 'bhujangasana',
        deva: 'भुजंगासन',
        roman: 'Bhujangasana',
        english: 'Cobra Pose',
        duration: 40,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift your chest softly and lengthen the spine without compressing the lower back.',
          hindi: 'छाती को कोमलता से उठाएं और निचली पीठ को दबाए बिना रीढ़ को लंबा करें।'
        },
        image: illustrations.bhujangasana,
        video: 'https://youtu.be/example7'
      },
      {
        id: 'vajrasana',
        deva: 'वज्रासन',
        roman: 'Vajrasana',
        english: 'Thunderbolt Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the spine upright and feel the breath move through your abdomen.',
          hindi: 'रीढ़ को सीधा रखें और श्वास को अपने पेट में बहते हुए महसूस करें।'
        },
        image: illustrations.vajrasana,
        video: 'https://youtu.be/example8'
      },
      {
        id: 'balasana',
        deva: 'बालासन',
        roman: 'Balasana',
        english: 'Child Pose',
        duration: 60,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Release the back fully and soften your forehead toward the floor.',
          hindi: 'पीठ को पूरी तरह से आराम दें और अपना माथा फर्श की ओर नरम करें।'
        },
        image: illustrations.balasana,
        video: 'https://youtu.be/example9'
      }
    ]
  },
  {
    id: 'diabetesSupport',
    title: 'Diabetes Support',
    description: {
      english: 'Gentle yoga and breath work designed to support blood sugar balance.',
      hindi: 'रक्त शर्करा संतुलन का समर्थन करने के लिए कोमल योग और श्वास अभ्यास।'
    },
    safetyDescription: {
      english: 'Monitor your response carefully and avoid any posture that causes discomfort.',
      hindi: 'अपनी प्रतिक्रिया को सावधानी से देखें और किसी भी असुविधा वाले आसन से बचें।'
    },
    steps: [
      {
        id: 'navasana',
        deva: 'नवासना',
        roman: 'Navasana',
        english: 'Boat Pose',
        duration: 40,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Engage the core lightly and keep the back straight to support digestion.',
          hindi: 'कोर को हल्के से सक्रिय रखें और पाचन का समर्थन करने के लिए पीठ सीधी रखें।'
        },
        image: illustrations.navasana,
        video: 'https://youtu.be/example10'
      },
      {
        id: 'trikonasana',
        deva: 'त्रिकोणासन',
        roman: 'Trikonasana',
        english: 'Triangle Pose',
        duration: 45,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Open the ribs and feel the stretch along the side body.',
          hindi: 'रिब्स को खोलें और शरीर के किनारे पर खिंचाव महसूस करें।'
        },
        image: illustrations.trikonasana,
        video: 'https://youtu.be/example11'
      },
      {
        id: 'viparita_karani',
        deva: 'विपरीत करनी',
        roman: 'Viparita Karani',
        english: 'Legs Up the Wall',
        duration: 50,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Let the legs relax and breathe into the lower abdomen for soothing circulation.',
          hindi: 'पैरों को आराम दें और सुखद परिसंचरण के लिए निचले पेट में श्वास भरें।'
        },
        image: illustrations.viparita_karani,
        video: 'https://youtu.be/example25'
      }
    ]
  },
  {
    id: 'weightLossFlow',
    title: 'Weight Loss Flow',
    description: {
      english: 'A dynamic sequence with more movement to raise heart rate and improve circulation.',
      hindi: 'दिल की धड़कन बढ़ाने और परिसंचरण सुधारने के लिए गतिशील अनुक्रम।'
    },
    safetyDescription: {
      english: 'Stay within your personal pace and hydrate before the session.',
      hindi: 'अपनी व्यक्तिगत गति के भीतर रहें और सत्र से पहले हाइड्रेट करें।'
    },
    steps: [
      {
        id: 'surya_namaskar',
        deva: 'सूर्य नमस्कार',
        roman: 'Surya Namaskar',
        english: 'Sun Salutation',
        duration: 50,
        type: 'flow',
        breathing: true,
        notes: {
          english: 'Move with your breath and keep the transitions smooth and controlled.',
          hindi: 'अपनी श्वास के साथ चलें और संक्रमण को चिकना और नियंत्रित रखें।'
        },
        image: illustrations.surya_namaskar,
        video: 'https://youtu.be/example12'
      },
      {
        id: 'trikonasana2',
        deva: 'त्रिकोणासन',
        roman: 'Trikonasana',
        english: 'Triangle Pose',
        duration: 45,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Keep the legs strong and reach energetically through the fingertips.',
          hindi: 'पैरों को मजबूत रखें और उंगलियों की ओर ऊर्जावान रूप से पहुंचें।'
        },
        image: illustrations.trikonasana2,
        video: 'https://youtu.be/example13'
      },
      {
        id: 'virabhadrasana',
        deva: 'वीरभद्रासन',
        roman: 'Virabhadrasana',
        english: 'Warrior Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Root through your back foot and lift from the pelvis for stability.',
          hindi: 'अपनी पिछले पैर से जड़ें बनाएं और स्थिरता के लिए पीठू से ऊपर उठें।'
        },
        image: illustrations.virabhadrasana,
        video: 'https://youtu.be/example22'
      }
    ]
  },
  {
    id: 'backPainRelief',
    title: 'Back Pain Relief',
    description: {
      english: 'Supportive poses and gentle stretches to ease lower back tension.',
      hindi: 'नीचे की पीठ की तनाव को कम करने के लिए सहायक आसन और कोमल खिंचाव।'
    },
    safetyDescription: {
      english: 'Move mindfully and stop if you feel any sharp pain.',
      hindi: 'सचेतन रूप से चलें और यदि तेज दर्द हो तो बंद करें।'
    },
    steps: [
      {
        id: 'marjaryasana',
        deva: 'मार्जर्यासन',
        roman: 'Marjaryasana',
        english: 'Cat Pose',
        duration: 35,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Round the spine slowly and coordinate the movement with the breath.',
          hindi: 'रीढ़ को धीरे-धीरे गोल करें और श्वास के साथ गति को समन्वयित करें।'
        },
        image: illustrations.marjaryasana,
        video: 'https://youtu.be/example14'
      },
      {
        id: 'bitilasana',
        deva: 'बितिलासन',
        roman: 'Bitilasana',
        english: 'Cow Pose',
        duration: 35,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift through the chest and let the belly soften on the inhale.',
          hindi: 'छाती को उठाएं और इनहेल पर पेट को नरम होने दें।'
        },
        image: illustrations.bitilasana,
        video: 'https://youtu.be/example15'
      },
      {
        id: 'balasana',
        deva: 'बालासन',
        roman: 'Balasana',
        english: 'Child Pose',
        duration: 45,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Use the breath as a guide to relax the lower back fully.',
          hindi: 'नीचे की पीठ को पूरी तरह से आराम देने के लिए श्वास को मार्गदर्शक के रूप में उपयोग करें।'
        },
        image: illustrations.balasana,
        video: 'https://youtu.be/example9'
      }
    ]
  },
  {
    id: 'kneePainSupport',
    title: 'Knee Pain Support',
    description: {
      english: 'Mobility work for knees with gentle strengthening and supportive rhythm.',
      hindi: 'घुटनों के लिए गतिशीलता कार्य, कोमल मजबूती और सहायक ताल के साथ।'
    },
    safetyDescription: {
      english: 'Use a soft surface and reduce range of motion if needed.',
      hindi: 'कोमल सतह का उपयोग करें और आवश्यक होने पर गति की सीमा कम करें।'
    },
    steps: [
      {
        id: 'vajrasana2',
        deva: 'वज्रासन',
        roman: 'Vajrasana',
        english: 'Thunderbolt Pose',
        duration: 40,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the knees aligned and focus on steady, even breathing.',
          hindi: 'घुटनों को संरेखित रखें और स्थिर, समान श्वास पर ध्यान दें।'
        },
        image: illustrations.vajrasana2,
        video: 'https://youtu.be/example16'
      },
      {
        id: 'pavanamuktasana',
        deva: 'पवनमुक्तासन',
        roman: 'Pavanamuktasana',
        english: 'Wind-Relieving Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Use this gentle twist to release tension while keeping the spine long.',
          hindi: 'स्पाइन को लंबा रखते हुए तनाव को छोड़ने के लिए इस कोमल मरोड़ का उपयोग करें।'
        },
        image: illustrations.pavanamuktasana,
        video: 'https://youtu.be/example17'
      }
    ]
  },
  {
    id: 'neckPainSupport',
    title: 'Neck Pain / Spondylosis Support',
    description: {
      english: 'Gentle neck movements and postures to ease stiffness and support cervical health.',
      hindi: 'कठोरता को कम करने और गर्दन की सेहत का समर्थन करने के लिए कोमल गर्दन गतियां और आसन।'
    },
    safetyDescription: {
      english: 'Keep neck motions slow and avoid sudden twists.',
      hindi: 'गर्दन की गतियों को धीमा रखें और अचानक मरोड़ से बचें।'
    },
    steps: [
      {
        id: 'neck_rotations',
        deva: 'गर्दन घुमाव',
        roman: 'Gardan Ghumav',
        english: 'Neck Rotations',
        duration: 35,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Rotate gently and do not force the neck beyond a comfortable range.',
          hindi: 'धीरे-धीरे घुमाएं और गर्दन को आरामदायक सीमा से अधिक मजबूर न करें।'
        },
        image: illustrations.neck_rotations,
        video: 'https://youtu.be/example18'
      },
      {
        id: 'seated_twist',
        deva: 'बैठे हुए मरोड़',
        roman: 'Baithe Hue Marod',
        english: 'Seated Twist',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Use the breath to guide the twist and keep the shoulders relaxed.',
          hindi: 'मरोड़ के मार्गदर्शन के लिए श्वास का उपयोग करें और कंधों को आरामदायक रखें।'
        },
        image: illustrations.seated_twist,
        video: 'https://youtu.be/example19'
      }
    ]
  },
  {
    id: 'beginnerFlow',
    title: 'Beginner Flow',
    description: {
      english: 'A gentle introductory sequence for new practitioners with clear pace and rest.',
      hindi: 'नए अभ्यासकर्ताओं के लिए स्पष्ट गति और आराम के साथ कोमल प्रारंभिक अनुक्रम।'
    },
    safetyDescription: {
      english: 'Take extra rest and keep transitions smooth when learning the sequence.',
      hindi: 'अनुक्रम सीखते समय अतिरिक्त आराम लें और संक्रमण को सहज रखें।'
    },
    steps: [
      {
        id: 'tadasana2',
        deva: 'ताड़ासन',
        roman: 'Tadasana',
        english: 'Mountain Pose',
        duration: 40,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Find steady grounding and align from heels through the crown.',
          hindi: 'स्थिर आधार खोजें और एड़ी से सिर के शीर्ष तक संरेखण करें।'
        },
        image: illustrations.tadasana2,
        video: 'https://youtu.be/example20'
      },
      {
        id: 'vinyasa',
        deva: 'विन्यास',
        roman: 'Vinyasa',
        english: 'Flow Transition',
        duration: 50,
        type: 'flow',
        breathing: true,
        notes: {
          english: 'Move slowly through each transition and keep the breath even.',
          hindi: 'प्रत्येक संक्रमण के माध्यम से धीमे से चलें और श्वास को समान रखें।'
        },
        image: illustrations.vinyasa,
        video: 'https://youtu.be/example21'
      }
    ]
  },
  {
    id: 'intermediateStrengthFlow',
    title: 'Intermediate Strength Flow',
    description: {
      english: 'A stronger sequence built for standing balance, core stability, and mindful breathing.',
      hindi: 'खड़े संतुलन, कोर स्थिरता और सचेतन श्वास के लिए एक मजबूत अनुक्रम।'
    },
    safetyDescription: {
      english: 'Use a stable surface and move with steady breath during holds.',
      hindi: 'एक स्थिर सतह का उपयोग करें और होल्ड के दौरान स्थिर श्वास के साथ चलें।'
    },
    steps: [
      {
        id: 'virabhadrasana',
        deva: 'वीरभद्रासन',
        roman: 'Virabhadrasana',
        english: 'Warrior Pose',
        duration: 50,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Reach strongly through the front heel and keep the torso lifted.',
          hindi: 'सामने की एड़ी से मजबूत पहुंचें और धड़ को उठाए रखें।'
        },
        image: illustrations.virabhadrasana,
        video: 'https://youtu.be/example22'
      },
      {
        id: 'plank',
        deva: 'प्लैंक',
        roman: 'Plank',
        english: 'Plank',
        duration: 40,
        type: 'strength',
        breathing: true,
        notes: {
          english: 'Hold a long spine and draw the navel toward the spine for stability.',
          hindi: 'एक लंबी रीढ़ बनाए रखें और स्थिरता के लिए नाभि को रीढ़ की ओर खींचें।'
        },
        image: illustrations.plank,
        video: 'https://youtu.be/example23'
      }
    ]
  },
  {
    id: 'gentleRecovery',
    title: 'Gentle / Recovery',
    description: {
      english: 'A soothing recovery sequence focused on gentle mobility and restorative breathing.',
      hindi: 'कोमल गतिशीलता और पुनर्स्थापित श्वास पर केंद्रित एक सुखद पुनर्प्राप्ति अनुक्रम।'
    },
    safetyDescription: {
      english: 'Allow yourself extra time in each posture to recover fully.',
      hindi: 'पूरा आराम करने के लिए प्रत्येक आसन में अतिरिक्त समय दें।'
    },
    steps: [
      {
        id: 'supta_baddha',
        deva: 'सप्त बद्ध कोणासन',
        roman: 'Supta Baddha Konasana',
        english: 'Reclined Bound Angle Pose',
        duration: 60,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Open the hips gently and let the breath soften the inner thighs.',
          hindi: 'हिप्स को कोमलता से खोलें और श्वास से आंतरिक जांघों को आराम दें।'
        },
        image: illustrations.supta_baddha,
        video: 'https://youtu.be/example24'
      },
      {
        id: 'viparita_karani',
        deva: 'विपरीत करनी',
        roman: 'Viparita Karani',
        english: 'Legs Up the Wall',
        duration: 60,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Relax the legs fully and feel the gentle inversion support circulation.',
          hindi: 'पैरों को पूरी तरह आराम दें और हल्की उल्टी स्थिति को परिसंचरण में सहारा दें।'
        },
        image: illustrations.viparita_karani,
        video: 'https://youtu.be/example25'
      }
    ]
  },
  {
    id: 'pranayamaOm',
    title: 'Pranayama & Om',
    description: {
      english: 'Breath-centered pranayama practice followed by chanting Om for energy balance.',
      hindi: 'ऊर्जा संतुलन के लिए श्वास केंद्रित प्राणायाम अभ्यास और ओम उच्चारण।'
    },
    safetyDescription: {
      english: 'Practice breath retention only within your comfort zone and stop if lightheaded.',
      hindi: 'अपने आराम क्षेत्र के भीतर ही धारण अभ्यास करें और यदि चक्कर आये तो रुकें।'
    },
    steps: [
      {
        id: 'anulom_vilom',
        deva: 'अनुलोम विलोम',
        roman: 'Anulom Vilom',
        english: 'Alternate Nostril Breathing',
        duration: 60,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Balance the inhale and exhale and keep the breath soft and steady.',
          hindi: 'इनहेल और एक्सहेल को संतुलित करें और श्वास को नरम व स्थिर रखें।'
        },
        image: illustrations.anulom_vilom,
        video: 'https://youtu.be/example26'
      },
      {
        id: 'om_chant',
        deva: 'ओम मंत्र',
        roman: 'Om Mantra',
        english: 'Om Chanting',
        duration: 45,
        type: 'chant',
        breathing: true,
        notes: {
          english: 'Feel the vibration in your chest and head as you chant silently or aloud.',
          hindi: 'उच्चारण करते समय अपनी छाती और सिर में कंपन महसूस करें।'
        },
        image: illustrations.om_chant,
        video: 'https://youtu.be/example27'
      }
    ]
  }
];
