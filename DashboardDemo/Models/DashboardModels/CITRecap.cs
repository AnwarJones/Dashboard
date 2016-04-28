namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CITRecap")]
    public partial class CITRecap
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        [Column(TypeName = "money")]
        public decimal? TransactionAmount { get; set; }

        [StringLength(64)]
        public string ControlNumber { get; set; }

        [StringLength(64)]
        public string ReconcileStatus { get; set; }

        [StringLength(64)]
        public string AccountNumber { get; set; }

        [StringLength(64)]
        public string PostStatus { get; set; }

        [StringLength(255)]
        public string FSACCT { get; set; }
    }
}
