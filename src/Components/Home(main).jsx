import { motion } from "framer-motion";
import {
  FaSeedling,
  FaUsers,
  FaHandsHelping,
  FaLeaf,
} from "react-icons/fa";
import { SiHappycow } from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const KrishiIntroSection = () => {
  return (
    <section className="bg-white py-28 ">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-green-700">
            कृषि मित्र – एक साझा डिजिटल कृषि मंच
          </h2>

          <p className="mt-6 text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
            कृषि मित्र एक समग्र डिजिटल प्लेटफ़ॉर्म है, जिसका उद्देश्य
            किसानों और पशुपालकों को सही जानकारी, सही समय और सही माध्यम
            के साथ जोड़ना है। यह मंच खेती, पशुपालन, शिक्षा और तकनीक को
            एक साथ लाकर ग्रामीण भारत को अधिक सक्षम और आत्मनिर्भर बनाने
            की दिशा में कार्य करता है।
          </p>

          <p className="mt-4 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            यह प्लेटफ़ॉर्म केवल जानकारी देने तक सीमित नहीं है, बल्कि
            यह किसानों की वास्तविक समस्याओं को समझकर उनके लिए व्यावहारिक
            और ज़मीनी समाधान विकसित करने पर केंद्रित है।
          </p>
        </motion.div>

        {/* CONTENT FLOW */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >

          {/*  1 */}
          <motion.div variants={item} className="flex gap-6 items-start">
           
            <div>
              <div className="text-green-700 flex gap-6 text-3xl mt-1">
              <FaSeedling /> <h3 className="text-xl font-semibold text-gray-800">
                खेती के लिए व्यावहारिक और समयानुकूल सलाह
              </h3>
            </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                कृषि मित्र किसानों को उनकी फसल, मिट्टी की स्थिति,
                जल उपलब्धता और मौसम के अनुसार सरल और उपयोगी मार्गदर्शन
                प्रदान करता है, जिससे खेती से जुड़े निर्णय अधिक
                समझदारी और आत्मविश्वास के साथ लिए जा सकें।
              </p>
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div variants={item} className="flex gap-6 items-start">
            
            <div>
            <div className="text-green-700 flex items-center any-pointer-non gap-5 text-3xl mt-1">
             <SiHappycow />  <h3 className="text-xl font-semibold text-gray-800">
                पशुपालन के लिए समर्पित सहयोग
              </h3>
            </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                यह मंच पशुपालकों को पशुओं की देखभाल, चारा प्रबंधन,
                स्वास्थ्य और टीकाकरण से संबंधित जानकारी प्रदान करता है,
                ताकि पशुपालन किसानों की आय का एक मजबूत और सुरक्षित
                स्रोत बन सके।
              </p>
            </div>
          </motion.div>

          {/*  3 */}
          <motion.div variants={item} className="flex gap-6 items-start">
           
            <div>
               <div className="text-green-700 flex items-center gap-5 text-3xl mt-1">
              <FaUsers /><h3 className="text-xl font-semibold text-gray-800">
                किसान–छात्र–विशेषज्ञ के बीच सेतु
              </h3>
            </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                कृषि मित्र छात्रों और विशेषज्ञों को किसानों की वास्तविक
                समस्याओं से जोड़ता है, जिससे शैक्षणिक ज्ञान का उपयोग
                ज़मीनी समाधान तैयार करने में किया जा सके और नवाचार को
                बढ़ावा मिले।
              </p>
            </div>
          </motion.div>

          {/*  4 */}
          <motion.div variants={item} className="flex gap-6 items-start">
            
            <div>
              <div className="text-green-700 flex items-center gap-5 text-3xl mt-1">
              <FaHandsHelping /><h3 className="text-xl font-semibold text-gray-800">
                सरकारी योजनाओं तक सरल और पारदर्शी पहुँच
              </h3>
            </div>
              <p className="mt-3 text-gray-600 leading-relaxed">
                यह प्लेटफ़ॉर्म कृषि और पशुपालन से जुड़ी सरकारी योजनाओं,
                अनुदानों और सहायता कार्यक्रमों की जानकारी सरल भाषा में
                प्रदान करता है, जिससे किसान सही जानकारी के अभाव में
                होने वाले नुकसान से बच सकें।
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* CLOSING LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <FaLeaf className="mx-auto text-green-700 text-4xl mb-4" />
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            कृषि मित्र का उद्देश्य तकनीक को किसानों के लिए सरल,
            भरोसेमंद और उपयोगी बनाना है, ताकि खेती और पशुपालन
            आने वाले समय में अधिक टिकाऊ और लाभकारी बन सकें।
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default KrishiIntroSection;
