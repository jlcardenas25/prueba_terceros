public interface TerceroRepository extends JpaRepository<Tercero, String> {
    Optional<Tercero> findByTerDocumento(String documento);
}