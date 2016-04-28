namespace DashboardDemo.Models.DashboardModels
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using System.Data.SqlClient;
    using System.Net.Http.Headers;
    using System.Net.Http;
    using System.Web;
    public partial class ModelsContext : DbContext
    {
        public ModelsContext()
            : base(nameOrConnectionString: ConnectionString())
        {
        }

        public virtual DbSet<AcctgAll> AcctgAlls { get; set; }
        public virtual DbSet<CITRecap> CITRecaps { get; set; }
        public virtual DbSet<citRecap2> citRecap2 { get; set; }
        public virtual DbSet<dealRecap> dealRecaps { get; set; }
        public virtual DbSet<NewModelsOnHand> NewModelsOnHands { get; set; }
        public virtual DbSet<partsinvsum> partsinvsums { get; set; }
        public virtual DbSet<VehicleAR> VehicleARs { get; set; }
        public virtual DbSet<VehicleInventoryRecap> VehicleInventoryRecaps { get; set; }
        public virtual DbSet<warrantyAR> warrantyARs { get; set; }
        public virtual DbSet<partsinvsumbysold> partsinvsumbysolds { get; set; }


        
        private static string ConnectionString() {
            HttpContext context = HttpContext.Current;
            string storeId = context.Request.Cookies["userStore"].Value;
            //string serverName = HttpContext.Current.Request.Cookies["servername"].Value;
            


            SqlConnectionStringBuilder sqlBuilder = new SqlConnectionStringBuilder
            {
                DataSource = "da-*****",
                InitialCatalog = storeId,
                PersistSecurityInfo = true,
                UserID = "**",
                Password = "******",
                MultipleActiveResultSets = true,
                ApplicationName = "EntityFramework"

            };
            return sqlBuilder.ToString();
        }
        

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.MOS)
                .HasPrecision(18, 0);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.YR)
                .HasPrecision(18, 0);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.CURBAL)
                .HasPrecision(19, 4);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.INCOME_STMT_FAMILY)
                .IsUnicode(false);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.INCOME_STMT_CLASS)
                .IsUnicode(false);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.INCOME_STMT_SUB_CLASS)
                .IsUnicode(false);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.INCOME_STMT_GROUP)
                .IsUnicode(false);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.ZMOS)
                .HasPrecision(20, 0);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.ZMOSYR)
                .HasPrecision(19, 0);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.MASTER_TYPE)
                .IsUnicode(false);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.zfixedexp)
                .HasPrecision(19, 4);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.ZGROSS)
                .HasPrecision(19, 4);

            modelBuilder.Entity<AcctgAll>()
                .Property(e => e.ZNETADDS)
                .HasPrecision(19, 4);

            modelBuilder.Entity<CITRecap>()
                .Property(e => e.TransactionAmount)
                .HasPrecision(19, 4);

            modelBuilder.Entity<CITRecap>()
                .Property(e => e.ControlNumber)
                .IsUnicode(false);

            modelBuilder.Entity<CITRecap>()
                .Property(e => e.ReconcileStatus)
                .IsUnicode(false);

            modelBuilder.Entity<CITRecap>()
                .Property(e => e.AccountNumber)
                .IsUnicode(false);

            modelBuilder.Entity<CITRecap>()
                .Property(e => e.PostStatus)
                .IsUnicode(false);

            modelBuilder.Entity<CITRecap>()
                .Property(e => e.FSACCT)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.TransactionAmount)
                .HasPrecision(19, 4);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.ControlNumber)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.AccountNumber)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.Comment)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.PostStatus)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.FSACCT)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.idsid)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.groupname)
                .IsUnicode(false);

            modelBuilder.Entity<citRecap2>()
                .Property(e => e.OutsideDocNumber)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.GAPReserve)
                .HasPrecision(19, 4);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.LifeReserve)
                .HasPrecision(19, 4);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.AandHReserve)
                .HasPrecision(19, 4);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.DEALNUM)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.BuyerNumber)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.StockNumber)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.VIN)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.SearchName)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.UnwindFlag)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.VehicleType)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.znewused)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.zfront)
                .HasPrecision(19, 4);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.zback)
                .HasPrecision(19, 4);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.idsid)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.SaleType)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.Make)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.ztype)
                .IsUnicode(false);

            modelBuilder.Entity<dealRecap>()
                .Property(e => e.IDSStatus)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.STKNUM)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.YR)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.MAKE)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.MODEL)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.CARLINE)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.INVENTORY)
                .HasPrecision(19, 4);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.MODELDESC)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.N_U)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.COLORDESC)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.LISTPRICE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.zznewused)
                .IsUnicode(false);

            modelBuilder.Entity<NewModelsOnHand>()
                .Property(e => e.zzcarline)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.PARTNUM)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.QTYSOLD)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.QTYREQ)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.QOH)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.dealername)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.EXT_VAL)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.StockingGroup)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.StockStatus)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.TotalCostSales)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.Cost)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.mnrz0to3)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.mnrz4to6)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.mnrz7to9)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.mnrz10to12)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.mnrz12to24)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.mnrz25plus)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.idsid)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.Status)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsum>()
                .Property(e => e.InventoryTurns)
                .HasPrecision(19, 4);

            modelBuilder.Entity<VehicleAR>()
                .Property(e => e.TransactionAmount)
                .HasPrecision(19, 4);

            modelBuilder.Entity<VehicleAR>()
                .Property(e => e.ControlNumber)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleAR>()
                .Property(e => e.idsid)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleAR>()
                .Property(e => e.AccountNumber)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleAR>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleAR>()
                .Property(e => e.Comment)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleAR>()
                .Property(e => e.PostStatus)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.STKNUM)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.STATUS)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.YR)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.MAKE)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.MODEL)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.CARLINE)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.INVENTORY)
                .HasPrecision(19, 4);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.MODELDESC)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.N_U)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.COLORDESC)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.LISTPRICE)
                .HasPrecision(19, 4);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.zznewused)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.zzcarline)
                .IsUnicode(false);

            modelBuilder.Entity<VehicleInventoryRecap>()
                .Property(e => e.Amount)
                .HasPrecision(19, 4);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.Comment)
                .IsUnicode(false);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.username)
                .IsUnicode(false);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.ACCTNUM)
                .IsUnicode(false);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.CTRLNUM)
                .IsUnicode(false);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.POSTAMT)
                .HasPrecision(19, 4);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.Description)
                .IsUnicode(false);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.FSACCT)
                .IsUnicode(false);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.idsid)
                .IsUnicode(false);

            modelBuilder.Entity<warrantyAR>()
                .Property(e => e.RONumber)
                .IsUnicode(false);
            modelBuilder.Entity<partsinvsumbysold>()
               .Property(e => e.PARTNUM)
               .IsUnicode(false);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.QTYSOLD)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.QTYREQ)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.QOH)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.dealername)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.EXT_VAL)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.StockingGroup)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.StockStatus)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.TotalCostSales)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.Cost)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.mnrz0to3)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.mnrz4to6)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.mnrz7to9)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.mnrz10to12)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.mnrz12to24)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.mnrz25plus)
                .HasPrecision(19, 4);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.idsid)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.Status)
                .IsUnicode(false);

            modelBuilder.Entity<partsinvsumbysold>()
                .Property(e => e.InventoryTurns)
                .HasPrecision(19, 4);
        }
    }
}
