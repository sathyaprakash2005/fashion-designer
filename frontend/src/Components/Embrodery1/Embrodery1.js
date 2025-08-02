import React, { useState, useEffect } from 'react';
import './Embrodery1.css'
import { Link } from 'react-router-dom';
import model_1 from '../../Assets/image/model_1.jpg';
import model_2 from '../../Assets/image/model_2.jpg';
import model_3 from '../../Assets/image/model_3.jpg';
import model_4 from '../../Assets/image/model_4.jpg';
import model_5 from '../../Assets/image/model_5.jpg';
import model_6 from '../../Assets/image/model_6.jpg';
import model_7 from '../../Assets/image/model_7.jpg';
import model_8 from '../../Assets/image/model_8.jpg';
import model_9 from '../../Assets/image/model_9.jpg';
import model_10 from '../../Assets/image/model_10.jpg';
import model_11 from '../../Assets/image/model_11.jpg';
import model_12 from '../../Assets/image/model_12.jpg';
import model_13 from '../../Assets/image/model_13.jpg';
import model_14 from '../../Assets/image/model_14.jpg';
import model_15 from '../../Assets/image/model_15.jpg';
import model_16 from '../../Assets/image/model_16.jpg';
import model_17 from '../../Assets/image/model_17.jpg';
import model_18 from '../../Assets/image/model_18.jpg';
import model_19 from '../../Assets/image/model_19.jpg';
import model_20 from '../../Assets/image/model_20.jpg';
import model_21 from '../../Assets/image/model_21.jpg';
import model_22 from '../../Assets/image/model_22.jpg';
import model_23 from '../../Assets/image/model_23.jpg';
import model_24 from '../../Assets/image/model_24.jpg';
import model_25 from '../../Assets/image/model_25.jpg';
import model_26 from '../../Assets/image/model_26.jpg';
import model_27 from '../../Assets/image/model_27.jpg';
import model_28 from '../../Assets/image/model_28.jpg';
import model_29 from '../../Assets/image/model_29.jpg';
import model_30 from '../../Assets/image/model_30.jpg';
import model_31 from '../../Assets/image/model_31.jpg';
import model_32 from '../../Assets/image/model_32.jpg';
import model_33 from '../../Assets/image/model_33.jpg';
import model_34 from '../../Assets/image/model_34.jpg';
import model_35 from '../../Assets/image/model_35.jpg';
import model_36 from '../../Assets/image/model_36.jpg';
import model_37 from '../../Assets/image/model_37.jpg';
import model_38 from '../../Assets/image/model_38.jpg';
import model_39 from '../../Assets/image/model_39.jpg';
import model_40 from '../../Assets/image/model_40.jpg';
import model_41 from '../../Assets/image/model_41.jpg';
import model_42 from '../../Assets/image/model_42.jpg';
import model_43 from '../../Assets/image/model_43.jpg';
import model_44 from '../../Assets/image/model_44.jpg';
import model_45 from '../../Assets/image/model_45.jpg';
import model_46 from '../../Assets/image/model_46.jpg';
import model_47 from '../../Assets/image/model_47.jpg';
import model_48 from '../../Assets/image/model_48.jpg';
import model_49 from '../../Assets/image/model_49.jpg';
import model_50 from '../../Assets/image/model_50.jpg';
import model_51 from '../../Assets/image/model_51.jpg';
import model_52 from '../../Assets/image/model_52.jpg';
import model_53 from '../../Assets/image/model_53.jpg';
import model_54 from '../../Assets/image/model_54.jpg';
import model_55 from '../../Assets/image/model_55.jpg';
import model_56 from '../../Assets/image/model_56.jpg';
import model_57 from '../../Assets/image/model_57.jpg';
import model_58 from '../../Assets/image/model_58.jpg';
import model_59 from '../../Assets/image/model_59.jpg';
import model_60 from '../../Assets/image/model_60.jpg';
import model_61 from '../../Assets/image/model_61.jpg';
import model_62 from '../../Assets/image/model_62.jpg';
import model_63 from '../../Assets/image/model_63.jpg';
import model_64 from '../../Assets/image/model_64.jpg';
import model_65 from '../../Assets/image/model_65.jpg';
import model_66 from '../../Assets/image/model_66.jpg';
import model_67 from '../../Assets/image/model_67.jpg';
import model_68 from '../../Assets/image/model_68.jpg';
import model_69 from '../../Assets/image/model_69.jpg';
import model_70 from '../../Assets/image/model_70.jpg';
import model_71 from '../../Assets/image/model_71.jpg';
import model_72 from '../../Assets/image/model_72.jpg';
import model_73 from '../../Assets/image/model_73.jpg';
import model_74 from '../../Assets/image/model_74.jpg';
import model_75 from '../../Assets/image/model_75.jpg';
import model_76 from '../../Assets/image/model_76.jpg';
import model_77 from '../../Assets/image/model_77.jpg';
import model_78 from '../../Assets/image/model_78.jpg';
import model_79 from '../../Assets/image/model_79.jpg';
import model_80 from '../../Assets/image/model_80.jpg';
import model_81 from '../../Assets/image/model_81.jpg';
import model_82 from '../../Assets/image/model_82.jpg';
import model_83 from '../../Assets/image/model_83.jpg';
import model_84 from '../../Assets/image/model_84.jpg';
import model_85 from '../../Assets/image/model_85.jpg';
import model_86 from '../../Assets/image/model_86.jpg';
import model_87 from '../../Assets/image/model_87.jpg';
import model_88 from '../../Assets/image/model_88.jpg';
import model_89 from '../../Assets/image/model_89.jpg';
import model_90 from '../../Assets/image/model_90.jpg';
import model_91 from '../../Assets/image/model_91.jpg';
import model_92 from '../../Assets/image/model_92.jpg';
import model_93 from '../../Assets/image/model_93.jpg';
import model_94 from '../../Assets/image/model_94.jpg';
import model_95 from '../../Assets/image/model_95.jpg';
import model_96 from '../../Assets/image/model_96.jpg';
import model_97 from '../../Assets/image/model_97.jpg';
import model_98 from '../../Assets/image/model_98.jpg';
import model_99 from '../../Assets/image/model_99.jpg';
import model_100 from '../../Assets/image/model_100.jpg';
import model_101 from '../../Assets/imag/model_101.jpg';
import model_102 from '../../Assets/imag/model_102.jpg';
import model_103 from '../../Assets/imag/model_103.jpg';
import model_104 from '../../Assets/imag/model_104.jpg';
import model_105 from '../../Assets/imag/model_105.jpg';
import model_106 from '../../Assets/imag/model_106.jpg';
import model_107 from '../../Assets/imag/model_107.jpg';
import model_108 from '../../Assets/imag/model_108.jpg';
import model_109 from '../../Assets/imag/model_109.jpg';
import model_110 from '../../Assets/imag/model_110.jpg';
import model_111 from '../../Assets/imag/model_111.jpg';
import model_112 from '../../Assets/imag/model_112.jpg';
import model_113 from '../../Assets/imag/model_113.jpg';
import model_114 from '../../Assets/imag/model_114.jpg';
import model_115 from '../../Assets/imag/model_115.jpg';
import model_116 from '../../Assets/imag/model_116.jpg';
import model_117 from '../../Assets/imag/model_117.jpg';
import model_118 from '../../Assets/imag/model_118.jpg';
import model_119 from '../../Assets/imag/model_119.jpg';
import model_120 from '../../Assets/imag/model_120.jpg';

const Embrodery1 = () => {
  
  const [activeCard, setActiveCard] = useState(null);
   const [selectedImage, setSelectedImage] = useState(null);
          const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
          const [showForm, setShowForm] = useState(false);
          const [orderSuccessMsg, setOrderSuccessMsg] = useState('');

  useEffect(() => {
    document.body.classList.add('emplo-bg');
    return () => {
      document.body.classList.remove('emplo-bg');
    };
  }, []);
  

  const cards = [
    {
      id: 1,
      image: model_1,  
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-1',
    },
    {
      id: 2,
      image: model_2,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-2',
    },
    {
      id: 3,
      image: model_3,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-3',
    },
    {
      id: 4,
      image: model_4,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-4',
    },
    {
      id: 5,
      image: model_5,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-5',
    },
    {
      id: 6,
      image: model_6,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-6',
    },
    {
      id: 7,
      image: model_7,
      name:'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-7',
    },
    {
      id: 8,
      image: model_8,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-8',
    },
    {
      id: 9,
      image: model_9,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-9',
    },
    {
      id: 10,
      image: model_10,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-10',
    },
    {
      id: 11,
      image: model_11,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-11',
    },
    {
      id: 12,
      image: model_12,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-12',
    },
    {
      id: 13,
      image: model_13,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-13',
    },
    {
      id: 14,
      image: model_14,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-14',
    },
    {
      id: 15,
      image: model_15,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-15',
    },
    {
      id: 16,
      image: model_16,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-16',
    },
    {
      id: 17,
      image: model_17,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-17',
    },
    {
      id: 18,
      image: model_18,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-18',
    },
    {
      id: 19,
      image: model_19,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-19',
    },
    {
      id: 20,
      image: model_20,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-20',
    },
    {
      id: 21,
      image: model_21,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-21',
    },
    {
      id: 22,
      image: model_22,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-22',
    },
    {
      id: 23,
      image: model_23,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-23',
    },
    {
      id: 24,
      image: model_24,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-24',
    },
    {
      id: 25,
      image: model_25,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-25',
    },
    {
      id: 26,
      image: model_26,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-26',
    },
    {
      id: 27,
      image: model_27,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-27',
    },
    {
      id: 28,
      image: model_28,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-28',
    },
    {
      id: 29,
      image: model_29,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-29',
    },
    {
      id: 30,
      image: model_30,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-30',
    },
    {
      id: 31,
      image: model_31,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-31',
    },
    {
      id: 32,
      image: model_32,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-32',
    },
    {
      id: 33,
      image: model_33,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-33',
    },
    {
      id: 34,
      image: model_34,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-34',
    },
    {
      id: 35,
      image: model_35,
      name:'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-35',
    },
    {
      id: 36,
      image: model_36,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-36',
    },
    {
      id: 37,
      image: model_37,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-37',
    },
    {
      id: 38,
      image: model_38,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-38',
    },
    {
      id: 39,
      image: model_39,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-39',
    },
    {
      id: 40,
      image: model_40,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-40',
    },
    {
      id: 41,
      image: model_41,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-41',
    },
    {
      id: 42,
      image: model_42,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-42',
    },
    {
      id: 43,
      image: model_43,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-43',
    },
    {
      id: 44,
      image: model_44,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-44',
    },
    {
      id: 45,
      image: model_45,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-45',
    },
    {
      id: 46,
      image: model_46,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-46',
    },
    {
      id: 47,
      image: model_47,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-47',
    },
    {
      id: 48,
      image: model_48,
      name:'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-48',
    },
    {
      id: 49,
      image: model_49,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-49',
    },
    {
      id: 50,
      image: model_50,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-50',
    },
    {
      id: 51,
      image: model_51,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-51',
    },
    {
      id: 52,
      image: model_52,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-52',
    },
    {
      id: 53,
      image: model_53,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-53',
    },
    {
      id: 54,
      image: model_54,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-54',
    },
    {
      id: 55,
      image: model_55,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-55',
    },
    {
      id: 56,
      image: model_56,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-56',
    },
    {
      id: 57,
      image: model_57,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-57',
    },
    {
      id: 58,
      image: model_58,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-58',
    },
    {
      id: 59,
      image: model_59,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-59',
    },
    {
      id: 60,
      image: model_60,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-60',
    },
    {
      id: 61,
      image: model_61,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-61',
    },
    {
      id: 62,
      image: model_62,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-62',
    },
    {
      id: 63,
      image: model_63,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-63',
    },
    {
      id: 64,
      image: model_64,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-64',
    },
    {
      id: 65,
      image: model_65,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-65',
    },
    {
      id: 66,
      image: model_66,
      name:'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-66',
    },
    {
      id: 67,
      image: model_67,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-67',
    },
    {
      id: 68,
      image: model_68,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-68',
    },
    {
      id: 69,
      image: model_69,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-69',
    },
    {
      id: 70,
      image: model_70,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-70',
    },
    {
      id: 71,
      image: model_71,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-71',
    },
    {
      id: 72,
      image: model_72,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-72',
    },

    {
      id: 73,
      image: model_73,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-73',
    },

    {
      id: 74,
      image: model_74,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-74',
    },

    {
      id: 75,
      image: model_75,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-75',
    },

    {
      id: 76,
      image: model_76,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-76',
    },

    {
      id: 77,
      image: model_77,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-77',
    },

    {
      id: 78,
      image: model_78,
      name:'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-78',
    },

    {
      id: 79,
      image: model_79,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-79',
    },

    {
      id: 80,
      image: model_80,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-80',
    },

    {
      id: 81,
      image: model_81,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-81',
    },

    {
      id: 82,
      image: model_82,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-82',
    },

    {
      id: 83,
      image: model_83,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-83',
    },

    {
      id: 84,
      image: model_84,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-84',
    },

    {
      id: 85,
      image: model_85,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-85',
    },

    {
      id: 86,
      image: model_86,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-86',
    },

    {
      id: 87,
      image: model_87,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-87',
    },

    {
      id: 88,
      image: model_88,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-88',
    },

    {
      id: 89,
      image: model_89,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-89',
    },

    {
      id: 90,
      image: model_90,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-90',
    },
    {
      id: 91,
      image: model_91,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-91',
    },
    {
      id: 92,
      image: model_92,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-92',
    },
    {
      id: 93,
      image: model_93,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-93',
    },
    {
      id: 94,
      image: model_94,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-94',
    },
    {
      id: 95,
      image: model_95,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-95',
    },
    {
      id: 96,
      image: model_96,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-96',
    },
    {
      id: 97,
      image: model_97,
      name:'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-97',
    },
    {
      id: 98,
      image: model_98,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-98',
    },
    {
      id: 99,
      image: model_99,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-99',
    },
    {
      id: 100,
      image: model_100,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-100',
    },
    {
      id: 101,
      image: model_101,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-101',
    },
    {
      id: 102,
      image: model_102,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-102',
    },
    {
      id: 103,
      image: model_103,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-103',
    },
    {
      id: 104,
      image: model_104,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-104',
    },
    {
      id: 105,
      image: model_105,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-105',
    },
    {
      id: 106,
      image: model_106,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-106',
    },
    {
      id: 107,
      image: model_107,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-107',
    },
    {
      id: 108,
      image: model_108,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-108',
    },
    {
      id: 109,
      image: model_109,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-109',
    },
    {
      id: 110,
      image: model_110,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-110',
    },
    {
      id: 111,
      image: model_111,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-111',
    },
    {
      id: 112,
      image: model_112,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-112',
    },
    {
      id: 113,
      image: model_113,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-113',
    },
    {
      id: 114,
      image: model_114,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-114',
    },
    {
      id: 115,
      image: model_115,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-115',
    },
    {
      id: 116,
      image: model_116,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-116',
    },
    {
      id: 117,
      image: model_117,
      name:'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-117',
    },
    {
      id: 118,
      image: model_118,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-118',
    },
    {
      id: 119,
      image: model_119,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-119',
    },
    {
      id: 120,
      image: model_120,
      name: 'Click the whatsapp icon to buy',
      desc: '',
      customClass: 'card-style-120',
      
      
    },


  ];

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  const handleClose = () => {
    setActiveCard(null);
  };
  const handleOrderClick = (img) => {
    setSelectedImage(img);
    setShowForm(true);
    setOrderSuccessMsg('');
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      ...formData,
      image: selectedImage.image,
      caption: selectedImage.caption || 'No caption',
      date: new Date().toLocaleString()
    };

    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (res.ok) {
        setOrderSuccessMsg("✅ Order placed successfully!");
        setFormData({ name: '', phone: '', address: '' });

        setTimeout(() => {
          setShowForm(false);
          setOrderSuccessMsg('');
        }, 2000); // hide modal after 2 seconds
      } else {
        setOrderSuccessMsg("❌ Failed to place order.");
      }
    } catch (err) {
      console.error("Order error:", err);
      setOrderSuccessMsg("❌ Error placing order.");
    }
  };

  return (
    <>
      
    
      <div className="embro-wrapper">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`embro-card ${card.customClass}`}
            onClick={() => handleCardClick(card)}
          >
            <img src={card.image} alt={card.name} className="embro-img" />
          </div>
        ))}
      </div>

      {activeCard && (
        <div className="overlay-screen" onClick={handleClose}>
          <div className="overlay-content">
            <img
              src={activeCard.image}
              alt={activeCard.name}
              className="overlay-img"
            />
            <h2 className="overlay-title">{activeCard.name}</h2>
            <p className="overlay-desc"><button onClick={() => handleOrderClick(activeCard)} className='saree1-btn'>Order now</button>

{activeCard.desc}</p>
          </div>
        </div>
      )}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h2>Order Form</h2>
            <img src={selectedImage.image} alt="selected" className='preview-img' />

            {orderSuccessMsg && <p className="order-success-msg">{orderSuccessMsg}</p>}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Submit Order</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
       <div className='em-btn'>
      <Link to="/views2"><button>View All</button></Link>
     </div>
      
    </>
  );
};

export default Embrodery1;
