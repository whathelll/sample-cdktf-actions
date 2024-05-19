import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { LocalProvider } from "@cdktf/provider-local/lib/provider";
import { File } from "@cdktf/provider-local/lib/file";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new LocalProvider(this, "local", {});

    // define resources here
    new File(this, "sample-file", {
      content: "Hello, World!",
      filename: "sample.txt",
      
      });
  }
}

const app = new App();
new MyStack(app, "sample-local");
app.synth();
