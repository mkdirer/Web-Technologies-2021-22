<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html> 
   <head> 
      <title>Lista osob</title> 
   </head> 
   <body> 
        Lista osob
         <table width="400" border="1"> 
           
            <tbody> 
            <xsl:for-each select="dane"> 
               <tr> 
                  <th colspan="4" align="center"><xsl:value-of select="rodzja"/>UCZNIOWIE</th> 
               </tr> 
                             <xsl:for-each select="uczen">
               <tr> 
                  <td align="right">Imie:</td>
                  <td align="center"><xsl:value-of select="text()"/></td>
                  <td align="right">Nazwisko:</td>
                  <td align="center"><xsl:value-of select="text()"/></td>  
               </tr> 
               
               </xsl:for-each> <!-- koniec petli dla wezlow uczen -->
               
                <tr>
                  <th colspan="4" align="center"><xsl:value-of select="rodzja"/>
               </tr>
                 <tr>
                  <td align="right">Imie:</td>
                  <td align="right">Nazwisko:</td>
                  <td align="right">Miasto:</td>
               </tr>

                             <xsl:for-each select="nauczyciel">
               <tr>
                  <td align="right">Imie:</td>
                  <td align="center"><xsl:value-of select="text()"/></td>
                  <td align="right">Nazwisko:</td>
                  <td align="center"><xsl:value-of select="text()"/></td>
                  <td align="right">Miasto:</td>
                  <td align="center"><xsl:value-of select="text()"/></td>                  

               </tr>

               </xsl:for-each> <!-- koniec petli dla wezlow nauczyciel -->


              </xsl:for-each>
             </tbody> 
           
         </table> 
         <br/> 
  
   </body> 
</html>  
</xsl:template> 
</xsl:stylesheet>
