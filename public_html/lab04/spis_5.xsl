<xsl:template name="osoba" >
  <tr>
    <td><xsl:number value="position()" format="1" /></td>
   <td><xsl:value-of select="imie" /></td>
   <td><xsl:value-of select="nazwisko" /></td>
   <td><xsl:value-of select="status" /></td>
  </tr>
</xsl:template>
