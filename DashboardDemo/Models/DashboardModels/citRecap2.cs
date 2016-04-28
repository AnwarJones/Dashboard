namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class citRecap2
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        public int? Age { get; set; }

        [Column(TypeName = "money")]
        public decimal? TransactionAmount { get; set; }

        [StringLength(64)]
        public string ControlNumber { get; set; }

        [StringLength(64)]
        public string AccountNumber { get; set; }

        [StringLength(20)]
        public string Description { get; set; }

        public DateTime? CommentDate { get; set; }

        [StringLength(255)]
        public string Comment { get; set; }

        [StringLength(64)]
        public string PostStatus { get; set; }

        public int? zfage { get; set; }

        public int? DealAge { get; set; }

        [StringLength(255)]
        public string FSACCT { get; set; }

        [StringLength(255)]
        public string idsid { get; set; }

        [StringLength(50)]
        public string groupname { get; set; }

        [StringLength(64)]
        public string OutsideDocNumber { get; set; }
    }
}
