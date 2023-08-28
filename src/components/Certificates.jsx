import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({ index, title, institution, description, image }) => {
  const imageUrl = image; // Reemplaza esto con la URL de la imagen

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={`${title} Certificate`}
            className='w-full h-auto rounded-2xl'
          />
        </a>
        <h3 className='text-white font-bold text-[24px] mt-3'>{title}</h3>
        <p className='mt-2 text-secondary'>{institution}</p>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Certificates</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            title={certificate.title}
            institution={certificate.institution}
            description={certificate.description}
            image={certificate.image}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");