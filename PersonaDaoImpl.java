 

package co.com.co.Data;

import co.com.co.doamin.Persona;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class PersonaDaoImpl  implements PersonaDao{
    
    @PersistenceContext (unitName = "PersonaPU")
    EntityManager em;

    public List<Persona> encontrarPerosanas() {
        
        return em.createNamedQuery("Persona.encontrarTodasLasPersonas").getResultList();
    }

    @Override
    public Persona encontrarPersona(Persona persona) {
        
        return em.find(Persona.class, persona.getIdPersona());
    }

    @Override
    public void insertarPersona(Persona persona) {
        
        em.persist(persona);
        em.flush();
    }

    @Override
    public void actulizarPersona(Persona persona) {
        
        em.merge(persona);
    }

    @Override
    public void eliminarPersona(Persona persona) {
    
        em.remove(em.merge(persona));
        
    }

    @Override
    public List<Persona> encontrarTodasPersonas() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    

}
