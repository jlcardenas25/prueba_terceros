@Entity
@Table(name = "ter_tercero", schema = "public")
public class Tercero {
    @Id
    private String ter_documento;
    private String ter_nombre;
    private String ter_apellidos;
    private String ter_telcelular;
    private String ter_correo;
}