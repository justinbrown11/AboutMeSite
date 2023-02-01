using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace AboutMe.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0.00, 100.00)]
        public decimal assignmentScore { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public decimal groupProjectScore { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public decimal quizScore { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public decimal midtermScore { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public decimal finalScore { get; set; }

        [Required]
        [Range(0.00, 100.00)]
        public decimal intexScore { get; set; }
    }
}
