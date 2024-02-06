/**
 * The task here is to implement the builder pattern to create an assignment. 
 * Each assignment is of a subject: it has a level, which means it is either easy, medium, or hard. 
 * It also has a due date.
 * The announcement function given to you displays all this information. 
 * You have to figure out where to put this function’s definition and 
 * how to build the assignment step-by-step.
 */

function Assignment() {
    this.make = function (builder) {
        builder.step1();
        builder.step2();
        builder.step3();
        builder.step4();

        return builder.get();
    }
}

function AssignmentBuilder(subject, difficulty, dueDate) {
    this.assignment = null;
    this.step1 = function () {
        this.assignment = new Task()
    }

    this.step2 = function () {
        this.assignment.addSubject(subject)
    }

    this.step3 = function () {
        this.assignment.addLevel(difficulty)
    }

    this.step4 = function () {
        this.assignment.addDueDate(dueDate)
    }

    this.get = function () {
        return this.assignment
    }
}

function Task() {
    this.subject = null;
    this.level = null;
    this.dueDate = null;

    this.addSubject = function (subject) {
        this.subject = subject;
    }

    this.addLevel = function (level) {
        this.level = level
    }

    this.addDueDate = function (dueDate) {
        this.dueDate = dueDate
    }

    this.announcement = function () {
        console.log(`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`)
    }
}


try {
    var assignment = new Assignment();
    var assignmentBuilder = new AssignmentBuilder("Math", "Hard", "12th June, 2020");
    var mathAssignment = assignment.make(assignmentBuilder);
    mathAssignment.announcement();
} catch (e) {
    console.log(e);
}