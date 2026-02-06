import { motion } from "framer-motion";
import {
  FaChartLine,
  FaSeedling,
  FaStore,
  FaUniversity,
  FaClipboardList,
} from "react-icons/fa";
import { SiHappycow } from "react-icons/si";

const features = [
  {
    icon: <FaChartLine />,
    title: "मंडी भाव देखें",
    desc: "यदि आप अपनी फसल को बेचने से पहले यह जानना चाहते हैं कि नज़दीकी मंडी में वर्तमान भाव क्या चल रहे हैं, तो इस विकल्प के माध्यम से आप अलग-अलग फसलों के ताज़ा बाजार मूल्य आसानी से देख सकते हैं और सही समय पर निर्णय ले सकते हैं।",
    btn: "मंडी भाव देखें",
    link: "/crop-rate",
  },
  {
    icon: <FaSeedling />,
    title: "खेती सलाह प्राप्त करें",
    desc: "फसल चयन, मिट्टी की स्थिति, पानी की उपलब्धता और मौसम के अनुसार खेती से जुड़ी उपयोगी सलाह प्राप्त करने के लिए यह सेक्शन बनाया गया है, ताकि किसान अपनी खेती को अधिक समझदारी और कम जोखिम के साथ आगे बढ़ा सकें।",
    btn: "खेती सलाह",
    link: "/advice",
  },
  
  {
    icon: <FaStore />,
    title: "उत्पाद बेचें",
    desc: "अपने कृषि या पशुपालन से जुड़े उत्पादों को सीधे खरीदारों तक पहुँचाने के लिए यह विकल्प उपलब्ध है, जिससे किसान बिना किसी बिचौलिए के अपने उत्पादों की जानकारी साझा कर सकते हैं और बेहतर मूल्य प्राप्त कर सकते हैं।",
    btn: "उत्पाद जोड़ें",
    link: "/sell-crop",
  },
 
  {
    icon: <FaClipboardList />,
    title: "सरकारी योजनाएँ",
    desc: "कृषि और पशुपालन से संबंधित विभिन्न सरकारी योजनाओं, अनुदानों और सहायता कार्यक्रमों की जानकारी इस सेक्शन में सरल और स्पष्ट भाषा में दी जाती है, ताकि किसान सही जानकारी के अभाव में किसी भी लाभ से वंचित न रहें।",
    btn: "योजनाएँ देखें",
  },
];

const KrishiFeature = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-3 md:px-6">

        

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-semibold text-green-700">
            आप क्या करना चाहते हैं?
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            कृषि मित्र के माध्यम से आप अपनी आवश्यकता के अनुसार अलग-अलग सेवाओं
            तक आसानी से पहुँच सकते हैं।
          </p>
        </motion.div>

        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="
                backdrop-blur-md bg-white/60
                border border-white/40
                rounded-2xl md:p-10 p-2 flex flex-col items-center justify-around
                shadow-sm
              "
            >
              <div className="text-green-700 text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>

              <button
                className="
                  mt-6 inline-block
                  px-8 py-3
                  rounded-full
                  text-green-600 bg-green-100 border border-green-300
                  text-sm
                  font-extrabold
                  hover:bg-green-700
                  hover:text-white
                  transition duration-700 ease-in-out
                "
              >
                <a href={item.link}>{item.btn}</a>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KrishiFeature;
