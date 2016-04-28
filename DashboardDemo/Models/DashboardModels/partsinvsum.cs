namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("partsinvsum")]
    public partial class partsinvsum
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        [StringLength(64)]
        public string PARTNUM { get; set; }

        [Column(TypeName = "money")]
        public decimal? QTYSOLD { get; set; }

        [Column(TypeName = "money")]
        public decimal? QTYREQ { get; set; }

        [Column(TypeName = "money")]
        public decimal? QOH { get; set; }

        public DateTime? SETUPDATE { get; set; }

        public DateTime? LASTSOLD { get; set; }

        [StringLength(255)]
        public string dealername { get; set; }

        [Column("EXT-VAL", TypeName = "money")]
        public decimal? EXT_VAL { get; set; }

        [StringLength(64)]
        public string StockingGroup { get; set; }

        [Column(TypeName = "money")]
        public decimal? StockStatus { get; set; }

        [Column(TypeName = "money")]
        public decimal? TotalCostSales { get; set; }

        [Column(TypeName = "money")]
        public decimal? Cost { get; set; }

        [Column(TypeName = "money")]
        public decimal? mnrz0to3 { get; set; }

        [Column(TypeName = "money")]
        public decimal? mnrz4to6 { get; set; }

        [Column(TypeName = "money")]
        public decimal? mnrz7to9 { get; set; }

        [Column(TypeName = "money")]
        public decimal? mnrz10to12 { get; set; }

        [Column(TypeName = "money")]
        public decimal? mnrz12to24 { get; set; }

        [Column(TypeName = "money")]
        public decimal? mnrz25plus { get; set; }

        [StringLength(255)]
        public string idsid { get; set; }

        [StringLength(64)]
        public string Status { get; set; }

        [Column(TypeName = "money")]
        public decimal? InventoryTurns { get; set; }
    }
}
