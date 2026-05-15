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
      english: 'Start gently, keep movement rhythmic and controlled, and reduce speed if breathing becomes strained or balance feels unstable.',
      hindi: 'हल्के से शुरू करें, गति को तालबद्ध और नियंत्रित रखें, और यदि श्वास कठिन हो जाए या संतुलन अस्थिर लगे तो गति कम करें।'
    },
    steps: [
      {
        id: 'yogic_jogging_position_1',
        deva: 'योगिक जॉगिंग स्थिति 1',
        roman: 'Yogic Jogging Sthiti 1',
        english: 'Yogic Jogging Position 1',
        duration: 60,
        type: 'warmup',
        breathing: true,
        notes: {
          english: 'Begin with light jogging movements while maintaining an easy breath rhythm.',
          hindi: 'हल्के जॉगिंग मूवमेंट के साथ शुरू करें और आसान श्वास ताल बनाए रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example28'
      },
      {
        id: 'yogic_jogging_position_2',
        deva: 'योगिक जॉगिंग स्थिति 2',
        roman: 'Yogic Jogging Sthiti 2',
        english: 'Yogic Jogging Position 2',
        duration: 60,
        type: 'warmup',
        breathing: true,
        notes: {
          english: 'Keep the spine tall and allow the arms to move freely with each step.',
          hindi: 'रीढ़ को लंबा रखें और प्रत्येक कदम के साथ भुजाएँ स्वतंत्र रूप से चलने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example29'
      },
      {
        id: 'yogic_jogging_position_3',
        deva: 'योगिक जॉगिंग स्थिति 3',
        roman: 'Yogic Jogging Sthiti 3',
        english: 'Yogic Jogging Position 3',
        duration: 60,
        type: 'warmup',
        breathing: true,
        notes: {
          english: 'Stay light on the feet and maintain a steady breathing pattern.',
          hindi: 'पैरों को हल्का रखें और एक स्थिर श्वास पैटर्न बनाए रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example30'
      },
      {
        id: 'yogic_jogging_position_4',
        deva: 'योगिक जॉगिंग स्थिति 4',
        roman: 'Yogic Jogging Sthiti 4',
        english: 'Yogic Jogging Position 4',
        duration: 45,
        type: 'warmup',
        breathing: true,
        notes: {
          english: 'Work with a faster rhythm while keeping the breath smooth.',
          hindi: 'श्वास को चिकना रखते हुए तेज़ ताल के साथ काम करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example31'
      },
      {
        id: 'yogic_jogging_position_5',
        deva: 'योगिक जॉगिंग स्थिति 5',
        roman: 'Yogic Jogging Sthiti 5',
        english: 'Yogic Jogging Position 5',
        duration: 45,
        type: 'warmup',
        breathing: true,
        notes: {
          english: 'Move with controlled energy and keep the joints mobile.',
          hindi: 'नियंत्रित ऊर्जा के साथ चलें और जोड़ गतिशील रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example32'
      },
      {
        id: 'hasta_sanchalan_kriya',
        deva: 'हस्त संचलन क्रिया',
        roman: 'Hasta Sanchalan Kriya',
        english: 'Hasta Sanchalan Kriya',
        duration: 45,
        type: 'kriya',
        breathing: true,
        notes: {
          english: 'Move the arms in wide circles while keeping the breath steady.',
          hindi: 'भुजाओं को चौड़ी परिधियों में चलाएं और श्वास को स्थिर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example33'
      },
      {
        id: 'purna_hasta_sanchalan_kriya',
        deva: 'पूर्ण हस्त संचलन क्रिया',
        roman: 'Purna Hasta Sanchalan Kriya',
        english: 'Purna Hasta Sanchalan Kriya',
        duration: 45,
        type: 'kriya',
        breathing: true,
        notes: {
          english: 'Use full arm motion and keep the shoulders relaxed.',
          hindi: 'पूर्ण भुजा गति का उपयोग करें और कंधों को आरामदायक रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example34'
      },
      {
        id: 'janu_sanchalan_kriya',
        deva: 'जानु संचलन क्रिया',
        roman: 'Janu Sanchalan Kriya',
        english: 'Janu Sanchalan Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Open the knees gently and keep your hips stable.',
          hindi: 'घुटनों को धीरे से खोलें और अपने कूल्हों को स्थिर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example35'
      },
      {
        id: 'janu_vikasak_kriya',
        deva: 'जानु विकासक क्रिया',
        roman: 'Janu Vikasak Kriya',
        english: 'Janu Vikasak Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Stretch the legs gently with each repetition and keep the spine tall.',
          hindi: 'हर आवृत्ति के साथ पैरों को धीरे से खींचें और रीढ़ को लंबा रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example36'
      },
      {
        id: 'uru_vikasak_kriya_1',
        deva: 'उरू विकासक क्रिया 1',
        roman: 'Uru Vikasak Kriya 1',
        english: 'Uru Vikasak Kriya - 1',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Open the thigh area carefully and keep the pelvic floor engaged.',
          hindi: 'जांघ क्षेत्र को सावधानीपूर्वक खोलें और श्रोणि तल्लू को सक्रिय रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example37'
      },
      {
        id: 'uru_vikasak_kriya_2',
        deva: 'उरू विकासक क्रिया 2',
        roman: 'Uru Vikasak Kriya 2',
        english: 'Uru Vikasak Kriya - 2',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Continue with controlled leg openings and rhythmic breath.',
          hindi: 'नियंत्रित पैर खोलने और तालबद्ध श्वास के साथ जारी रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example38'
      },
      {
        id: 'vaksha_vikasak_kriya',
        deva: 'वक्ष विकासक क्रिया',
        roman: 'Vaksha Vikasak Kriya',
        english: 'Vaksha Vikasak Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Open the chest with gentle movement and keep the shoulders soft.',
          hindi: 'हल्की गति से छाती खोलें और कंधों को नरम रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example39'
      },
      {
        id: 'trikonasana_kriya',
        deva: 'त्रिकोणासन क्रिया',
        roman: 'Trikonasana Kriya',
        english: 'Trikonasana Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Align the legs and reach through the fingertips with each repetition.',
          hindi: 'पैरों को संरेखित करें और प्रत्येक पुनरावृत्ति के साथ उंगलियों के माध्यम से पहुंचें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example40'
      },
      {
        id: 'konasana_kriya',
        deva: 'कोणासन क्रिया',
        roman: 'Konasana Kriya',
        english: 'Konasana Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Keep both legs active and fold forward slowly with control.',
          hindi: 'दोनों पैरों को सक्रिय रखें और नियंत्रण के साथ धीरे-धीरे आगे झुकें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example41'
      },
      {
        id: 'hastottanasana_paadhastasana_kriya',
        deva: 'हस्तोत्थानासन - पादहस्तासन क्रिया',
        roman: 'Hastottanasana - Paadhastasana Kriya',
        english: 'Hastottanasana - Paadhastasana Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Stretch the spine before folding forward and keep the breath calm.',
          hindi: 'आगे झुकने से पहले रीढ़ को खींचें और श्वास को शांत रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example42'
      },
      {
        id: 'chalit_pad_hastasana_kriya',
        deva: 'चलित पद हस्तासन क्रिया',
        roman: 'Chalit Pad Hastasana Kriya',
        english: 'Chalit Pad Hastasana Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Move with coordination and keep the spine elongated through each posture.',
          hindi: 'समन्वय के साथ चलें और प्रत्येक स्थिति में रीढ़ को लंबा रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example43'
      },
      {
        id: 'yog_nrutyasana_kriya',
        deva: 'योग नृत्यासन क्रिया',
        roman: 'Yog Nrutyasana Kriya',
        english: 'Yog Nrutyasana Kriya',
        duration: 45,
        type: 'kriya',
        breathing: false,
        notes: {
          english: 'Find rhythm in the movement and keep the gaze steady.',
          hindi: 'गति में ताल खोजें और दृष्टि को स्थिर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example44'
      },
      {
        id: 'sun_salutation',
        deva: 'सूर्य नमस्कार',
        roman: 'Surya Namaskar',
        english: 'Sun Salutation',
        duration: 150,
        type: 'flow',
        breathing: true,
        notes: {
          english: 'Complete five rounds with steady breath and smooth transitions.',
          hindi: 'पाँच चक्र पूरे करें, स्थिर श्वास और चिकनी संक्रमण के साथ।'
        },
        image: illustrations.surya_namaskar,
        video: 'https://youtu.be/example45'
      },
      {
        id: 'mishra_dand',
        deva: 'मिश्र दंड',
        roman: 'Mishra Dand',
        english: 'Mishra Dand',
        duration: 30,
        type: 'strength',
        breathing: false,
        notes: {
          english: 'Move with control through each repetition and keep the chest open.',
          hindi: 'प्रत्येक आवृत्ति में नियंत्रण के साथ चलें और छाती को खुला रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example46'
      },
      {
        id: 'easy_breathing',
        deva: 'सरल श्वास',
        roman: 'Saral Swas',
        english: 'Easy Breathing',
        duration: 45,
        type: 'breath',
        breathing: true,
        notes: {
          english: 'Relax the body and breathe gently into the abdomen.',
          hindi: 'शरीर को आराम दें और पेट में कोमलता से श्वास भरें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example47'
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
      english: 'Move with control, avoid jerks, and rest whenever strain, dizziness, pain, or discomfort appears.',
      hindi: 'नियंत्रण के साथ चलें, झटकों से बचें, और यदि खिंचाव, चक्कर, दर्द, या असुविधा दिखाई दे तो आराम करें।'
    },
    steps: [
      {
        id: 'makarasana',
        deva: 'मकरासन',
        roman: 'Makarasana',
        english: 'Crocodile Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Rest the body fully while keeping the breath slow and even.',
          hindi: 'शरीर को पूरी तरह आराम दें और श्वास को धीरे व समान रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example48'
      },
      {
        id: 'ardha_bhujangasana',
        deva: 'अर्ध भुजंगासन',
        roman: 'Ardha Bhujangasana',
        english: 'Half Cobra Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the chest gently and keep the shoulders away from the ears.',
          hindi: 'छाती को हल्के से उठाएं और कंधों को कान से दूर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example49'
      },
      {
        id: 'purna_bhujangasana',
        deva: 'पूर्ण भुजंगासन',
        roman: 'Purna Bhujangasana',
        english: 'Full Cobra Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the upper body with length through the spine and gentle breath.',
          hindi: 'रीढ़ में लम्बाई बनाए रखें और कोमल श्वास के साथ ऊपरी शरीर को उठाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example50'
      },
      {
        id: 'tiryak_bhujangasana',
        deva: 'तिर्यक भुजंगासन',
        roman: 'Tiryak Bhujangasana',
        english: 'Twisting Cobra Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Turn the torso gently while keeping the spine extended.',
          hindi: 'रीढ़ को फैलाए रखते हुए धड़ को धीरे से घुमाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example51'
      },
      {
        id: 'saral_bhujangasana',
        deva: 'सरल भुजंगासन',
        roman: 'Saral Bhujangasana',
        english: 'Simple Cobra Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the movement gentle and avoid compressing the lower back.',
          hindi: 'गतिविधि को कोमल रखें और निचली पीठ को दबाने से बचें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example52'
      },
      {
        id: 'shalabhasana',
        deva: 'शलभासन',
        roman: 'Shalabhasana',
        english: 'Locust Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the legs with a long spine and soft shoulders.',
          hindi: 'लंबी रीढ़ और कोमल कंधों के साथ पैरों को उठाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example53'
      },
      {
        id: 'dhanurasana',
        deva: 'धनुरासन',
        roman: 'Dhanurasana',
        english: 'Bow Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Open the chest and keep the legs active as you hold the pose.',
          hindi: 'छाती खोलें और मुद्रा में बनाए रखते समय पैरों को सक्रिय रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example54'
      },
      {
        id: 'bal_vishram_asana',
        deva: 'बाल विश्राम आसन',
        roman: 'Bal Vishram Asana',
        english: 'Child Rest Pose',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Allow the spine to rest and let the breath soften in the pose.',
          hindi: 'रीढ़ को आराम दें और मुद्रा में श्वास को नरम होने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example55'
      },
      {
        id: 'markat_asana',
        deva: 'मर्कटासन',
        roman: 'Markat Asana',
        english: 'Monkey Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Reach through the arms with a steady gaze and stable hip alignment.',
          hindi: 'स्थिर दृष्टि और स्थिर कूल्हे की संरेखण के साथ भुजाओं के माध्यम से पहुंचें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example56'
      },
      {
        id: 'uttanapadasana',
        deva: 'उत्तानपादासन',
        roman: 'Uttanapadasana',
        english: 'Raised Leg Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the legs with control and keep the lower back supported.',
          hindi: 'नियंत्रण के साथ पैरों को उठाएं और निचली पीठ को सहारा दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example57'
      },
      {
        id: 'naukasana',
        deva: 'नौकासन',
        roman: 'Naukasana',
        english: 'Boat Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the core engaged and the spine long throughout the hold.',
          hindi: 'कोर को सक्रिय रखें और होल्ड के दौरान रीढ़ को लंबा रखें।'
        },
        image: illustrations.navasana,
        video: 'https://youtu.be/example58'
      },
      {
        id: 'ekapada_angushtha_nasa_sparshasana',
        deva: 'एकपाद अंगुष्ठ नास स्पर्शासन',
        roman: 'Ekapada Angushtha Nasa Sparshasana',
        english: 'One-Legged Toe Touch Pose',
        duration: 15,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Stretch toward the lifted leg while keeping the spine upright.',
          hindi: 'उठे हुए पैर की ओर खींचें और रीढ़ को सीधा रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example59'
      },
      {
        id: 'pawanmuktasana',
        deva: 'पवनमुक्तासन',
        roman: 'Pawanmuktasana',
        english: 'Wind-Relieving Pose',
        duration: 15,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Draw the knees toward the chest and breathe softly into the belly.',
          hindi: 'घुटनों को छाती की ओर खींचें और पेट में कोमलता से श्वास लें।'
        },
        image: illustrations.pavanamuktasana,
        video: 'https://youtu.be/example60'
      },
      {
        id: 'ardha_halasana',
        deva: 'अर्ध हलासन',
        roman: 'Ardha Halasana',
        english: 'Half Plow Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the legs gently and allow the spine to lengthen without strain.',
          hindi: 'पैरों को धीरे से उठाएं और बिना तनाव के रीढ़ को लंबा होने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example61'
      },
      {
        id: 'padavrittasana',
        deva: 'पादवृत्तासन',
        roman: 'Padavrittasana',
        english: 'Foot-Twist Pose',
        duration: 15,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Twist from the waist and keep both shoulders level.',
          hindi: 'कमर से मरोड़ें और दोनों कंधों को स्तर पर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example62'
      },
      {
        id: 'dwichakrikasana',
        deva: 'द्विचक्रिकासन',
        roman: 'Dwichakrikasana',
        english: 'Double Wheels Pose',
        duration: 35,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Move with precision and keep the breath even through the rotations.',
          hindi: 'सटीकता के साथ चलें और मरोड़ के दौरान श्वास को समान रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example63'
      },
      {
        id: 'kandharasana',
        deva: 'कन्धरासन',
        roman: 'Kandharasana',
        english: 'Shoulder Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the shoulders active and support the weight through the arms.',
          hindi: 'कंधों को सक्रिय रखें और भार को भुजाओं के माध्यम से सहारा दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example64'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 180,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Relax fully and allow the body to absorb the practice.',
          hindi: 'पूरी तरह से आराम करें और शरीर को अभ्यास अवशोषित करने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example65'
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
      english: 'Sit in a comfortable posture with the spine, waist, and neck upright. No strain, no force, and no competition. Do all practices only according to your capacity.',
      hindi: 'रीढ़, कमर और गर्दन को सीधे रखते हुए आरामदायक मुद्रा में बैठें। कोई तनाव नहीं, कोई जबरदस्ती नहीं, और कोई प्रतियोगिता नहीं। सभी अभ्यास केवल आपकी क्षमता के अनुसार करें।'
    },
    steps: [
      {
        id: 'prayer_prarthana',
        deva: 'प्रार्थना',
        roman: 'Prarthana',
        english: 'Prayer',
        duration: 60,
        type: 'opening',
        breathing: true,
        notes: {
          english: 'Set an intention and soften the mind for the practice ahead.',
          hindi: 'एक इरादा स्थिर करें और आगे के अभ्यास के लिए मन को नरम करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example66'
      },
      {
        id: 'hasta_manibandha_kurpara_skandha_chakra',
        deva: 'हस्त–मणिबंध–कुर्पर–स्कंध चक्र',
        roman: 'Hasta-Manibandha-Kurpara-Skandha Chakra',
        english: 'Arm and Shoulder Mobility',
        duration: 30,
        type: 'warmup',
        breathing: true,
        notes: {
          english: 'Mobilize wrists, elbows, shoulders, and upper back with gentle movement.',
          hindi: 'कोमल गति के साथ कलाई, कोहनी, कंधे और ऊपरी पीठ को गतिशील करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example67'
      },
      {
        id: 'greeva_sanchalana_3_types',
        deva: 'ग्रीवा संचलन - 3 प्रकार',
        roman: 'Greeva Sanchalana - 3 Types',
        english: 'Neck Mobility - 3 Types',
        duration: 30,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Practice three neck movements with care and avoid any strain.',
          hindi: 'तीन गर्दन की गतियों का सावधानी से अभ्यास करें और किसी भी तनाव से बचें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example68'
      },
      {
        id: 'greeva_anti_pressure',
        deva: 'ग्रीवा एंटी-प्रेशर',
        roman: 'Greeva Anti-Pressure',
        english: 'Neck Anti-Pressure',
        duration: 30,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Gently release compression in the neck with supportive hand placement.',
          hindi: 'सहायक हाथ की स्थिति के साथ गर्दन में दबाव को धीरे से छोड़ें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example69'
      },
      {
        id: 'netra_chakra',
        deva: 'नेत्र चक्र',
        roman: 'Netra Chakra',
        english: 'Eye Circle',
        duration: 30,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Move the eyes in circles to relieve visual fatigue and tension.',
          hindi: 'दृष्टि थकान और तनाव को कम करने के लिए आंखों को गोल चक्कर में चलाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example70'
      },
      {
        id: 'bhastrika_pranayama',
        deva: 'भस्त्रिका प्राणायाम',
        roman: 'Bhastrika Pranayama',
        english: 'Bhastrika Breathing',
        duration: 120,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Use strong inhales and active exhales while keeping the spine lifted.',
          hindi: 'मजबूत इनहेल और सक्रिय एक्सहेल का उपयोग करें और रीढ़ को उठाए रखें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example71'
      },
      {
        id: 'kapal_bhati',
        deva: 'कपाल भाती',
        roman: 'Kapal Bhati',
        english: 'Kapal Bhati',
        duration: 600,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Practice active abdominal breathing with care and rest when needed.',
          hindi: 'सक्रिय पेट की श्वास का सावधानी से अभ्यास करें और आवश्यकता होने पर आराम लें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example72'
      },
      {
        id: 'mandukasana',
        deva: 'मंडुकासन',
        roman: 'Mandukasana',
        english: 'Frog Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Open the hips slowly and move with the breath through each repetition.',
          hindi: 'कूल्हों को धीरे से खोलें और प्रत्येक पुनरावृत्ति में श्वास के साथ चलें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example73'
      },
      {
        id: 'shashankasana',
        deva: 'शशांकासन',
        roman: 'Shashankasana',
        english: 'Moon Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Fold forward gently and allow the spine to soften.',
          hindi: 'धीरे से आगे झुकें और रीढ़ को नरम होने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example74'
      },
      {
        id: 'gomukhasana',
        deva: 'गोमुखासन',
        roman: 'Gomukhasana',
        english: 'Cow Face Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the spine upright and breathe evenly through the pose.',
          hindi: 'रीढ़ को सीधा रखें और मुद्रा में समान रूप से श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example75'
      },
      {
        id: 'vakrasana',
        deva: 'वक्रासन',
        roman: 'Vakrasana',
        english: 'Twist Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Twist gently from the waist and keep the spine long.',
          hindi: 'कमर से धीरे से मरोड़ें और रीढ़ को लंबा रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example76'
      },
      {
        id: 'ardha_chandrasana',
        deva: 'अर्ध चन्द्रासन',
        roman: 'Ardha Chandrasana',
        english: 'Half Moon Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Find balance with a broad chest and long lifted side body.',
          hindi: 'चौड़ी छाती और लंबा उठा हुआ पक्षीय शरीर के साथ संतुलन खोजें।'
        },
        image: illustrations.ardha_chandra,
        video: 'https://youtu.be/example77'
      },
      {
        id: 'ustrasana',
        deva: 'उष्ट्रासन',
        roman: 'Ustrasana',
        english: 'Camel Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Open through the front body and keep the neck long and relaxed.',
          hindi: 'सामने के शरीर से खुलें और गर्दन को लंबा व आरामदायक रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example78'
      },
      {
        id: 'marjarasana',
        deva: 'मार्जर्यासन',
        roman: 'Marjaryasana',
        english: 'Cat Pose',
        duration: 30,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Move with the breath and feel the spine flex and extend.',
          hindi: 'श्वास के साथ चलें और रीढ़ को मोड़ें व फैलाएं महसूस करें।'
        },
        image: illustrations.marjaryasana,
        video: 'https://youtu.be/example79'
      },
      {
        id: 'bahya_pranayama',
        deva: 'बाह्य प्राणायाम',
        roman: 'Bahya Pranayama',
        english: 'External Breath Holding',
        duration: 30,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Hold the breath out for a comfortable duration and relax the muscles.',
          hindi: 'आरामदायक अवधि के लिए श्वास बाहर रोकें और मांसपेशियों को आराम दें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example80'
      },
      {
        id: 'agnisar_kriya',
        deva: 'अग्निसर क्रिया',
        roman: 'Agnisar Kriya',
        english: 'Agnisar Kriya',
        duration: 30,
        type: 'kriya',
        breathing: true,
        notes: {
          english: 'Pump the belly with control and maintain a steady breath rhythm.',
          hindi: 'नियंत्रण के साथ पेट को पंप करें और एक स्थिर श्वास ताल बनाए रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example81'
      },
      {
        id: 'ujjayi_pranayama',
        deva: 'उज्जयी प्राणायाम',
        roman: 'Ujjayi Pranayama',
        english: 'Ujjayi Breathing',
        duration: 30,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Breathe with a soft ocean sound and keep the throat relaxed.',
          hindi: 'नरम महासागर ध्वनि के साथ सांस लें और गला आरामदायक रखें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example82'
      },
      {
        id: 'foot_exercises',
        deva: 'पाद व्यायाम',
        roman: 'Foot Exercises',
        english: 'Foot Exercises',
        duration: 30,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Move the feet and ankles freely to improve circulation and strength.',
          hindi: 'रक्त परिसंचरण और ताकत को बेहतर बनाने के लिए पैरों और टखनों को स्वतंत्र रूप से चलाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example83'
      },
      {
        id: 'chakki_chalan',
        deva: 'चक्की चलन',
        roman: 'Chakki Chalan',
        english: 'Mill Wheel Movement',
        duration: 30,
        type: 'warmup',
        breathing: true,
        notes: {
          english: 'Circle the legs with strength and keep the breath smooth.',
          hindi: 'पैरों को ताकत के साथ घुमाएं और श्वास को चिकना रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example84'
      },
      {
        id: 'sthit_konasana',
        deva: 'स्थित कोणासन',
        roman: 'Sthit Konasana',
        english: 'Standing Angle Pose',
        duration: 40,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the legs firm and turn the chest toward the extended side.',
          hindi: 'पैरों को मजबूत रखें और लंबे पक्ष की ओर छाती घुमाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example85'
      },
      {
        id: 'titli_asana',
        deva: 'तितली आसन',
        roman: 'Titli Asana',
        english: 'Butterfly Pose',
        duration: 300,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Stay soft and breathe deeply as you feel the inner hips open.',
          hindi: 'नरम रहें और आंतरिक कूल्हों के खुलने को महसूस करते हुए गहरी सांस लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example86'
      },
      {
        id: 'tali_vadan',
        deva: 'ताली वादन',
        roman: 'Tali Vadan',
        english: 'Palm Clapping',
        duration: 40,
        type: 'energy',
        breathing: true,
        notes: {
          english: 'Clap the palms with rhythm to energize the body and calm the mind.',
          hindi: 'शरीर को ऊर्जा देने और मन को शांत करने के लिए ताल से हथेलियाँ ताली बजाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example87'
      },
      {
        id: 'kidney_acupressure',
        deva: 'गुर्दा बिंदु दबाव',
        roman: 'Kidney Acupressure',
        english: 'Kidney Acupressure',
        duration: 30,
        type: 'therapeutic',
        breathing: false,
        notes: {
          english: 'Apply gentle pressure and maintain a relaxed breath while stimulating the area.',
          hindi: 'हल्का दबाव रखें और क्षेत्र को उत्तेजित करते समय आरामदायक श्वास बनाए रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example88'
      },
      {
        id: 'anulom_vilom',
        deva: 'अनुलोम विलोम',
        roman: 'Anulom Vilom',
        english: 'Alternate Nostril Breathing',
        duration: 600,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Balance the inhale and exhale through each nostril with a calm mind.',
          hindi: 'हर नासिका के माध्यम से इनहेल और एक्सहेल को शांत मन से संतुलित करें।'
        },
        image: illustrations.anulom_vilom,
        video: 'https://youtu.be/example89'
      },
      {
        id: 'bhramari',
        deva: 'भ्रमरी',
        roman: 'Bhramari',
        english: 'Bee Breath',
        duration: 30,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Hum softly while breathing out and feel the vibration in your head.',
          hindi: 'नरमी से बाहरी सांस लेते समय गूंजें और सिर में कंपन महसूस करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example90'
      },
      {
        id: 'udgeeth_pranayama',
        deva: 'उद्गीथ प्राणायाम',
        roman: 'Udgeeth Pranayama',
        english: 'Udgeeth Breath',
        duration: 30,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Chant the long Om sound with each exhale and keep the breath smooth.',
          hindi: 'हर बाहरी सांस के साथ लंबा ओम ध्वनि उच्चारित करें और श्वास को चिकना रखें।'
        },
        image: illustrations.om_chant,
        video: 'https://youtu.be/example91'
      },
      {
        id: 'pranav_pranayama',
        deva: 'प्रणव प्राणायाम',
        roman: 'Pranav Pranayama',
        english: 'Pranav Breath',
        duration: 180,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Focus on the vibration of the sound and keep the breath gentle.',
          hindi: 'ध्वनि के कंपन पर ध्यान दें और श्वास को कोमल रखें।'
        },
        image: illustrations.om_chant,
        video: 'https://youtu.be/example92'
      },
      {
        id: 'simhasana',
        deva: 'सिंहासन',
        roman: 'Simhasana',
        english: 'Lion Pose',
        duration: 30,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Open the mouth wide and breathe with energy through the throat.',
          hindi: 'मुंह को चौड़ा खोलें और गले के माध्यम से ऊर्जा के साथ श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example93'
      },
      {
        id: 'hasyasana',
        deva: 'हास्यासन',
        roman: 'Hasyasana',
        english: 'Laughing Pose',
        duration: 30,
        type: 'asana',
        breathing: false,
        notes: {
          english: 'Smile and breathe with lightness to release tension.',
          hindi: 'मुस्कुराएं और तनाव को मुक्त करने के लिए हल्की श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example94'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Rest deeply after the practice and allow the full sequence to settle.',
          hindi: 'अभ्यास के बाद गहरी विश्राम करें और पूरे अनुक्रम को बैठने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example95'
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
        id: 'diaphragmatic_breath',
        deva: 'डायाफ्रामिक श्वास',
        roman: 'Diaphragmatic Swas',
        english: 'Diaphragmatic Breath',
        duration: 45,
        type: 'breath',
        breathing: true,
        notes: {
          english: 'Breathe deeply into the belly to support relaxation and digestion.',
          hindi: 'पाचन और विश्राम का समर्थन करने के लिए पेट में गहराई से श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example96'
      },
      {
        id: 'sun_salutation',
        deva: 'सूर्य नमस्कार',
        roman: 'Surya Namaskar',
        english: 'Sun Salutation',
        duration: 60,
        type: 'flow',
        breathing: true,
        notes: {
          english: 'Follow a gentle round with steady breath and smooth movement.',
          hindi: 'स्थिर श्वास और चिकनी गति के साथ एक कोमल चक्र का पालन करें।'
        },
        image: illustrations.surya_namaskar,
        video: 'https://youtu.be/example97'
      },
      {
        id: 'cat_cow',
        deva: 'बिल्ली-गाय',
        roman: 'Cat-Cow',
        english: 'Cat-Cow',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Move the spine with the breath to relieve tension and improve circulation.',
          hindi: 'तनाव को दूर करने और परिसंचरण को बेहतर बनाने के लिए श्वास के साथ रीढ़ को चलाएं।'
        },
        image: illustrations.marjaryasana,
        video: 'https://youtu.be/example98'
      },
      {
        id: 'seated_forward_fold',
        deva: 'बैठे हुए आगे झुकाव',
        roman: 'Seated Forward Fold',
        english: 'Seated Forward Fold',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Fold with a long spine and breathe into the back of the body.',
          hindi: 'लंबी रीढ़ के साथ आगे झुकें और शरीर के पीछे श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example99'
      },
      {
        id: 'cobra_pose',
        deva: 'भुजंगासन',
        roman: 'Bhujangasana',
        english: 'Cobra Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the chest gently and distribute the backbend evenly.',
          hindi: 'छाती को धीरे से उठाएं और पीछे की झुकाव को समान रूप से वितरित करें।'
        },
        image: illustrations.bhujangasana,
        video: 'https://youtu.be/example100'
      },
      {
        id: 'wind_relieving_pose',
        deva: 'पवनमुक्तासन',
        roman: 'Pawanmuktasana',
        english: 'Wind-Relieving Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Feel the stretch in the lower belly and breathe softly.',
          hindi: 'निचले पेट में खिंचाव महसूस करें और धीरे से श्वास लें।'
        },
        image: illustrations.pavanamuktasana,
        video: 'https://youtu.be/example101'
      },
      {
        id: 'mandukasana',
        deva: 'मंडुकासन',
        roman: 'Mandukasana',
        english: 'Frog Pose',
        duration: 60,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Move through three variations and breathe into each release.',
          hindi: 'तीन विविधताओं के माध्यम से चलें और प्रत्येक रिलीज़ में श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example102'
      },
      {
        id: 'bridge_pose',
        deva: 'सेतुबंधासन',
        roman: 'Setu Bandhasana',
        english: 'Bridge Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the hips with support and feel the breath moving into the chest.',
          hindi: 'सहारा लेकर कूल्हों को उठाएं और श्वास को छाती में जाते हुए महसूस करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example103'
      },
      {
        id: 'anulom_vilom',
        deva: 'अनुलोम विलोम',
        roman: 'Anulom Vilom',
        english: 'Alternate Nostril Breathing',
        duration: 60,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Balance the breath through both nostrils with calm awareness.',
          hindi: 'दोनों नासिकाओं के माध्यम से श्वास को शांत जागरूकता के साथ संतुलित करें।'
        },
        image: illustrations.anulom_vilom,
        video: 'https://youtu.be/example104'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Release the practice and rest fully, letting the breath settle.',
          hindi: 'अभ्यास को छोड़ दें और पूरी तरह से आराम करें, श्वास को बैठने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example105'
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
        id: 'bhastrika_pranayama',
        deva: 'भस्त्रिका प्राणायाम',
        roman: 'Bhastrika Pranayama',
        english: 'Bhastrika Breathing',
        duration: 120,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Use strong breath cycles to energize and warm up the body.',
          hindi: 'शरीर को ऊर्जा देने और गर्म करने के लिए मजबूत श्वास चक्रों का उपयोग करें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example106'
      },
      {
        id: 'sun_salutation',
        deva: 'सूर्य नमस्कार',
        roman: 'Surya Namaskar',
        english: 'Sun Salutation',
        duration: 80,
        type: 'flow',
        breathing: true,
        notes: {
          english: 'Move through the flow with steady breathing and active legs.',
          hindi: 'स्थिर श्वास और सक्रिय पैरों के साथ प्रवाह के माध्यम से चलें।'
        },
        image: illustrations.surya_namaskar,
        video: 'https://youtu.be/example107'
      },
      {
        id: 'chair_pose_pulses',
        deva: 'कुर्सी अवस्था फड़क',
        roman: 'Chair Pose Pulses',
        english: 'Chair Pose Pulses',
        duration: 45,
        type: 'strength',
        breathing: true,
        notes: {
          english: 'Pulse lightly in chair pose while keeping the knees stacked and the core engaged.',
          hindi: 'घुटनों को एक के ऊपर एक रखते हुए और कोर को सक्रिय रखते हुए कुर्सी मुद्रा में हल्का फड़कें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example108'
      },
      {
        id: 'plank_hold',
        deva: 'प्लैंक होल्ड',
        roman: 'Plank Hold',
        english: 'Plank Hold',
        duration: 50,
        type: 'strength',
        breathing: true,
        notes: {
          english: 'Maintain a straight line from head to heels while breathing steadily.',
          hindi: 'सिर से एड़ी तक सीधी रेखा बनाए रखें और स्थिर श्वास लें।'
        },
        image: illustrations.plank,
        video: 'https://youtu.be/example109'
      },
      {
        id: 'high_lunge',
        deva: 'उच्च लंज',
        roman: 'High Lunge',
        english: 'High Lunge',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Sink into the front leg and draw energy up through the spine.',
          hindi: 'सामने के पैर में दबाव डालें और रीढ़ के माध्यम से ऊर्जा को ऊपर खींचें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example110'
      },
      {
        id: 'boat_pose',
        deva: 'नौकासन',
        roman: 'Naukasana',
        english: 'Boat Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Engage the core and keep the spine long as you hold the pose.',
          hindi: 'कोर को सक्रिय रखें और मुद्रा को पकड़ते समय रीढ़ को लंबा रखें।'
        },
        image: illustrations.navasana,
        video: 'https://youtu.be/example111'
      },
      {
        id: 'bridge_pose',
        deva: 'सेतुबंधासन',
        roman: 'Setu Bandhasana',
        english: 'Bridge Pose',
        duration: 50,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the hips with control and breathe evenly into the chest.',
          hindi: 'नियंत्रण के साथ कूल्हों को उठाएं और छाती में समान रूप से सांस लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example112'
      },
      {
        id: 'kapal_bhati',
        deva: 'कपाल भाती',
        roman: 'Kapal Bhati',
        english: 'Kapal Bhati',
        duration: 120,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Perform the technique with an active abdomen and relaxed shoulders.',
          hindi: 'सक्रिय पेट और आरामदायक कंधों के साथ तकनीक करें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example113'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Let the body recover and integrate the strength work from the flow.',
          hindi: 'शरीर को बहाल होने दें और प्रवाह से शक्ति कार्य को एकीकृत करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example114'
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
        id: 'easy_breathing',
        deva: 'सरल श्वास',
        roman: 'Saral Swas',
        english: 'Easy Breathing',
        duration: 45,
        type: 'breath',
        breathing: true,
        notes: {
          english: 'Breathe gently and bring awareness to your lower back.',
          hindi: 'धीरे से सांस लें और अपनी निचली पीठ पर जागरूकता लाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example115'
      },
      {
        id: 'pelvic_tilts',
        deva: 'पेल्विक टिल्ट्स',
        roman: 'Pelvic Tilts',
        english: 'Pelvic Tilts',
        duration: 40,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Tilt the pelvis with control and feel the lower back soften.',
          hindi: 'नियंत्रण के साथ पेल्विस को झुकाएं और निचली पीठ को नरम महसूस करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example116'
      },
      {
        id: 'cat_cow',
        deva: 'बिल्ली-गाय',
        roman: 'Cat-Cow',
        english: 'Cat-Cow',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Flow with the breath to release tension in the spine.',
          hindi: 'रीढ़ में तनाव को हटाने के लिए श्वास के साथ बहें।'
        },
        image: illustrations.marjaryasana,
        video: 'https://youtu.be/example117'
      },
      {
        id: 'child_pose',
        deva: 'बालासन',
        roman: 'Balasana',
        english: 'Child Pose',
        duration: 45,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Relax the lower back and breathe into the hips.',
          hindi: 'निचली पीठ को आराम दें और कूल्हों में श्वास लें।'
        },
        image: illustrations.balasana,
        video: 'https://youtu.be/example118'
      },
      {
        id: 'sphinx_pose',
        deva: 'स्फिंक्स मुद्रा',
        roman: 'Sphinx Pose',
        english: 'Sphinx Pose',
        duration: 50,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the chest gently and keep the lower back supported.',
          hindi: 'छाती को धीरे से उठाएं और निचली पीठ को सहारा दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example119'
      },
      {
        id: 'knees_to_chest',
        deva: 'घुटने छाती की ओर',
        roman: 'Knees to Chest',
        english: 'Knees to Chest',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Draw the knees in gently and feel the lower spine release.',
          hindi: 'घुटनों को धीरे से भीतर खींचें और निचली रीढ़ को छोड़ने को महसूस करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example120'
      },
      {
        id: 'supine_twist',
        deva: 'सुपाइन ट्विस्ट',
        roman: 'Supine Twist',
        english: 'Supine Twist',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Twist gently while keeping the shoulders grounded.',
          hindi: 'कंधों को जमीन पर रखते हुए धीरे से मरोड़ें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example121'
      },
      {
        id: 'bridge_pose',
        deva: 'सेतुबंधासन',
        roman: 'Setu Bandhasana',
        english: 'Bridge Pose',
        duration: 50,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the hips with support and feel the spine lengthen.',
          hindi: 'सहारा लेकर कूल्हों को उठाएं और रीढ़ को लंबा महसूस करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example122'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Settle into the floor and let the lower back soften fully.',
          hindi: 'फर्श में बैठें और निचली पीठ को पूरी तरह नरम होने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example123'
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
        id: 'diaphragmatic_breath',
        deva: 'डायाफ्रामिक श्वास',
        roman: 'Diaphragmatic Swas',
        english: 'Diaphragmatic Breath',
        duration: 45,
        type: 'breath',
        breathing: true,
        notes: {
          english: 'Breathe into the belly and prepare the body for knee mobility.',
          hindi: 'पेट में श्वास लें और घुटने की गतिशीलता के लिए शरीर को तैयार करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example124'
      },
      {
        id: 'ankle_rotations',
        deva: 'टखने घुमाव',
        roman: 'Ankle Rotations',
        english: 'Ankle Rotations',
        duration: 40,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Rotate the ankles gently to improve knee support and circulation.',
          hindi: 'टखनों को धीरे से घुमाएं ताकि घुटने के सहारे और परिसंचरण में सुधार हो।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example125'
      },
      {
        id: 'hamstring_stretch',
        deva: 'हैमस्ट्रिंग स्ट्रेच',
        roman: 'Hamstring Stretch',
        english: 'Hamstring Stretch',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Stretch the back of the leg gently and keep the knee soft.',
          hindi: 'पैर के पीछे को धीरे से खींचें और घुटने को नरम रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example126'
      },
      {
        id: 'quad_set',
        deva: 'क्वाड सेट',
        roman: 'Quad Set',
        english: 'Quad Set',
        duration: 40,
        type: 'strength',
        breathing: false,
        notes: {
          english: 'Activate the thigh muscles while keeping the knee stable.',
          hindi: 'घुटने को स्थिर रखते हुए जांघ की मांसपेशियों को सक्रिय करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example127'
      },
      {
        id: 'bridge_pose',
        deva: 'सेतुबंधासन',
        roman: 'Setu Bandhasana',
        english: 'Bridge Pose',
        duration: 50,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the hips carefully and keep the knees aligned over the ankles.',
          hindi: 'कूल्हों को सावधानीपूर्वक उठाएं और घुटनों को टखनों के ऊपर संरेखित रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example128'
      },
      {
        id: 'supported_chair_pose',
        deva: 'समर्थित कुर्सी अवस्था',
        roman: 'Supported Chair Pose',
        english: 'Supported Chair Pose',
        duration: 45,
        type: 'strength',
        breathing: true,
        notes: {
          english: 'Sit back in the pose with support and keep the knees tracking forward.',
          hindi: 'सपोर्ट के साथ मुद्रा में बैठें और घुटनों को आगे की ओर ट्रैक करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example129'
      },
      {
        id: 'legs_up_the_wall',
        deva: 'विपरीत करनी',
        roman: 'Viparita Karani',
        english: 'Legs Up the Wall',
        duration: 50,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Relax the knees and lower legs while breathing calmly.',
          hindi: 'घुटनों और निचले पैरों को आराम दें और शांति से श्वास लें।'
        },
        image: illustrations.viparita_karani,
        video: 'https://youtu.be/example130'
      },
      {
        id: 'anulom_vilom',
        deva: 'अनुलोम विलोम',
        roman: 'Anulom Vilom',
        english: 'Alternate Nostril Breathing',
        duration: 60,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Balance the breath and allow the body to settle after the workout.',
          hindi: 'श्वास को संतुलित करें और कसरत के बाद शरीर को शांति में आने दें।'
        },
        image: illustrations.anulom_vilom,
        video: 'https://youtu.be/example131'
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
        id: 'easy_breathing',
        deva: 'सरल श्वास',
        roman: 'Saral Swas',
        english: 'Easy Breathing',
        duration: 45,
        type: 'breath',
        breathing: true,
        notes: {
          english: 'Soften the neck and breathe calmly before moving the head.',
          hindi: 'गर्दन को नरम करें और सिर हिलाने से पहले शांतिपूर्वक सांस लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example132'
      },
      {
        id: 'neck_isometrics',
        deva: 'गर्दन आइसोमेट्रिक्स',
        roman: 'Neck Isometrics',
        english: 'Neck Isometrics',
        duration: 40,
        type: 'strength',
        breathing: false,
        notes: {
          english: 'Apply gentle resistance and keep the motion controlled.',
          hindi: 'हल्का प्रतिरोध लागू करें और गति को नियंत्रित रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example133'
      },
      {
        id: 'shoulder_rolls',
        deva: 'कंधा घूर्णन',
        roman: 'Shoulder Rolls',
        english: 'Shoulder Rolls',
        duration: 45,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Roll the shoulders slowly to release upper neck tension.',
          hindi: 'ऊपरी गर्दन के तनाव को दूर करने के लिए कंधों को धीरे से घुमाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example134'
      },
      {
        id: 'thread_the_needle',
        deva: 'थ्रेड द नीडल',
        roman: 'Thread the Needle',
        english: 'Thread the Needle',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Open the shoulder gently and keep the neck relaxed.',
          hindi: 'कंधे को धीरे से खोलें और गर्दन को आरामदायक रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example135'
      },
      {
        id: 'cat_cow',
        deva: 'बिल्ली-गाय',
        roman: 'Cat-Cow',
        english: 'Cat-Cow',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Flow the spine with each inhale and exhale to relieve stiffness.',
          hindi: 'कठोरता को दूर करने के लिए प्रत्येक इनहेल और एक्सहेल के साथ रीढ़ को बहाएँ।'
        },
        image: illustrations.marjaryasana,
        video: 'https://youtu.be/example136'
      },
      {
        id: 'supported_fish_pose',
        deva: 'समर्थित मत्स्यासन',
        roman: 'Supported Fish Pose',
        english: 'Supported Fish Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Support the upper back and breathe into the front body.',
          hindi: 'ऊपरी पीठ का समर्थन करें और सामने के शरीर में श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example137'
      },
      {
        id: 'bhramari',
        deva: 'भ्रमरी',
        roman: 'Bhramari',
        english: 'Bee Breath',
        duration: 45,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Hum softly and feel the vibration around the head and neck.',
          hindi: 'धीरे से गूंजें और सिर और गर्दन के चारों ओर कंपन महसूस करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example138'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Allow the neck and shoulders to soften completely.',
          hindi: 'गर्दन और कंधों को पूरी तरह से नरम होने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example139'
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
        id: 'prayer_prarthana',
        deva: 'प्रार्थना',
        roman: 'Prarthana',
        english: 'Prayer',
        duration: 60,
        type: 'opening',
        breathing: true,
        notes: {
          english: 'Begin with a calm intention and steady breath.',
          hindi: 'शांत इरादे और स्थिर श्वास के साथ शुरू करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example140'
      },
      {
        id: 'neck_rolls',
        deva: 'गर्दन रोल',
        roman: 'Neck Rolls',
        english: 'Neck Rolls',
        duration: 45,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Roll the neck slowly and keep the movement easy.',
          hindi: 'गर्दन को धीरे से घुमाएं और गति को आसान रखें।'
        },
        image: illustrations.neck_rotations,
        video: 'https://youtu.be/example141'
      },
      {
        id: 'shoulder_rolls',
        deva: 'कंधा घूर्णन',
        roman: 'Shoulder Rolls',
        english: 'Shoulder Rolls',
        duration: 45,
        type: 'warmup',
        breathing: false,
        notes: {
          english: 'Relax the shoulders with each circular motion.',
          hindi: 'प्रत्येक वृत्ताकार गति के साथ कंधों को आराम दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example142'
      },
      {
        id: 'cat_cow',
        deva: 'बिल्ली-गाय',
        roman: 'Cat-Cow',
        english: 'Cat-Cow',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Flow with the breath to warm the spine and open the torso.',
          hindi: 'रीढ़ को गर्म करने और धड़ को खोलने के लिए श्वास के साथ बहें।'
        },
        image: illustrations.marjaryasana,
        video: 'https://youtu.be/example143'
      },
      {
        id: 'downward_dog',
        deva: 'अधोमुख श्वान',
        roman: 'Adho Mukha Svan',
        english: 'Downward Dog',
        duration: 50,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Press the hands into the mat and lift the hips high.',
          hindi: 'हाथों को मैट में दबाएं और कूल्हों को ऊँचा उठाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example144'
      },
      {
        id: 'low_lunge',
        deva: 'नीची लंज',
        roman: 'Low Lunge',
        english: 'Low Lunge',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Open the hips and keep the front knee over the ankle.',
          hindi: 'कूल्हों को खोलें और सामने के घुटने को टखने के ऊपर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example145'
      },
      {
        id: 'warrior_ii',
        deva: 'वीरभद्रासन II',
        roman: 'Virabhadrasana II',
        english: 'Warrior II',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the arms wide and gaze over the front fingertips.',
          hindi: 'भुजाओं को चौड़ा रखें और सामने की उंगलियों पर देखें।'
        },
        image: illustrations.virabhadrasana,
        video: 'https://youtu.be/example146'
      },
      {
        id: 'tree_pose',
        deva: 'वृक्षासन',
        roman: 'Vrikshasana',
        english: 'Tree Pose',
        duration: 40,
        type: 'balance',
        breathing: true,
        notes: {
          english: 'Find a steady gaze and root through the standing foot.',
          hindi: 'एक स्थिर दृष्टि खोजें और खड़े पैर के माध्यम से जड़ें बनाएं।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example147'
      },
      {
        id: 'seated_forward_fold',
        deva: 'बैठे हुए आगे झुकाव',
        roman: 'Seated Forward Fold',
        english: 'Seated Forward Fold',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Fold with a long spine and breathe into the hamstrings.',
          hindi: 'लंबी रीढ़ के साथ आगे झुकें और हैमस्ट्रिंग में श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example148'
      },
      {
        id: 'supine_twist',
        deva: 'सुपाइन ट्विस्ट',
        roman: 'Supine Twist',
        english: 'Supine Twist',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Twist gently while keeping the shoulders grounded.',
          hindi: 'कंधों को जमीन पर रखते हुए धीरे से मरोड़ें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example149'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Rest fully and integrate the introductory practice.',
          hindi: 'पूरी तरह आराम करें और प्रारंभिक अभ्यास को एकीकृत करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example150'
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
        id: 'bhastrika_pranayama',
        deva: 'भस्त्रिका प्राणायाम',
        roman: 'Bhastrika Pranayama',
        english: 'Bhastrika Breathing',
        duration: 120,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Warm up with strong breath and steady posture alignment.',
          hindi: 'मजबूत श्वास और स्थिर मुद्रा संरेखण के साथ गर्म करें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example151'
      },
      {
        id: 'sun_salutation',
        deva: 'सूर्य नमस्कार',
        roman: 'Surya Namaskar',
        english: 'Sun Salutation',
        duration: 80,
        type: 'flow',
        breathing: true,
        notes: {
          english: 'Move dynamically through the sequence with even breath.',
          hindi: 'समान श्वास के साथ गतिशील रूप से अनुक्रम से गुजरें।'
        },
        image: illustrations.surya_namaskar,
        video: 'https://youtu.be/example152'
      },
      {
        id: 'chair_pose_pulses',
        deva: 'कुर्सी अवस्था फड़क',
        roman: 'Chair Pose Pulses',
        english: 'Chair Pose Pulses',
        duration: 45,
        type: 'strength',
        breathing: true,
        notes: {
          english: 'Pulse with energy and keep the knees over the ankles.',
          hindi: 'ऊर्जा के साथ फड़कें और घुटनों को टखनों के ऊपर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example153'
      },
      {
        id: 'plank_hold',
        deva: 'प्लैंक होल्ड',
        roman: 'Plank Hold',
        english: 'Plank Hold',
        duration: 50,
        type: 'strength',
        breathing: true,
        notes: {
          english: 'Maintain a straight line from head to heels while breathing steadily.',
          hindi: 'सिर से एड़ी तक सीधी रेखा बनाए रखें और स्थिर श्वास लें।'
        },
        image: illustrations.plank,
        video: 'https://youtu.be/example154'
      },
      {
        id: 'cobra_to_child_pose',
        deva: 'भुजंगासन से बालासन',
        roman: 'Cobra to Child Pose',
        english: 'Cobra to Child Pose',
        duration: 50,
        type: 'flow',
        breathing: true,
        notes: {
          english: 'Transition slowly between cobra and child pose with the breath.',
          hindi: 'श्वास के साथ भुजंगासन और बालासन के बीच धीरे से संक्रमण करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example155'
      },
      {
        id: 'crescent_lunge',
        deva: 'चन्द्र लंज',
        roman: 'Crescent Lunge',
        english: 'Crescent Lunge',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Keep the front knee bent and the back leg active with a tall torso.',
          hindi: 'सामने के घुटने को मोड़ें और ऊँचा धड़ के साथ पीछे की टांग को सक्रिय रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example156'
      },
      {
        id: 'warrior_iii',
        deva: 'वीरभद्र III',
        roman: 'Virabhadrasana III',
        english: 'Warrior III',
        duration: 45,
        type: 'balance',
        breathing: true,
        notes: {
          english: 'Reach through the lifted leg and keep the torso parallel to the floor.',
          hindi: 'उठे हुए पैर के माध्यम से पहुंचें और धड़ को फर्श के समानांतर रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example157'
      },
      {
        id: 'boat_pose',
        deva: 'नौकासन',
        roman: 'Naukasana',
        english: 'Boat Pose',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Hold the core engaged and breathe into the lower belly.',
          hindi: 'कोर को सक्रिय रखें और निचले पेट में श्वास लें।'
        },
        image: illustrations.navasana,
        video: 'https://youtu.be/example158'
      },
      {
        id: 'bridge_pose',
        deva: 'सेतुबंधासन',
        roman: 'Setu Bandhasana',
        english: 'Bridge Pose',
        duration: 50,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Lift the hips with support and breathe evenly into the chest.',
          hindi: 'सहारा लेकर कूल्हों को उठाएं और छाती में समान रूप से सांस लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example159'
      },
      {
        id: 'happy_baby',
        deva: 'हैपी बेबी',
        roman: 'Happy Baby',
        english: 'Happy Baby',
        duration: 40,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Hold the feet gently and let the hips open with each breath.',
          hindi: 'पैरों को धीरे से पकड़ें और प्रत्येक सांस के साथ कूल्हों को खोलें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example160'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Rest deeply after the strength sequence to integrate the practice.',
          hindi: 'शक्ति अनुक्रम के बाद अभ्यास को एकीकृत करने के लिए गहरी विश्राम करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example161'
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
        id: 'easy_breathing',
        deva: 'सरल श्वास',
        roman: 'Saral Swas',
        english: 'Easy Breathing',
        duration: 45,
        type: 'breath',
        breathing: true,
        notes: {
          english: 'Breathe slowly and let the body settle into the recovery sequence.',
          hindi: 'धीरे-धीरे सांस लें और शरीर को पुनर्प्राप्ति अनुक्रम में बैठने दें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example162'
      },
      {
        id: 'seated_side_stretch',
        deva: 'बैठे हुए साइड स्ट्रेच',
        roman: 'Seated Side Stretch',
        english: 'Seated Side Stretch',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Lengthen the side body and keep the breath soft.',
          hindi: 'पक्षीय शरीर को लंबा करें और श्वास को नरम रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example163'
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
          english: 'Rotate gently and keep the spine tall while releasing the waist.',
          hindi: 'धीरे से घूमें और कमर को छोड़ते हुए रीढ़ को लंबा रखें।'
        },
        image: illustrations.seated_twist,
        video: 'https://youtu.be/example164'
      },
      {
        id: 'cat_cow',
        deva: 'बिल्ली-गाय',
        roman: 'Cat-Cow',
        english: 'Cat-Cow',
        duration: 45,
        type: 'asana',
        breathing: true,
        notes: {
          english: 'Move with the breath to ease spinal tension.',
          hindi: 'रीढ़ की तनाव को कम करने के लिए श्वास के साथ चलें।'
        },
        image: illustrations.marjaryasana,
        video: 'https://youtu.be/example165'
      },
      {
        id: 'thread_the_needle',
        deva: 'थ्रेड द नीडल',
        roman: 'Thread the Needle',
        english: 'Thread the Needle',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Open the shoulder gently and keep the neck relaxed.',
          hindi: 'कंधे को धीरे से खोलें और गर्दन को आरामदायक रखें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example166'
      },
      {
        id: 'child_pose',
        deva: 'बालासन',
        roman: 'Balasana',
        english: 'Child Pose',
        duration: 45,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Rest the hips and relax the back with each breath.',
          hindi: 'कूल्हों को आराम दें और प्रत्येक सांस के साथ पीठ को आराम दें।'
        },
        image: illustrations.balasana,
        video: 'https://youtu.be/example167'
      },
      {
        id: 'figure_four_stretch',
        deva: 'फिगर फोर स्ट्रेच',
        roman: 'Figure Four Stretch',
        english: 'Figure Four Stretch',
        duration: 45,
        type: 'stretch',
        breathing: true,
        notes: {
          english: 'Cross one ankle over the opposite knee and breathe into the hips.',
          hindi: 'एक टखने को विपरीत घुटने के ऊपर रखें और कूल्हों में श्वास लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example168'
      },
      {
        id: 'legs_up_the_wall',
        deva: 'विपरीत करनी',
        roman: 'Viparita Karani',
        english: 'Legs Up the Wall',
        duration: 50,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Relax the legs and let the breath support the restorative pause.',
          hindi: 'पैरों को आराम दें और पुनर्स्थापित विराम का समर्थन करने के लिए श्वास दें।'
        },
        image: illustrations.viparita_karani,
        video: 'https://youtu.be/example169'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Complete the recovery sequence by resting deeply and breathing softly.',
          hindi: 'गहरी विश्राम और नरम श्वास के साथ पुनर्प्राप्ति अनुक्रम को पूरा करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example170'
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
        id: 'bhastrika_pranayama',
        deva: 'भस्त्रिका प्राणायाम',
        roman: 'Bhastrika Pranayama',
        english: 'Bhastrika Breathing',
        duration: 120,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Use active inhalations and exhalations to energize the practice.',
          hindi: 'अभ्यास को ऊर्जा देने के लिए सक्रिय इनहेल और एक्सहेल का उपयोग करें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example171'
      },
      {
        id: 'kapal_bhati',
        deva: 'कपाल भाती',
        roman: 'Kapal Bhati',
        english: 'Kapal Bhati',
        duration: 180,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Practice the cleansing breath carefully and keep the shoulders relaxed.',
          hindi: 'साफ़ करने वाली श्वास को सावधानी से करें और कंधों को आरामदायक रखें।'
        },
        image: illustrations.breath1,
        video: 'https://youtu.be/example172'
      },
      {
        id: 'anulom_vilom',
        deva: 'अनुलोम विलोम',
        roman: 'Anulom Vilom',
        english: 'Alternate Nostril Breathing',
        duration: 180,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Balance the breath slowly and stay grounded in each cycle.',
          hindi: 'श्वास को धीरे-धीरे संतुलित करें और प्रत्येक चक्र में स्थिर रहें।'
        },
        image: illustrations.anulom_vilom,
        video: 'https://youtu.be/example173'
      },
      {
        id: 'bhramari',
        deva: 'भ्रमरी',
        roman: 'Bhramari',
        english: 'Bee Breath',
        duration: 60,
        type: 'pranayama',
        breathing: true,
        notes: {
          english: 'Hum softly while breathing out and feel the vibration in your head.',
          hindi: 'नरमी से बाहरी सांस लेते समय गूंजें और सिर में कंपन महसूस करें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example174'
      },
      {
        id: 'om_pranav',
        deva: 'ओम प्रणव',
        roman: 'Om Pranav',
        english: 'Om Chanting',
        duration: 45,
        type: 'chant',
        breathing: true,
        notes: {
          english: 'Chant Om with awareness and feel the vibration through the body.',
          hindi: 'जागरूकता के साथ ओम उच्चारित करें और शरीर में कंपन महसूस करें।'
        },
        image: illustrations.om_chant,
        video: 'https://youtu.be/example175'
      },
      {
        id: 'savasana_yog_nidra',
        deva: 'शनैवासन / योग निद्रा',
        roman: 'Savasana / Yog Nidra',
        english: 'Corpse Pose / Yogic Sleep',
        duration: 120,
        type: 'rest',
        breathing: true,
        notes: {
          english: 'Rest deeply after the pranayama sequence and enjoy the stillness.',
          hindi: 'प्राणायाम अनुक्रम के बाद गहरी विश्राम करें और शांति का आनंद लें।'
        },
        image: illustrations.default,
        video: 'https://youtu.be/example176'
      }
    ]
  }
];
