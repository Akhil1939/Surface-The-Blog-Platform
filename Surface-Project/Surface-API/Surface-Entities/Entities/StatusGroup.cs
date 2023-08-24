using surface.Entities.DataModels;

namespace Surface.Entities.DataModels;
public class StatusGroup : TimeStampedEntity<byte>
{
    public string EnglishName { get; set; } = null!;
    public string FrenchName { get; set; } = null!;
}
