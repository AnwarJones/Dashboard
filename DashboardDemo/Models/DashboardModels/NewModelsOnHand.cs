namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("NewModelsOnHand")]
    public partial class NewModelsOnHand
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        [StringLength(64)]
        public string STKNUM { get; set; }

        public DateTime? RECDDATE { get; set; }

        public int? zdaysold { get; set; }

        [StringLength(64)]
        public string STATUS { get; set; }

        [StringLength(64)]
        public string YR { get; set; }

        [StringLength(64)]
        public string MAKE { get; set; }

        [StringLength(64)]
        public string MODEL { get; set; }

        [StringLength(64)]
        public string CARLINE { get; set; }

        [Column(TypeName = "money")]
        public decimal? INVENTORY { get; set; }

        [StringLength(64)]
        public string MODELDESC { get; set; }

        [Column("N/U")]
        [StringLength(64)]
        public string N_U { get; set; }

        [StringLength(64)]
        public string COLORDESC { get; set; }

        [Column(TypeName = "money")]
        public decimal? LISTPRICE { get; set; }

        [StringLength(64)]
        public string zznewused { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(64)]
        public string zzcarline { get; set; }
    }
}
