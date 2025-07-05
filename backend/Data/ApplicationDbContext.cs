//usingは名前空間をインポートする命令
using Microsoft.EntityFrameworkCore;
using app.Models;

namespace app.Data
{
    public class ApplicationDbContext : DbContext // DbContext(データベースとアプリの橋渡し役をするクラス)を継承
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        //DbSet<Task> Task モデル（クラス）に対応するテーブル
        public DbSet<app.Models.Task> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<app.Models.Task>(entity =>
            {
                //entity.Property(e => e.CreatedAt)
            //      .HasDefaultValueSql("CURRENT_TIMESTAMP");
            ////「レコードを新規作成したとき、何も指定しなければ、自動的に 現在時刻（CURRENT_TIMESTAMP） を入れてね」と指示
            //    entity.Property(e => e.UpdatedAt)
            //          .HasDefaultValueSql("CURRENT_TIMESTAMP")
            //          .ValueGeneratedOnAddOrUpdate();
            });
        }
    }
}