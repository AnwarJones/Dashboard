namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("VehicleAR")]
    public partial class VehicleAR
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        public int? Age { get; set; }

        [Column(TypeName = "money")]
        public decimal? TransactionAmount { get; set; }

        [StringLength(64)]
        public string ControlNumber { get; set; }

        [StringLength(255)]
        public string idsid { get; set; }

        [StringLength(64)]
        public string AccountNumber { get; set; }

        [StringLength(64)]
        public string Description { get; set; }

        public DateTime? CommentDate { get; set; }

        [StringLength(255)]
        public string Comment { get; set; }

        [StringLength(64)]
        public string PostStatus { get; set; }

        public int? zfage { get; set; }
    }
}
