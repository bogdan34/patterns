class Computer {
}

class ComputerBuilder {
    constructor() {
        this.computer = null;
    }

    createComputer() {
        this.computer = new Computer();

        this.installMotheboard();
        this.installProcessor();
        this.installMemory();
        this.installVideoCard();
        this.installHardDrive();
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

const builder = new ComputerBuilder();

builder.createComputer();
const computer = builder.getComputer()