@Service
public class TerceroService {
    @Autowired
    private TerceroRepository repo;

    public Optional<Tercero> buscar(String doc) {
        return repo.findByTerDocumento(doc);
    }

    public Tercero actualizar(Tercero tercero) {
        return repo.save(tercero);
    }
}