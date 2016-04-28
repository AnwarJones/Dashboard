namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("AcctgAll")]
    public partial class AcctgAll
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RowId { get; set; }

        public decimal? MOS { get; set; }

        public decimal? YR { get; set; }

        [Column(TypeName = "money")]
        public decimal? CURBAL { get; set; }

        [Column("INCOME STMT-FAMILY")]
        public string INCOME_STMT_FAMILY { get; set; }

        [Column("INCOME STMT-CLASS")]
        public string INCOME_STMT_CLASS { get; set; }

        [Column("INCOME STMT-SUB CLASS")]
        public string INCOME_STMT_SUB_CLASS { get; set; }

        [Column("INCOME STMT-GROUP")]
        public string INCOME_STMT_GROUP { get; set; }

        public decimal? ZMOS { get; set; }

        public decimal? ZMOSYR { get; set; }

        [Column("MASTER TYPE")]
        public string MASTER_TYPE { get; set; }

        [Column(TypeName = "money")]
        public decimal? zfixedexp { get; set; }

        [Column(TypeName = "money")]
        public decimal? ZGROSS { get; set; }

        [Column(TypeName = "money")]
        public decimal? ZNETADDS { get; set; }
    }
}
