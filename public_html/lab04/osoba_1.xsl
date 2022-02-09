<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/"> 
<html> 
   <head> 
      <title>Dane</title> 
   </head> 
   <body> 
        Lista osob
         <table width="200" border="1"> 
         
            <tbody> 
            <tr> 
                  <th colspan="4" align="center">UCZNIOWIE</th> 
               </tr>
            <xsl:for-each select="dane/osoba[@rodzaj='uczen']"> 
               
               
               <tr> 
                  <th align="right">Imie:</th> 
                  <td align="center"><xsl:value-of select="imie"/></td> 
               
                  <th align="right">Nazwisko:</th> 
                  <td align="center"><xsl:value-of select="nazwisko"/></td> 
               </tr> 
               
               
              </xsl:for-each> 
             </tbody> 
         
         </table> 
         <br/> 
           
         <table border="1">
               <tr> 
                  <th colspan="3" align="center">NAUCZYCIELE</th> 
               </tr>
			<tr>
				<th><b>Imie</b></th>
				<th><b>Nazwisko</b></th>
				<th><b>Miasto</b></th>
				
			</tr>
			<xsl:for-each select="dane/osoba[@rodzaj='nauczyciel']">
					<tr >
						<td align="center">
							<xsl:value-of select="imie"/>
						</td>
						<td align="center">
							<xsl:value-of select="nazwisko"/>
						</td>
						<td align="center">
							<xsl:value-of select="miasto"/>
						</td>
						
					</tr>
				</xsl:for-each>
		</table>

   </body> 
</html>  
</xsl:template> 
</xsl:stylesheet>
