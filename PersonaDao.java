
package co.com.co.Data;

import co.com.co.doamin.Persona;
import java.util.List;

public interface PersonaDao {

public List<Persona> encontrarTodasPersonas();    

public Persona encontrarPersona(Persona persona);

public void insertarPersona(Persona persona);

public void actulizarPersona(Persona persona);

public void eliminarPersona(Persona persona);

    public List<Persona> encontrarPerosanas();
}
