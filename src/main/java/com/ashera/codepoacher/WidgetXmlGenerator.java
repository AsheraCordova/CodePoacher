package com.ashera.codepoacher;

import com.ashera.codegen.XmlCodeGen;

public class WidgetXmlGenerator {
	public static void main(String[] args) throws Exception {
		String projectBaseDir = System.getProperty("baseDir");
		if (projectBaseDir == null) {
			throw new RuntimeException("Please define system -DbaseDir=XX");
		}
		String pathname = projectBaseDir + "/codepoacher/";
		XmlCodeGen.main(new String[] {pathname + "config/"});
	}
}
