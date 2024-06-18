import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.text}>ERP</Text>
      </View>
    </Page>
  </Document>
);

const DownloadPdf: React.FC = () => {
  const generatePdf = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    saveAs(blob, 'Document.pdf');
  };

  return (
    <div>
        <p>Click to download Pdf</p>
      <button  onClick={generatePdf}>Download PDF</button>
    </div>
  );
};

export default DownloadPdf;
