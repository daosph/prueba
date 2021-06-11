
package co.com.co.doamin;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.*;


@Entity
@NamedQueries({
     @NamedQuery(name = "Persona.encontrarTodasLasPersonas", query = "SELECT p FROM Persona p ORDER BY p.idPersona")
})
public class Persona implements Serializable{
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   
    private int idPersona;
    
    private String nombre;
    
    private Date fecha;
    
    private String sexo;

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    
    
    public Persona(){
        
    }
    
    public Persona(int IdPersona){
        this.idPersona=IdPersona;
    }
    
    public Persona( int idPersona, String nombre){
        
        this.idPersona = idPersona;
        
        this.nombre = nombre;
    }

    public int getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(int idPersona) {
        this.idPersona = idPersona;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + ", nombre=" + nombre + '}';
    }
    
    
}
