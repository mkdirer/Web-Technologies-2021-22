<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" href="./lab03.css"/>
                <title>Biblioteka</title>
            </head>
            <body>
                <table border="1">

                    <tbody>
                        <th colspan="5" align="center" class="biblioteka"><xsl:value-of select="biblioteka/nazwa"/></th>

                        <xsl:for-each select="biblioteka/dzial">

                            <xsl:sort select="nazwadzialu/text()"/>

                                <tr class="nazwadzialu">
                                    <th colspan="5" align="center"><xsl:value-of select="nazwadzialu"/></th>
                                </tr>

                                <tr class="spis">
                                    <td align="left">NUMER:</td>
                                    <td align="left">NAZWISKO:</td>
                                    <td align="left">IMIE:</td>
                                    <td align="left">TYTUŁ:</td>
                                    <td align="left">CENA (ZŁ):</td>
                                </tr>

                                <xsl:for-each select="ksiazka">

                                    <xsl:sort select="autor/nazwisko/text()"/>

                                    <tr class="ksiazka">
                                            <td><xsl:number value="position()" format="1" /></td>

                                            <td align="left">
                                                <xsl:for-each select="autor">     
                                                    <xsl:value-of select="nazwisko"/><br/>     
                                                </xsl:for-each>
                                            </td>

                                            <td align="left">
                                                <xsl:for-each select="autor">   
                                                    <xsl:value-of select="imie"/><br/>     
                                                </xsl:for-each>
                                            </td>

                                            <td align="left"><xsl:value-of select="tytul"/></td>

                                            <td align="left"><xsl:value-of select="cena"/></td>
                                    </tr> 

                                </xsl:for-each>
                                <!-- koniec petli dla wezlow ksiazka -->

                        </xsl:for-each>
                        <!-- koniec petli dla wezlow dzial -->
                    </tbody>

                </table>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>