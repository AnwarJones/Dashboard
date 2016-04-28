namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("warrantyAR")]
    public partial class warrantyAR
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        public int? zage { get; set; }

        public DateTime? CommentDate { get; set; }

        [StringLength(255)]
        public string Comment { get; set; }

        [StringLength(50)]
        public string username { get; set; }

        [StringLength(64)]
        public string ACCTNUM { get; set; }

        [StringLength(64)]
        public string CTRLNUM { get; set; }

        [Column(TypeName = "money")]
        public decimal? POSTAMT { get; set; }

        [StringLength(64)]
        public string Description { get; set; }

        [StringLength(255)]
        public string FSACCT { get; set; }

        [StringLength(255)]
        public string idsid { get; set; }

        [StringLength(64)]
        public string RONumber { get; set; }
    }
}
