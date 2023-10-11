import java.io.IOException;

public class CLIApp {
	public static void main(String[] args) throws IOException {
		CLIApp cli = new CLIApp();
		String commandName = args[0];
		Runtime.getRuntime().exec(commandName);

		cli.process();
	}

	public void process() {
		while(true){
			String command = fetchCommandFromUser();
			if(!Utils.verify(command))
				continue;
			pass(command);
		}
	}

	public String fetchCommandFromUser(){
		return Utils.fetchCommand();
	}

	private void pass(String command){
		try{
			Runtime.getRuntime().exec(command);
		} catch(IOException ioe){}
	}
}
