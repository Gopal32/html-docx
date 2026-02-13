import namespaces from '../namespaces.js';

const generateDocumentTemplate = (width, height, orientation, margins) => `
  <?xml version="1.0" encoding="UTF-8" standalone="yes"?>

    <w:document
        xmlns:wpc="${namespaces.wpc}"
        xmlns:cx="${namespaces.cx}"
        xmlns:cx1="${namespaces.cx1}"
        xmlns:cx2="${namespaces.cx2}"
        xmlns:cx3="${namespaces.cx3}"
        xmlns:cx4="${namespaces.cx4}"
        xmlns:cx5="${namespaces.cx5}"
        xmlns:cx6="${namespaces.cx6}"
        xmlns:cx7="${namespaces.cx7}"
        xmlns:cx8="${namespaces.cx8}"
        xmlns:mc="${namespaces.mc}"
        xmlns:aink="${namespaces.aink}"
        xmlns:am3d="${namespaces.am3d}"
        xmlns:o="${namespaces.o}"
        xmlns:oel="${namespaces.oel}"
        xmlns:r="${namespaces.r}"
        xmlns:m="${namespaces.m}"
        xmlns:v="${namespaces.v}"
        xmlns:wp14="${namespaces.wp14}"
        xmlns:wp="${namespaces.wp}"
        xmlns:w10="${namespaces.w10}"
        xmlns:w="${namespaces.w}"
        xmlns:w14="${namespaces.w14}"
        xmlns:w15="${namespaces.w15}"
        xmlns:w16cex="${namespaces.w16cex}"
        xmlns:w16cid="${namespaces.w16cid}"
        xmlns:w16="${namespaces.w16}"
        xmlns:w16du="${namespaces.w16du}"
        xmlns:w16sdtdh="${namespaces.w16sdtdh}"
        xmlns:w16sdtfl="${namespaces.w16sdtfl}"
        xmlns:w16se="${namespaces.w16se}"
        xmlns:wpg="${namespaces.wpg}"
        xmlns:wpi="${namespaces.wpi}"
        xmlns:wne="${namespaces.wpe}"
        xmlns:wps="${namespaces.wps}"
        mc:Ignorable="${namespaces.Ignorable}"
        >
        <w:body>
        </w:body>
    </w:document>
  `;

export default generateDocumentTemplate;
