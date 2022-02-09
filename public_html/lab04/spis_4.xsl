<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
<xsl:output method="html" version="1.0"
     indent="yes" doctype-system="about:legacy-compact" />
<xsl:template match="/">
        <html>
            <head>
                <title>
                    Lista osob
                </title>
            </head>
            <body>
                <h1>
                    Spis osob
                </h1>
                <xsl:apply-templates select="dane/miasto[nazwa='Opole']" />
                <xsl:apply-templates select="dane/miasto[nazwa='Krakow']" />
                 
            </body>
        </html>
</xsl:template>
<xsl:template match="miasto">
  <h2><xsl:value-of select="./nazwa" /></h2>
  <table border="1" cellpadding="5">
        <tr>
                     
           <th>Imie</th>
           <th>Nazwisko</th>
           <th>Status</th>
        </tr>
        <xsl:for-each select="osoba" >
           <xsl:sort select="nazwisko/text()" />
           <xsl:call-template name="osoba" />
        </xsl:for-each>
  </table>
   
</xsl:template>
<xsl:template name="osoba" >
  <tr>
   <td><xsl:value-of select="imie" /></td>
   <td><xsl:value-of select="nazwisko" /></td>
   <td><xsl:value-of select="status" /></td>
  </tr>
</xsl:template>
</xsl:stylesheet>
