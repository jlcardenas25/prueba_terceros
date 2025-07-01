@RestController
@RequestMapping("/api/terceros")
@CrossOrigin(origins = "*")
public class TerceroController {

    @Autowired
    private TerceroService service;

    @GetMapping("/{doc}")
    public ResponseEntity<Tercero> consultar(@PathVariable String doc) {
        return service.buscar(doc)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/")
    public ResponseEntity<Tercero> actualizar(@RequestBody Tercero tercero) {
        return ResponseEntity.ok(service.actualizar(tercero));
    }
}