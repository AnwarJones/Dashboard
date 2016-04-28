namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("dealRecap")]
    public partial class dealRecap
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        public int? month { get; set; }

        public int? year { get; set; }

        [Column(TypeName = "money")]
        public decimal? GAPReserve { get; set; }

        [Column(TypeName = "money")]
        public decimal? LifeReserve { get; set; }

        [Column(TypeName = "money")]
        public decimal? AandHReserve { get; set; }

        [StringLength(64)]
        public string STATUS { get; set; }

        [StringLength(64)]
        public string DEALNUM { get; set; }

        public DateTime? DealDate { get; set; }

        [StringLength(64)]
        public string BuyerNumber { get; set; }

        [StringLength(64)]
        public string StockNumber { get; set; }

        [StringLength(64)]
        public string VIN { get; set; }

        [StringLength(64)]
        public string SearchName { get; set; }

        [StringLength(64)]
        public string UnwindFlag { get; set; }

        [StringLength(64)]
        public string VehicleType { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(4)]
        public string znewused { get; set; }

        [Column(TypeName = "money")]
        public decimal? zfront { get; set; }

        [Column(TypeName = "money")]
        public decimal? zback { get; set; }

        [StringLength(255)]
        public string idsid { get; set; }

        [StringLength(64)]
        public string SaleType { get; set; }

        [StringLength(64)]
        public string Make { get; set; }

        [Key]
        [Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int zcountc { get; set; }

        [Key]
        [Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int zcounta { get; set; }

        [Key]
        [Column(Order = 4)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int zcountu { get; set; }

        [StringLength(30)]
        public string zdayname { get; set; }

        public int? zdealday { get; set; }

        [Key]
        [Column(Order = 5)]
        [StringLength(22)]
        public string ztype { get; set; }

        [StringLength(50)]
        public string IDSStatus { get; set; }
    }
}
