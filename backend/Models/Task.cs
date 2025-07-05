// 日付や時間（DateTime など）を使うための命令
using System;
//バリデーションを使うための命令
using System.ComponentModel.DataAnnotations;
//データベースに関する属性を使うための命令
using System.ComponentModel.DataAnnotations.Schema;

//名前衝突を防ぐために名前空間を宣言
//これにより同じ名前のクラスが別々の名前空間にあれば、名前がかぶっても大丈夫
namespace app.Models
{
    public class Task
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //このIDはDB側が自動採番（自動増分）しますよ」という指定
        public int Id { get; private set; }
        //private setで内部でだけ変更可能にしている,
        //setにすると外部からも書き込み可能になってしまう


        [Required]
        [StringLength(100)]
        public string Content { get; set; }

        public bool IsCompleted { get; set; } = false; //初期値を false

        public DateTime? DueDate { get; set; } // ? が付いているのは「null許容型」＝値がなくてもOKという意味

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}