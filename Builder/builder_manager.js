class Computer {
}
class Motheboard {
}
class Processor {
}
class Memory {
}
class VideoCard {
}
class HardDrive {
}

class ComputerBuilder {
    constructor() {
        this.createComputer();
    }

    createComputer() {
        this.computer = new Computer();
    }

    installMotheboard() {
        this.computer.motheboard = new Motheboard();
    }

    installProcessor() {
        this.computer.processor = new Processor();
    }

    installMemory() {
        this.computer.memory = new Memory();
    }

    installVideoCard() {
        this.computer.videoCard = new VideoCard();
    }

    installHardDrive() {
        this.computer.hardDrive = new HardDrive();
    }

    getComputer() {
        return this.computer;
    }
}

class Manager {
    constructor(builder) {
        this.builder = builder;
    }

    buildComputer() {
        this.builder.installMotheboard();
        this.builder.installProcessor();
        this.builder.installMemory();
        this.builder.installVideoCard();
        this.builder.installHardDrive();
    }

    getComputer() {
        return this.builder.getComputer();
    }
}

const manager = new Manager(new ComputerBuilder());

manager.buildComputer();
const computer = manager.getComputer();
console.log(computer);